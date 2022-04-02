import Vue from 'vue';
import Vuex, { ModuleTree } from 'vuex';

Vue.use(Vuex);

type ModulesType = {
  [name: string]: ModuleTree<unknown>
}
/**
 * 动态加载modules
 */
const modulesFiles = require.context('./modules', true, /\.(t|j)s$/);
const modules = modulesFiles.keys().reduce((modules: ModulesType, modulePath) => {
  // set './app.js' => 'app'
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1');
  const value = modulesFiles(modulePath);
  modules[moduleName] = value.default;
  return modules;
}, {});

const store = new Vuex.Store({
  modules
});

export default store;