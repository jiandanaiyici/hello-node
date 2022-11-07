/**
 * 官网: https://d.umijs.org/config
 * 首页: https://landing.ant.design/docs/use/dumi-cn
 */
import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'Hello Node',
  mode: 'site',
  locales: [['zh-CN', '中文']],
  history: {
    type: 'browser',
  },
  navs: [
    null,
    {
      title: 'GitHub',
      path: 'https://github.com/jiandanaiyici/hello-node',
    },
  ],
});
