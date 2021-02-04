import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: () => import('@/views/login/index.vue'),
    meta: {
      title: '登录界面'
    }
  },
  {
    path: '/login',
    redirect: '/'
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('@/views/home/index.vue'),
    meta: {
      title: '酷屏首页统计图'
    }
  },
  {
    path: '/brand',
    name: 'brand',
    component: () => import('@/views/brand/index.vue'),
    meta: {
      title: '公司品牌介绍'
    }
  },
  {
    path: '/datav',
    name: 'datav',
    component: () => import('@/views/datav/index.vue'),
    meta: {
      title: 'datav模板'
    }
  },{
    path: '/datav-bc',
    name: 'datav-bc',
    component: () => import('@/views/datav-backup/index.vue'),
    meta: {
      title: 'datav模板'
    }
  },
  {
    path: '/dataentry',
    name: 'dataentry',
    component: () => import('@/views/MetalDataEntry/index.vue'),
    meta: {
      title: '合金表单录入'
    }
  },
  {
    path: '/calculate',
    name: 'calculate',
    component: () => import('@/views/calculate/index.vue'),
    meta: {
      title: '液态金属性能预测'
    }
  },
  {
    path: '/visualization-neo',
    name: 'visualization-neo',
    component: () => import('@/views/visualization/graph3D-neo.vue'),
    meta: {
      title: '图数据可视化'
    }
  },
  {
    path: '/visualization',
    name: 'visualization',
    component: () => import('@/views/visualization/graph3D.vue'),
    meta: {
      title: '图数据可视化'
    }
  },
  {
    path: '/dataTransmission',
    name: 'dataTransmission',
    component: () => import('@/components/dataTransmission/index.vue'),
    meta: {
      title: '图数据可视化'
    }
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
