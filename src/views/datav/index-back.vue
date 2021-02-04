<template>
  <div id="index"  >
    <div>
      <index />
    </div>
    <dv-full-screen-container class="bg" >
      <dv-loading v-if="loading">Loading...</dv-loading>
      <div v-else class="host-body">
        <!-- 第一行 -->
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

        <!-- 第二行 -->
        <div class="d-flex jc-between px-2">
          <div class="d-flex" style="width: 40%">
            <div class="react-right ml-4" style="width: 500px; text-align: left;background-color: #0f1325;">
              <span class="react-before " ></span>
              <span class="text fw-b">数据分析</span>
            </div>
            <router-link to="/dataentry">
            <div class="react-right ml-3 bg-color-blue" >
              <span class="text   fw-b">数据录入</span>
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
              style="width: 500px; background-color: #0f1325; text-align: right;"
            >
              <span class="react-after"></span>
              <span class="text">2020年03月16日 周一 12:00</span>
            </div>
          </div>
        </div>

        <div class="body-box">
          <!-- 第三行数据 -->
          <div class="content-box">
            <div class="bg-black">
              <dv-border-box-1  >
                <centreLeft1 />
              </dv-border-box-1>
            </div>
            <div>
              <graph />
            </div>

            <!-- 中间 -->
<!--            <div class="bg-black">-->
<!--              <centreRight2 />-->
<!--            </div>-->
            <div>
              <dv-border-box-13 class="bg-black">
                <centreRight1 />
              </dv-border-box-13>
            </div>
          </div>

          <!-- 第四行数据 -->
          <div class="bototm-box">
            <!-- 中间 -->
            <div>
              <dv-border-box-12 class="bg-black">
                <center />
              </dv-border-box-12>
            </div>
<!--            <dv-border-box-13>-->
<!--              <bottomLeft />-->
<!--            </dv-border-box-13>-->
            <div>
              <dv-border-box-12 class="bg-black">
                <bottomRight />
              </dv-border-box-12>
            </div>
          </div>


        </div>
      </div>
    </dv-full-screen-container>
  </div>
</template>

<script>

import centreLeft1 from "./centreLeft1";
import index from "@/components/dataTransmission/index";
// import centreLeft2 from "./centreLeft2";
import centreRight1 from "./centreRight1";
import centreRight2 from "./centreRight2";
import center from "./center";
import bottomLeft from "./bottomLeft";
import bottomRight from "./bottomRight";
import graph from "@/views/datav/graph";
export default {
  data() {
    return {
      loading: true,
    }
  },
  components: {
    centreLeft1,
    // centreLeft2,
    centreRight1,
    centreRight2,
    center,
    bottomLeft,
    bottomRight,
    graph,
    index
  },
  mounted() {
    this.cancelLoading();
  },
  methods: {
    cancelLoading() {
      setTimeout(() => {
        this.loading = false;
      }, 2000);
    },
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/index";
</style>
