<template>
  <div id="graph-area" class="w-full h-full relative">
    <graph-item v-for="item in list" :key="item.id" :data="item" />
  </div>
</template>

<script lang="ts">
  import { BaseGraph } from '@/utils/Graph';
  import { Component, Vue, Prop, Emit } from 'vue-property-decorator';
  import { GraphAreaChangeEvent } from './index';
  import GraphItem from '@/components/Graph/index.vue';

  @Component({
    components: {
      GraphItem
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
    
    // data end

    // methods start

    @Emit()
    change(data: GraphAreaChangeEvent) {
      return data;
    }

    /**
     * 设置jsPlumb基础配置
     */
    setJPBase() {
      const $jpIns = this.$jpIns;
      // 设置 jsPlumb 容器
      $jpIns.setContainer('#graph-area')
      // 建立连接
      $jpIns.bind('connection', info => {
        // (info.connection as any).bind('click', (info: any) => {
        //   console.log('connection click：', info)
        // })
        console.log('connection info：', info)
      })
      // 点击连接线
      $jpIns.bind('click', connection => {
        // connection.set
        console.log('click', connection)
      })
      // 双击连接线
      $jpIns.bind('dblclick', con => {
        console.log('dblclick：', con)
      })
      // 点击终点
      $jpIns.bind('endpointDblClick', endpoint => {
        console.log('endpointDblClick info：', endpoint)
      })
      // 连接前的检查，判断是否建立连接
      $jpIns.bind('beforeDrop', info => {
        console.log('beforeDrop：', info)
        return true;
      })
    }
    /**
     * 清除jsPlumb基础配置
     */
    clearJPBase() {
      const $jpIns = this.$jpIns;
      $jpIns.unbind('click');
      $jpIns.unbind('connection');
    }
    // methods end

    // 挂载完毕
    mounted() {
      this.setJPBase();
    }
    // 销毁前
    beforeDestroy() {
      this.clearJPBase();
    }
  }
</script>