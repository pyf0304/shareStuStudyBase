// import 'nprogress/css/nprogress.css'; // 进度条样式
import { App } from 'vue';
// import { App } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';
// import { createRouterGuards } from './router-guards';

// import outsideLayout from './outsideLayout';
import { whiteNameList } from './constant';
// import type { App } from 'vue';
import type { RouteRecordRaw } from 'vue-router';
import MyIndexIFrame from '@/views/MyIndexIFrame.vue';
// import demosPyf from '@/router/staticModules/demosPyf';
// import rtParams from '@/router/staticModules/rtParams';
// import { t } from '@/hooks/useI18n';
export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Layout',
    // redirect: '/about',
    component: () => import(/* webpackChunkName: "layout" */ '@/views/web/Index.vue'),

    meta: {
      title: '首页',
    },
    children: [],
  },
  {
    path: '/CacheUseStateCRUD',
    name: 'CacheUseStateCRUD',
    component: () => import('@/viewsShare/SystemSet/CacheUseStateCRUD.vue'),
    meta: { title: '系统设置', hideInMenu: true },
  },
  {
    path: '/KnowledgeAssess',
    name: 'KnowledgeAssess',
    // redirect: '/dashboard/welcome',
    component: () => import(/* webpackChunkName: "layout" */ '@/views/web/KnowledgeAssess.vue'),
    meta: {
      title: 'KnowledgeAssess',
    },
    children: [],
  },
  {
    path: '/ge_UserScoreCurrWeekCRUD',
    name: 'ge_UserScoreCurrWeekCRUD',
    // redirect: '/dashboard/welcome',
    component: () =>
      import(
        /* webpackChunkName: "layout" */ '@/viewsShare/GameLearn/ge_UserScoreCurrWeekCRUD.vue'
      ),
    meta: {
      title: '用户每周得分',
    },
    children: [],
  },
  // {
  //   path: '/KnowledgeGraph',
  //   name: 'KnowledgeGraph',
  //   // redirect: '/dashboard/welcome',
  //   component: () => import(/* webpackChunkName: "layout" */ '@/views/web/KnowledgeGraph.vue'),
  //   meta: {
  //     title: 'KnowledgeGraph',
  //   },
  //   children: [],
  // },

  {
    path: '/Work',
    name: 'Work',
    // redirect: '/dashboard/welcome',
    component: () => import(/* webpackChunkName: "layout" */ '@/views/web/Work.vue'),
    meta: {
      title: 'Work',
    },
    children: [],
  },
  {
    path: '/LearningCommunity',
    name: 'LearningCommunity',
    // redirect: '/dashboard/welcome',
    component: () => import(/* webpackChunkName: "layout" */ '@/views/web/LearningCommunity.vue'),
    meta: {
      title: 'LearningCommunity',
    },
    children: [],
  },

  {
    path: '/about',
    name: 'testTabs2',
    // redirect: '/dashboard/welcome',
    component: () =>
      import(/* webpackChunkName: "layout" */ '@/viewsShare/tabs/testTabsInBootStrap.vue'),
    meta: {
      title: 'testTabs2',
    },
    children: [],
  },

  {
    path: '/contact',
    name: 'testTabs',
    // redirect: '/dashboard/welcome',
    component: () => import(/* webpackChunkName: "layout" */ '@/viewsShare/tabs/testTabs.vue'),
    meta: {
      title: 'testTabs',
    },
    children: [],
  },

  {
    path: '/downloadFile',
    name: 'downloadFile',
    component: () => import(/* webpackChunkName: "layout" */ '@/viewsShare/tools/downloadFile.vue'),
    meta: {
      title: '下载文件',
    },
    children: [],
  },
  {
    path: '/SIndexIframe',
    name: 'SIndexIframe',
    component: () => import(/* webpackChunkName: "layout" */ '@/views/web/Index.vue'),
    meta: {
      title: '首页',
    },
    children: [],
  },

  {
    path: '/my-index-iframe',
    name: 'MyIndexIFrame',
    component: MyIndexIFrame,
  },

  {
    path: '/index',
    name: 'index',
    component: () => import(/* webpackChunkName: "layout" */ '@/views/web/Index.vue'),
    meta: {
      title: '首页',
    },
    children: [],
  },

  {
    path: '/SIndexIframe',
    name: 'SIndexIframe',
    // redirect: '/dashboard/welcome',
    component: () => import(/* webpackChunkName: "layout" */ '@/views/web/SIndexIframe.vue'),
    meta: {
      title: '用户中心',
    },
    children: [],
  },

  {
    path: '/CurrEduClsInfo',
    name: 'CurrEduClsInfo',
    // redirect: '/dashboard/welcome',
    component: () =>
      import(/* webpackChunkName: "layout" */ '@/viewsShare/DailyRunning/CurrEduClsInfo.vue'),
    meta: {
      title: '教学班信息',
    },
    children: [],
  },

  {
    path: '/cc_KnowledgeStuTeachLogCRUD',
    name: `cc_KnowledgeStuTeachLogCRUD`,
    // redirect: { name: `${moduleName}-custom-modal` },
    meta: {
      title: '学生知识点学习日志',
      icon: 'icon-zhuomian',
      // keepAlive: true,
      isExt: true,
    },
    component: () =>
      import(
        /* webpackChunkName: "demos-custom-a-custom-modal" */ '@/views/Knowledges/cc_KnowledgeStuTeachLogCRUD.vue'
      ),
  },

  // Layout之外的路由

  // ...demosPyf,
  // ...rtParams,
  // Layout之外的路由
];
export const router = createRouter({
  // process.env.BASE_URL
  history: createWebHashHistory(''),
  routes,
});

// reset router
export function resetRouter() {
  router.getRoutes().forEach((route: any) => {
    const { name } = route;
    if (name && !whiteNameList.some((n) => n === name)) {
      router.hasRoute(name) && router.removeRoute(name);
    }
  });
}
export async function setupRouter(app: App) {
  // 创建路由守卫
  // createRouterGuards(router, whiteNameList);

  app.use(router);
  // console.log(router);
  // 路由准备就绪后挂载APP实例
  await router.isReady();
}
export default router;
