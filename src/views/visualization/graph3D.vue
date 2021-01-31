<template>
  <div ref="graph"  id="3d-graph" style="width: 5000px;height: 100%"></div>
</template>

<script>
import ForceGraph3D from '3d-force-graph'
import qs from "qs"
export default {
  name: "graph",
  mounted() {
    this.myGraph = ForceGraph3D(this.configOptions) (this.$refs.graph)
        .backgroundColor('#000000')
        // .width(2000 )
        // .height(1000)
        // 节点配置
        .nodeAutoColorBy(node =>node.id.split(':')[0])  // sample节点颜色
        .nodeOpacity(1)
        .nodeLabel(node => `${node.id}`)  //节点标签（鼠标滑到显示）
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
        .nodeVal(node => {
          if(node.id.toLowerCase().indexOf("grain")!=-1){
            return 1
          }else  if(node.id.toLowerCase().indexOf("size")!=-1){
            return parseInt(node.id.split(':')[1])*2.3
          }else{
            return parseInt(node.id.split(':')[1])
          }
        })

        .linkLabel(r => r.type)
        // 边的方向箭头
        .linkDirectionalArrowLength(1)
        .linkDirectionalArrowRelPos(1)
        .linkCurvature(0.25)
        // 连接线上的粒子
        // .linkDirectionalParticles("boundLength") // 粒子数
        // .linkDirectionalParticleSpeed(r => r.boundLength * 0.01)
        // .linkDirectionalParticleWidth(0.3)
        // 变颜色和透明度
        // .linkColor(()=>'RGB(130,130,130)')
        // .linkAutoColorBy(r => r.type.replace(/_/g,''))
        .linkOpacity(0.3)  // 边透明度，越小越透明
        // .dagLevelDistance(10000000)

        // 拖动
        .onNodeDragEnd(node => {
          node.fx = node.x;
          node.fy = node.y;
          node.fz = node.z;
        })
    this.show()
  },
  data(){
    return{
      myGraph: null,
      configOptions:{
        controlType: "trackball", // orbit沿2d轨迹绕着拖动，fly 固定不动
        rendererConfig:{ antialias: true, alpha: true }
      },

  }},
  methods:{
    show() {
      const links = []
      const ids  = new Set()
      this.$get("http://127.0.0.1:8000/gv/")
      .then(data=>{
        for(let key in data) {//
          let keyArray = key.replace('[','').replace(']','').replace(/\'/g,"").replace(/\"/g,"").trim().replace(/ /g,'').split(',')
          let sourceNodesType = keyArray[0]
          let targetNodesType = keyArray[2]
          let edgeType = keyArray[1]
          let edge = JSON.parse(data[key]) // [[sources,targes]]
          let sourceNodes = Array.from(edge[0]).map(id => {
            id = sourceNodesType+':'+id
            ids.add(id)
            return id
          })
          let targetNodes =  Array.from(edge[1]).map(id => {
            id = targetNodesType+':'+id
            ids.add(id)
            return id
          });
          if(sourceNodes.length!=targetNodes.length) throw error
          for(let i=0; i<sourceNodes.length; i++){
            links.push({source:sourceNodes[i], target:targetNodes[i], type:edgeType})
          }
        }
        const gData = {
          nodes: Array.from(ids).map(id => {
            return Object.assign({"id":id})
          }), links: links
        }
        this.myGraph.graphData(gData)
      })
    },
}
}
</script>

<style scoped>

</style>
