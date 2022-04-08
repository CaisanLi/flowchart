/**
 * 图形基础类
 */

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
  type?: GraphTypeEnum
}

class Graph {
  // 唯一ID
  public id: string = '';
  // 宽度
  public width: number = 200;
  // 高度
  public height: number = 200;
  // left
  public left: number = 0;
  // top
  public top: number = 0;
  // 类型
  public type: GraphTypeEnum = GraphTypeEnum.rectangle;

  constructor(option?: GraphOptionType) {
    if (option) {
      this.id = option.id;
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
    }
  }
}

export default Graph;