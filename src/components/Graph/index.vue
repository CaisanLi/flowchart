<template>
  <div class="graph-item absolute" :id="data.id" :style="parseStyle(data)" @mouseover="onHover" @mouseout="onOut">
    <div class="relative">
      <span :id="data.id + '-end'">End</span>
      <component :is="data.type + '-graph'" />
    </div>
  </div>
</template>

<script lang="ts">
  import { Mutations } from '@/store/modules/graph';
  import { BaseGraph } from '@/utils/Graph';
  import { AnchorStaticId, EndpointOptions } from 'jsplumb';
  import { Component, Prop, Vue } from 'vue-property-decorator';
  import { namespace } from 'vuex-class';
  import RectangleGraph from './Rectangle.vue';

  const graphModule = namespace('graph');

  @Component({
    components: {
      RectangleGraph
    }
  })
  export default class  extends Vue {
    // vuex start
    @graphModule.Mutation('SET_GRAPH') setGraph!: Mutations['SET_GRAPH'];
    // vuex end
    // props start
    /**
     * data 图形对象
     */
    @Prop({ default: () => {}, type: Object }) readonly data!: BaseGraph;
    // props end

    // data start
    id: string = ''
    // data end
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
     * 移入图形
     */
    onHover() {
      const endPoints = this.$jpIns.getEndpoints(this.id)
      endPoints.forEach(point => {
        point.setHover(true)
      })
    }
    /**
     * 移出图形
     */
    onOut() {
      const endPoints = this.$jpIns.getEndpoints(this.id)
      endPoints.forEach(point => {
        point.setHover(false)
      })
    }

    /**
     * 设置基础配置
     */
    setBase() {
      const elId = this.data.id;
      this.id = elId;
      
      this.$jpIns.draggable(elId, {
        cursor: 'move',
        stop: (params) => {
          this.setGraph({ 
            id: elId,
            top: params.pos[1],
            left: params.pos[0] 
          })
        }
      })

      const anchors: AnchorStaticId[] = ['Top', 'Bottom', 'Left', 'Right'];
      const endPoints: EndpointOptions[] = [];

      anchors.forEach(() => {
        endPoints.push({
          anchor: ['Continuous'],
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
          connectorOverlays: [['Arrow', { location: 1 }]],          
        })
      })
      
      // this.$jpIns.addEndpoints(elId, endPoints);
      this.$jpIns.addEndpoint(elId, {
        maxConnections: 0,
        endpoint: 'Blank',
      })

      const common = {
        parent: elId,
        endpoint: 'Blank',
        anchor: [ 'Perimeter', { shape: 'Circle', rotation: 25 } ],
        isTarget: true,
        isSource: true,
        connectorOverlays: [['Arrow', { location: 1 }]],
      }

      this.$jpIns.makeSource(elId + '-end', common)
      this.$jpIns.makeTarget(elId + '-end', common)
    }

    mounted() {
      this.setBase();
    }
  }
</script>

<style lang="less">
  .end-point {
    &-connection {
      circle {
        fill: rgb(221 86 86);
      }
    }
  }
</style>