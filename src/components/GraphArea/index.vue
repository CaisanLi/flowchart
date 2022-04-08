<template>
  <div class="w-full h-full relative">
    <div v-for="item in list" :key="item.id" class="graph-item absolute" :style="parseStyle(item)" @mousedown="onMousedown($event, item)">
      <component :is="item.type + '-graph'" v-bind="item" />
    </div>
  </div>
</template>

<script lang="ts">
  import { BaseGraph } from '@/utils/Graph';
  import { Component, Vue, Prop, Emit } from 'vue-property-decorator';
  import { GraphAreaChangeEvent, StartPoint } from './index';
  import { RectangleGraph } from '@/components/Graph/index';

  @Component({
    components: {
      RectangleGraph
    }
  })
  export default class  extends Vue {
    name: string = 'GraphArea';

    // Props start
    /**
     * 图形列表
     */
    @Prop({ default: () => [], type: Array }) readonly list!: BaseGraph[];
    // Props end

    // data start
    /**
     * 是否在图形上按下鼠标
     */
    isDown: boolean = false;
    /**
     * 记录按下鼠标的位置
     */
    startPoint: StartPoint = {
      x: 0,
      y: 0,
      oldLeft: 0,
      oldTop: 0
    }
    /**
     * 记录按下的图形
     */
    downItem: BaseGraph | null = null;
    // data end

    // methods start
    /**
     * 鼠标在图形上按下
     */
    onMousedown(evt: MouseEvent, item: BaseGraph) {
      if (this.isDown) {
        return ;
      }
      this.downItem = item;
      this.isDown = true;
      Object.assign(this.startPoint, {
        x: evt.pageX,
        y: evt.pageY,
        oldLeft: item.left,
        oldTop: item.top
      })
    }  

    /**
     * 监听鼠标移动
     */
    onMousemove(evt: MouseEvent) {
      if (!this.isDown) return ;
      const downItem = this.downItem;
      if (downItem == null) return ;
      evt.stopPropagation();
      const startPoint = this.startPoint;
      const { pageX, pageY } = evt;
      let left = pageX - startPoint.x + startPoint.oldLeft;
      let top = pageY - startPoint.y + startPoint.oldTop;
      
      downItem.left = left;
      downItem.top = top;
    }

    /**
     * 监听松开鼠标
     */
    onMouseup() {
      if (this.isDown) {
        this.downItem = null;
        this.isDown = false;
      }
    }
    /**
     * 处理样式数据
     */
    parseStyle(item: BaseGraph) {
      const { width, height, top, left } = item;
      const style: { [name: string]: number | string } = {
        width: width ? width + 'px' : 0,
        height: height ? height + 'px' : 0,
        top: top ? top + 'px' : 0,
        left: left ? left + 'px' : 0
      };
      return style;
    }

    @Emit()
    change(data: GraphAreaChangeEvent) {
      return data;
    }
    // methods end

    // 挂载完毕
    mounted() {
      document.addEventListener('mousemove', this.onMousemove)
      document.addEventListener('mouseup', this.onMouseup)
    }
    // 销毁前
    beforeDestroy() {
      document.removeEventListener('mousemove', this.onMousemove)
      document.removeEventListener('mouseup', this.onMouseup)
    }
  }
</script>

<style lang="less" scoped>

</style>