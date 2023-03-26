/**
 * 官网: https://d.umijs.org/config
 * 首页: https://landing.ant.design/docs/use/dumi-cn
 */
import { defineConfig } from 'dumi';

export default defineConfig({
	title: 'Hello Node',
	favicons: ['https://gw.alipayobjects.com/zos/bmw-prod/d3e3eb39-1cd7-4aa5-827c-877deced6b7e/lalxt4g3_w256_h256.png'],
	themeConfig: {
		name: 'Hello Node',
		footer: false,
		prefersColor: {
			default: 'dark',
			switch: true,
		},
		socialLinks: {
			github: 'https://github.com/jiandanaiyici/hello-node',
		},
		logo: 'https://gw.alipayobjects.com/zos/bmw-prod/d3e3eb39-1cd7-4aa5-827c-877deced6b7e/lalxt4g3_w256_h256.png',
		// nav: [
		//   {
		//     title: 'GitHub',
		//     link: 'https://github.com/jiandanaiyici/hello-node',
		//   },
		// ],
	},
});
