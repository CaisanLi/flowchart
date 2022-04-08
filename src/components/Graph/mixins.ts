import { graphDefaultValue } from '@/utils/Graph';
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export class BaseGraphMixins extends Vue {
  /**
   * 唯一 ID
   */
  @Prop({ default: graphDefaultValue.id, type: String }) readonly id!: string
  /**
   * 宽度
   */
  @Prop({ default: graphDefaultValue.width, type: Number }) readonly width!: number;
  /**
   * 高度
   */
  @Prop({ default: graphDefaultValue.height, type: Number }) readonly height!: number;
  /**
   * 边框颜色
   */
  @Prop({ default: graphDefaultValue.borderColor, type: String }) readonly borderColor!: string;
  /**
   * 边框宽度
   */
  @Prop({ default: graphDefaultValue.borderWidth, type: Number }) readonly borderWidth!: number;
  /**
   * 背景色
   */
  @Prop({ default: graphDefaultValue.backgroundColor, type: String }) readonly backgroundColor!: string;

  // computed start
  get CanvasStyle() {
    return { width: this.width + 'px', height: this.height + 'px' };
  }

}