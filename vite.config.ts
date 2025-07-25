/// <reference types="vitest" />
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/ShareStuStudyBase/', // 设置 VITE_BASE_URL
  plugins: [vue(), vueJsx()],
  resolve: {
    alias: [
      {
        find: 'vue-i18n',
        replacement: 'vue-i18n/dist/vue-i18n.cjs.js',
      },
      {
        find: '@',
        replacement: resolve(__dirname, './src'),
      },
      {
        find: '@shared',
        replacement: resolve(__dirname, '../sharePrj/src'),
      },
    ],
  },

  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        modifyVars: {},
        additionalData: `
      
      @import "@/styles/variables.less";
    `,
      },
      // scss: {
      //   additionalData: `
      //   @use 'sass:math';
      //   @import "src/styles/global.scss";
      //   `,
      // },
    },
  },
  server: {
    host: '0.0.0.0',
    port: 8095,
    proxy: {
      '/api': {
        // target: 'https://nest-api.buqiyuan.site/api/',
        // target: 'https://localhost:7242',
        target: 'http://localhost:28524/GPWA',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
      '/ws-api': {
        target: 'wss://nest-api.buqiyuan.site',
        // target: 'http://localhost:7002',
        changeOrigin: true, //是否允许跨域
        ws: true,
      },
    },
  },

  test: {
    // 模拟dom环境
    environment: 'happy-dom',
    coverage: {
      // 覆盖率提供者
      provider: 'istanbul',
      reporter: ['text', 'json', 'html'],
      // 设置覆盖文件夹
      reportsDirectory: './coverage',
      // 检查每个文件的阈值
      perFile: true,
      // 设置代码覆盖率阈值
      lines: 75,
      functions: 75,
      branches: 75,
      statements: 75,
    },
    open: true,
    include: ['./src/components/**/*.{test,spec}.ts', './src/tests/**/*.{test,spec}.ts'],
  },

  build: {
    lib: {
      entry: './src/index.ts', // 入口文件
      name: 'ShareStuStudyBase', // 库的全局变量名
      fileName: 'share-stu-study-base', // 输出文件名
      formats: ['es', 'umd'], // 输出格式
    },
    // build: {
    //   lib: {
    //     entry: path.resolve(__dirname, 'src/utils.js'), // 入口文件
    //     name: 'Utils',                                 // 库的全局变量名
    //     fileName: 'utils',                             // 输出文件名
    //     formats: ['es', 'umd'],                        // 输出格式
    //   },
    // },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
});
