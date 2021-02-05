<template>
  <div id="index">
    <dv-full-screen-container class="bg-black" >
      <dv-loading v-if="loading">Loading...</dv-loading>
      <!-- 内容-->
      <div v-else class="host-body">
        <!------------------------------------------ 第1行 ---------------------------------------------->
        <div class="d-flex jc-center bg-black">
          <dv-decoration-10 style="width:33.3%;height:5px;" />
          <div class="d-flex jc-center">
            <dv-decoration-8 :color="['#568aea', '#000000']" style="width:200px;height:50px;" />
            <div class="title">
              <span class="title-text">液态金属大数据平台</span>
              <dv-decoration-6
                  class="title-bototm"
                  :reverse="true"
                  :color="['#50e3c2', '#67a1e5']"
                  style="width:250px;height:8px;"
              />
            </div>
            <dv-decoration-8
                :reverse="true"
                :color="['#568aea', '#000000']"
                style="width:200px;height:50px;"
            />
          </div>
          <dv-decoration-10 style="width:33.3%;height:5px;" />
        </div>
        <!--------------------------------------------------------------------------------------------->
        <!------------------------------------------ 第2行 ---------------------------------------------->
        <div class="d-flex jc-between px-2">
          <div class="d-flex" style="width: 40%">
            <div class="react-right ml-4" style="width: 500px; text-align: left;background-color: #0f1325;">
              <span class="react-before" ></span>
              <span class="text fw-b">数据分析</span>
            </div>
            <router-link to="/dataentry">
              <div class="react-right ml-3 bg-color-blue" >
                <span class="text  fw-b">数据录入</span>
              </div>
            </router-link>
          </div>
          <div style="width: 40%" class="d-flex">
            <router-link to="/calculate">
              <div class="react-left bg-color-blue mr-3">
                <span class="text fw-b">性能计算</span>
              </div>
            </router-link>
            <div
                class="react-left mr-4"
                style="width: 500px; background-color: #0f1325; text-align: right;" >
              <span class="react-after"></span>
              <span class="text">2020年03月16日 周一 12:00</span>
            </div>
          </div>
        </div>
        <!--------------------------------------------------------------------------------------------->
        <!------------------------------------------ 第3行 ---------------------------------------------->
        <el-row  style="height:510px;" class="height100-child">
          <!--一列-->
          <el-col :span="4">
            <dv-border-box-13 class="bg-black">
              <centreLeft1 class="height100" />
            </dv-border-box-13>
          </el-col>
          <!--一列-->
          <el-col :span="16">
            <graph class="height100"/>
          </el-col>
          <!--一列-->
          <el-col :span="4">
            <dv-border-box-13 class="bg-black">
              <centreRight1 class="height100" />
            </dv-border-box-13>
          </el-col>
        </el-row>
        <!--------------------------------------------------------------------------------------------->
        <!------------------------------------------ 第4行 ---------------------------------------------->
        <el-row style="height: 150px">
          <el-col :span="7" class="height100" >
            <dv-border-box-12 class="data-monitor bg-black">
              <div style="text-align:center">
                <label>
                  数据传输监控
                </label>
              </div>
            </dv-border-box-12>
          </el-col>
          <el-col :span="10" class="height100">
            <data-transmission class="height100"/>
          </el-col>
          <el-col :span="7" class="height100">
            <dv-border-box-12 class="data-monitor bg-black">
              <div style="text-align:center">
                <label>
                  数据传输监控
                </label>
              </div>
            </dv-border-box-12>
          </el-col>
        </el-row>
      <!--------------------------------------------------------------------------------------------->
        <!------------------------------------------ 第5行 ---------------------------------------------->
        <el-row justify="space-between" type="flex" align="bottom">
          <el-col :span="7" class="height100" >
            <dv-border-box-7 class="height100 bg-black" >
              <center class="height100" />
            </dv-border-box-7>
          </el-col>
          <el-col :span="9" class="height100">
            <dv-border-box-7 class="height100 bg-black" >
              <bottomRight class="height100" />
            </dv-border-box-7>
          </el-col>
          <el-col :span="7" class="height100" >
            <dv-border-box-7 class="bg-black">
              <centreRight2 class="height100" />
            </dv-border-box-7>
          </el-col>
        </el-row>
        <!--------------------------------------------------------------------------------------------->

      </div>
    </dv-full-screen-container>
  </div>
</template>

<script>
import centreLeft1 from "@/views/datav/centreLeft1";
import centreLeft2 from "@/views/datav/centreLeft2";
import centreRight1 from "@/views/datav/centreRight1";
import centreRight2 from "@/views/datav/centreRight2";
import center from "@/views/datav/center";
import bottomLeft from "@/views/datav/bottomLeft";
import bottomRight from "@/views/datav/bottomRight";
import graph from "@/views/datav/graph";
import index from "@/components/dataTransmission";

export default {
  name: "index",
  components: {
    centreLeft1,
    centreLeft2,
    centreRight1,
    centreRight2,
    center,
    bottomLeft,
    bottomRight,
    graph,
    'data-transmission':index
  },
  data() {
    return {
      loading: true,
    }
  },
  mounted() {
    setTimeout(() => {
      this.loading = false;
    }, 1000);
  }
}
</script>

<style lang="scss"  scoped>
@import "../../assets/scss/index";
@import "../../assets/scss/common";
.data-monitor{
  margin-top: 50px;
  label{
    background-color: black;padding: 10px;font-size: 1.2308rem;color: #c3cbde
  }
}
</style>
