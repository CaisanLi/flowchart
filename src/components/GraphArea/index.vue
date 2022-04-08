<template>
  <div class="w-full h-full relative">
    <div v-for="item in list" :key="item.id" class="graph-item absolute" :style="parseStyle(item)">
      <component :is="item.type + '-graph'" v-bind="item" />
    </div>
  </div>
</template>

<script lang="ts">
  import { BaseGraph } from '@/utils/Graph';
  import { Component, Vue, Prop, Emit } from 'vue-property-decorator';
  import { GraphAreaChangeEvent } from './index';
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
  }
</script>

<style lang="less" scoped>

</style>