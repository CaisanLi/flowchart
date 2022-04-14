import { VueConstructor } from 'vue';
import { jsPlumb } from 'jsplumb';
export default {
  install(Vue: VueConstructor) {
    Vue.prototype.$jp = jsPlumb
    Vue.prototype.$jpIns = jsPlumb.getInstance()
  }
} as ZPluginObject