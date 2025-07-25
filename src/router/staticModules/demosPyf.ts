import type { RouteRecordRaw } from 'vue-router';
// import RouterView from '@/layout/routerView/index.vue';
// import { t } from '@/hooks/useI18n';

// const moduleName = 'demos';
const routes: Array<RouteRecordRaw> = [
  {
    path: '/CacheUseStateCRUD',
    name: 'CacheUseStateCRUD',
    component: () => import('@/viewsShare/SystemSet/CacheUseStateCRUD.vue'),
    meta: { title: '系统设置', hideInMenu: true },
  },
  // {
  //   path: '/testAutoCompletePro',
  //   name: `testAutoCompletePro`,
  //   // redirect: { name: `${moduleName}-custom-modal` },
  //   meta: {
  //     title: t('routes.demo.testAutoComplete'),
  //     icon: 'icon-zhuomian',
  //     // keepAlive: true,
  //     isExt: true,
  //   },
  //   component: () =>
  //     import(
  //       /* webpackChunkName: "demos-custom-a-custom-modal" */ '@/ts/components/testAutoCompletePro.vue'
  //     ),
  // },
];
export default routes;
