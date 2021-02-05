<template>
  <div ref="graph"  id="3d-graph" style="width: 5000px;height: 100%"></div>
</template>

<script>
import ForceGraph3D from '3d-force-graph'
export default {
  name: "graph",
  mounted() {
    this.initDB()
    this.myGraph = ForceGraph3D(this.configOptions) (this.$refs.graph)
        .backgroundColor('white')
        // .width(2000 )
        // .height(1000)
        // 节点配置
        .nodeAutoColorBy(n => parseInt(n.size))  // 节点颜色
        // .nodeAutoColorBy(node =>node.labels.split(',').sort()[2])  // sample节点颜色
        .nodeOpacity(1)
        .nodeLabel(node => `Grain${node.id}: ${node.labels}`)  //节点标签（鼠标滑到显示）
        .onNodeHover(node => this.$refs.graph.style.cursor = node ? 'pointer' : null) // 鼠标滑到节点上改变指针
        .onNodeClick(node => {
          // Aim at node from outside it
          const distance = 40;
          const distRatio = 1 + distance / Math.hypot(node.x, node.y, node.z);
          this.myGraph.cameraPosition(
              {x: node.x * distRatio, y: node.y * distRatio, z: node.z * distRatio}, // new position
              node, // lookAt ({ x, y, z })
              3000  // ms transition duration)  // 鼠标点击节点事件
          )
        })
        // .nodeRelSize(node =>  node.size*100)
        .nodeVal(node =>  node.size*0.05)

        .linkLabel(r => r.type)
        .linkVisibility(true)
        // 边的方向箭头
        // .linkDirectionalArrowLength(3.5)
        .linkDirectionalArrowRelPos(1)
        .linkCurvature(0.25)
        // 连接线上的粒子
        .linkDirectionalParticles("boundLength") // 粒子数
        .linkDirectionalParticleSpeed(r => r.boundLength * 0.01)
        .linkDirectionalParticleWidth(0.3)
        // 变颜色和透明度
        // .linkColor(()=>'RGB(170,170,170)')
        .linkAutoColorBy(r => r.type)
        // .linkOpacity(0.3)  // 边透明度，越小越透明
        // .dagLevelDistance(10000000)

  },
  data(){
    return{
      myGraph: null,
      configOptions:{
        controlType: "trackball", // orbit沿2d轨迹绕着拖动，fly 固定不动
        rendererConfig:{ antialias: true, alpha: true }
      },
      db:{
         uri : "bolt://m88h0ixk7x.54http.tech:59811",
         user : this.$conf.neo4j.username,
         password : this.$conf.neo4j.password
      },

  }},
  methods:{
    async initDB() {
      const start = new Date()
      const neo4j = require('neo4j-driver')
      const driver = neo4j.driver(this.db.uri, neo4j.auth.basic(this.db.user, this.db.password))
      const session = driver.session()
      const result = await session.run(
          'MATCH (n)-[r]->(m) where n.grainID < $limit_grains ' +
          'RETURN ' +
            'id(n) as source, n.size as n_size, labels(n) as n_labels, ' +
            'id(m) as target, m.size as m_size, labels(m) as m_labels, ' +
            'type(r) as type, r.boundLength as boundLength ' +
          'LIMIT $limit_items ',
          {limit_items: 10000, limit_grains:100000}
      )
      const node_attr = new Map()
      result.records.map(r => {
        node_attr[r.get('source').toString()] = {
          size: r.get('n_size').toString(),
          labels:  r.get('n_labels').toString()
        };
        node_attr[r.get('target').toString()] = {
          size: r.get('m_size').toString(),
          labels:  r.get('m_labels').toString()
        }
      });

      const links = result.records.map(r => {
        return {source: r.get('source').toNumber(), target: r.get('target').toNumber(),
          boundLength:r.get('boundLength').toNumber(), type:r.get('type').toString()}
      });
      session.close()
      console.log(links.length + " links loaded in " + (new Date() - start) + " ms.")
      const ids = new Set()
      links.forEach(l => {
        ids.add(l.source);
        ids.add(l.target);
      });
      const gData = {
        nodes: Array.from(ids).map(id => {
          return Object.assign({id},node_attr[id])
        }), links: links
      }
      driver.close()
      this.myGraph.graphData(gData)
      // this.myGraph.d3Force('link').distance(1000);  //修改节点连线长度,同d3引擎用法
      // camera orbit
      // const distance = 300;
      // let angle = 0;
      // setInterval(() => {
      //     this.myGraph.cameraPosition({
      //       x: distance * Math.sin(angle),
      //       z: distance * Math.cos(angle)
      //     });
      //     angle += Math.PI / 800;
      // }, 10);
    },
}
}
</script>

<style scoped>

</style>
