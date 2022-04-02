// with polyfills
import 'core-js/stable';
import 'regenerator-runtime/runtime';

import Vue from 'vue';
import App from './App.vue';
import store from './store';
import router from './router';

// 全局样式
import './global.less';

Vue.config.productionTip = false;

// 监听主系统有消息过来（该代码必须放在store下面）
// microEvent.on('message', (data: any) => {
// 	console.log('data:', data);
// });

// 全局自定义指令
import directives from '@/directive';
Object.keys(directives).forEach(key => {
  Vue.directive(key, directives[key]);
});

// 全局自定义插件
import plugins from '@/plugins';
Object.keys(plugins).forEach(key => {
  Vue.use(plugins[key])
});

function createApp(): Vue {
	return new Vue({
		router,
		store,
		// i18n,
		// created: bootstrap,
		render: (h) => h(App),
	}).$mount('#template-admin');
}

createApp();
