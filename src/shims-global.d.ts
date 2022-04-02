import { DirectiveFunction, DirectiveOptions, DirectiveBinding } from 'vue/types/options';
import { RouteConfig } from 'vue-router';
import { PluginObject } from 'vue/types/plugin';
import CryptoJS from '@types/crypto-js';
declare global {

  /**
   * 一些基础接口 - start
   */
  // 扩展 window
  interface Window {
    '_zxj_is_micro': boolean,
    'CryptoJS': CryptoJS
  }

  /**
   * 一些基础接口 - end
   */

  /**
   * 继承Vue相关接口 - start
   */
  interface ZDirectiveFunction extends DirectiveFunction {}
  interface ZDirectiveOptions extends DirectiveOptions {}
  interface ZPluginObject extends PluginObject<any> {}
  type ZRouteConfig = RouteConfig & {
    hidden?: boolean,
    hideChildrenInMenu?: boolean
  }

  /**
   * 自定义指令接口
   */
  interface CustomDirective {
    [name: string]: DirectiveFunction | DirectiveOptions
  }

  interface ZDirectiveBinding extends DirectiveBinding {}

  type ZDirectiveModifiers = {
    [name: string]: boolean
  }
  /**
   * 继承Vue相关接口 - end
   */
}