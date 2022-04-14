import { jsPlumb, jsPlumbInstance } from 'jsplumb';
declare module '*.vue' {
  import Vue from 'vue'
  export default Vue
}

declare module 'vue/types/vue' {
  // 增加 Vue 全局属性
  interface Vue {
    $jp: jsPlumb
    $jpIns: jsPlumbInstance
  }
}