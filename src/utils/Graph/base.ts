/**
 * 图形基础类
 */

import { ZConnection } from './index';

export enum GraphTypeEnum {
  rectangle = 'rectangle',
  parallelogram = 'parallelogram'
}



export type GraphOptionType = {
  id: string,
  width?: number,
  height?: number,
  left?: number,
  top?: number,
  type?: GraphTypeEnum,
  borderColor?: string,
  borderWidth?: number,
  backgroundColor?: string
}

// 默认值
export const graphDefaultValue: Required<GraphOptionType> = {
  id: '',
  width: 200,
  height: 200,
  left: 0,
  top: 0,
  type: GraphTypeEnum.rectangle,
  borderColor: '#333333',
  borderWidth: 2,
  backgroundColor: '#FFFFFF'
}

class Graph {
  // 唯一ID
  public id: string = '';
  // 宽度
  public width: number = graphDefaultValue.width;
  // 高度
  public height: number = graphDefaultValue.height;
  // left
  public left: number = graphDefaultValue.left;
  // top
  public top: number = graphDefaultValue.top;
  // borderColor
  public borderColor: string = graphDefaultValue.borderColor;
  // borderWidth
  public borderWidth: number = graphDefaultValue.borderWidth;
  // backgroundColor
  public backgroundColor: string = graphDefaultValue.backgroundColor;
  // 类型
  public type: GraphTypeEnum = graphDefaultValue.type;
  // 缓存连接信息
  public connections?: ZConnection[];

  constructor(option?: GraphOptionType) {
    if (option) {
      this.id = option.id;
      this.setMember(option);
    }
  }
  /**
   * 添加连接
   * @param connection 
   */
  addConnection(connection: ZConnection) {
    this.connections?.push(connection);
  }
  /**
   * 设置成员属性
   * @param option 
   */
  setMember(option: GraphOptionType) {
    if (option.width !== undefined) {
      this.width = option.width;
    }
    if (option.height !== undefined) {
      this.height = option.height;
    }
    if (option.left !== undefined) {
      this.left = option.left;
    }
    if (option.top !== undefined) {
      this.top = option.top
    }
    if (option.type !== undefined) {
      this.type = option.type;
    }
    if (option.backgroundColor !== undefined) {
      this.backgroundColor = option.backgroundColor;
    }
    if (option.borderColor !== undefined) {
      this.borderColor = option.borderColor;
    }
    if (option.borderWidth !== undefined) {
      this.borderWidth = option.borderWidth;
    }
  }
}

export default Graph;