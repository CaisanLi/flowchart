<template>
  <div class="graph-item absolute" :id="data.id" :style="parseStyle(data)" @mouseover="onHover">
    <component :is="data.type + '-graph'" />
  </div>
</template>

<script lang="ts">
  import { BaseGraph } from '@/utils/Graph';
  import { AnchorStaticId, EndpointOptions } from 'jsplumb';
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

    /**
     * 
     */
    onHover(evt: MouseEvent) {
      console.log('evt:', evt)
    }

    /**
     * 设置基础配置
     */
    setBase() {
      const elId = this.data.id;
      this.$jpIns.draggable(elId);

      // const exampleGreyEndpointOptions: EndpointOptions = {
      //   endpoint: 'Rectangle',
      //   isSource: true,
      //   maxConnections: -1,
      //   connectorStyle: { stroke: '#666' },
      //   isTarget: true,
      // };

      const anchors: AnchorStaticId[] = ['Top', 'Bottom', 'Left', 'Right'];
      const endPoints: EndpointOptions[] = [];

      anchors.forEach(val => {
        endPoints.push({
          anchor: val,
          endpoint: ['Dot', {
            radius: 5
          }],
          isSource: true,
          maxConnections: -1,
          connectorStyle: { 
            stroke: '#e6e6e6', 
            strokeWidth: 2
          },
          paintStyle: {
            fill: 'transparent'
          },
          hoverPaintStyle: {
            fill: 'red'
          },
          isTarget: true,
        })
      })
      
      this.$jpIns.addEndpoints(elId, endPoints);
    }

    mounted() {
      this.setBase();
    }
  }
</script>

<style lang="less">
  .end-point {
    background-color: #EEE;

    &-hover {
      background-color: #DDD;
    }
  }
</style>