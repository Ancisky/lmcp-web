<template>
  <div  ref="graph" id="graph"></div>
</template>

<script>
import ForceGraph3D from "3d-force-graph";
export default {
  name: "graph",
  data() {
    return {
      loading: true,
      // 3d-graph configurations
      myGraph: null,
      graphData: null,
      db:{
        uri : this.$conf.neo4j.url,
        user : this.$conf.neo4j.username,
        password : this.$conf.neo4j.password
      },
    };
  },
  mounted() {
      this.cancelLoading();
      this.initGraph ()
  },
  methods: {
    cancelLoading() {
      setTimeout(() => {
        this.loading = false;
      }, 2000);
    },

    async initGraph() {
      this.myGraph = ForceGraph3D({
        controlType: "trackball", // orbit沿2d轨迹绕着拖动，fly 固定不动
        rendererConfig:{ antialias: true, alpha: true }
      })(this.$refs.graph)
        .backgroundColor("black")
        .width(this.$refs.graph.parentElement.offsetWidth )
        .height(this.$refs.graph.parentElement.offsetHeight+150)
        .showNavInfo(false)
        // 节点配置
        .nodeAutoColorBy('id')  // 节点颜色
        // .nodeAutoColorBy(node =>node.labels.split(',').sort()[2])  // sample节点颜色
        .nodeOpacity(1)
        .nodeLabel(node => node.labels+'<br>'+JSON.stringify(node.attrs))  //节点标签（鼠标滑到显示）
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
        .nodeVal(node => node.size * 0.05)
        .linkLabel(r => r.type)
        .linkVisibility(true)
        // 边的方向箭头
        // .linkDirectionalArrowLength(3.5)
        .linkDirectionalArrowRelPos(1)
        .linkCurvature(0.25)
        // 连接线上的粒子
        // .linkDirectionalParticles(5) // 粒子数
        .linkDirectionalParticleSpeed(1)
        .linkDirectionalParticleWidth(0.3)
        // 变颜色和透明度
        // .linkColor(()=>'RGB(170,170,170)')
        .linkAutoColorBy(r => r.type)
      // .linkOpacity(0.3)  // 边透明度，越小越透明
      // .dagLevelDistance(10000000)
      /*---------------------------------------加载数据--------------------------------------------*/
      let graph_info = await this.getCyperResult(100000)
      /** 构造3D-Graph数据的边 */
      const links = Object.values(graph_info.rel_info);
      /** 构造3D-Graph数据的节点 */
      const nodes = Object.entries(graph_info.node_info).map(entry=>{
        return {id:entry[0], labels:entry[1].labels, attrs:entry[1].attrs}
      })
      this.myGraph.graphData({
        nodes: nodes, links: links
      })
      /*---------------------------------------设置动画--------------------------------------------*/
      return
      this.myGraph.d3Force('link').distance(400);  //修改节点连线长度,同d3引擎用法
      const distance = 500;
      let angle = 0;
      setInterval(() => {
        this.myGraph.cameraPosition({
          x: distance * Math.sin(angle),
          y: distance * Math.sin(angle),
          z: distance * Math.cos(angle)
        });
        angle += Math.PI / 1000;
      }, 100);
    },
    /**
     * 读取neo4j结果
     * @param limit_items
     * @returns {Promise<{node_info: {}, rel_info: {}}>}
     */
    async getCyperResult(limit_items) {
      const start = new Date()
      const neo4j = require('neo4j-driver')
      const driver = neo4j.driver(this.db.uri, neo4j.auth.basic(this.db.user, this.db.password))
      const session = driver.session()
      const result = await session.run(
          'MATCH (n)-[r]->(m) ' +
          'RETURN ' +
          'id(n) as source, labels(n) as source_labels, properties(n) as source_attrs, ' +
          'id(m) as target, labels(m) as target_labels, properties(m) as target_attrs, ' +
          'id(r) as link,     type(r) as r_type,          properties(r) as r_attrs ' +
          'LIMIT $limit_items ',
          {limit_items: neo4j.int(limit_items)}
      );

      /* 存储节点和边信息
       * node_info[节点ID] = {节点标签：list, 节点属性:dict}
       *   rel_info[边ID] = {  边类别：str,   边属性:dict}
       */
      const node_info = {}
      const rel_info = {}
      result.records.map(r => {
        node_info[r.get('source').toString()] = {
          labels: r.get('source_labels').toString(),
          attrs: r.get('source_attrs').toString()
        };
        node_info[r.get('target').toString()] = {
          labels: r.get('target_labels').toString(),
          attrs: r.get('target_attrs')
        }
        rel_info[r.get('link').toString()] = {
          type: r.get('r_type').toString(),
          attrs: r.get('r_attrs'),
          source: r.get('source').toString(),
          target: r.get('target').toString()
        }
      });
      console.log(Object.keys(node_info).length + " nodes loaded and " + Object.keys(rel_info).length + " links loaded in " + (new Date() - start) + " ms.")
      return {
        node_info,
        rel_info
      }
    },
  }
};
</script>

<style scoped>
#graph{
  background-color: rgba(0,0,0,1);
  padding: 1rem;
  height:100vh;
  /*min-width: 300px;*/
  width: 100%;
  border-radius: 5px;
}
</style>
