<template>
  <div class="graph-item">
    <canvas ref="canvas" :style="CanvasStyle" :width="width" :height="height">
      您的浏览器不支持 HTML5 canvas 标签。
    </canvas>
  </div>
</template>

<script lang="ts">
  import { Component, Mixins } from 'vue-property-decorator';
  import { BaseGraphMixins } from './mixins';
  @Component({
    inheritAttrs: false
  })
  export default class extends Mixins(BaseGraphMixins) {
    name: string = 'RectangleGraph';
    // data start
    
    // data end
    // methods start
    /**
     * 渲染canvas
     */
    renderCanvas() {
      const canvas: HTMLCanvasElement = (this.$refs.canvas as HTMLCanvasElement);
      const ctx: CanvasRenderingContext2D = canvas.getContext('2d')!;
      
      this.roundRect(ctx, 0, 0, this.width, this.height, 5);
      // 其它样式
      ctx.fillStyle = this.backgroundColor;
      ctx.fill();
      ctx.lineWidth = this.borderWidth;
      ctx.strokeStyle = this.borderColor;
      ctx.stroke();
    }
    /**
     * 绘制圆角矩形
     */
    roundRect(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, r: number): void {
      var min_size = Math.min(w, h);
      if (r > min_size / 2) r = min_size / 2;
      // 开始绘制
      ctx.beginPath();
      ctx.moveTo(x + r, y);
      ctx.arcTo(x + w, y, x + w, y + h, r);
      ctx.arcTo(x + w, y + h, x, y + h, r);
      ctx.arcTo(x, y + h, x, y, r);
      ctx.arcTo(x, y, x + w, y, r);
      ctx.closePath();
    }
    // methods end
    mounted() {
      this.renderCanvas();
    }
  }
</script>

<style scoped>

</style>