<template>
  <div class="graph-item absolute" :id="data.id" :style="parseStyle(data)">
    <component :is="data.type + '-graph'" />
  </div>
</template>

<script lang="ts">
  import { BaseGraph } from '@/utils/Graph';
  import { Component, Prop, Vue } from 'vue-property-decorator';
  import RectangleGraph from './Rectangle.vue';
  @Component({
    components: {
      RectangleGraph
    }
  })
  export default class  extends Vue {
    // props start
    /**
     * data 图形对象
     */
    @Prop({ default: () => {}, type: Object }) readonly data!: BaseGraph;
    // props end
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
  }
</script>

<style scoped>

</style>