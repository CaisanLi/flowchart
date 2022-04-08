<template>
  <div class="w-full relative overflow-hidden box-border h-full font-sans bg-gray-50">
    <!-- 图形区域 -->
    <graph-area :list="graphList" @change="onGraphAreaChange" />
    <!-- 底部工具栏 -->
    <tool-bar @click="onClickTool" />
  </div>
</template>

<script lang="ts">
// import Vue from 'vue';
// import Component from 'vue-class-component';
import { Vue, Component } from 'vue-property-decorator'
import ToolBar from '@/components/ToolBar/index.vue';
import GraphArea from '@/components/GraphArea/index.vue';
import { FlowChatToolClickEvent } from '@/typings/toolbar';
import { BaseGraph } from '@/utils/Graph';
import { namespace } from 'vuex-class';
import { State, Mutations } from '@/store/modules/graph';
import { GraphAreaChangeEvent } from '@/components/GraphArea';
const graphModule = namespace('graph');

@Component({
  components: {
    ToolBar,
    GraphArea
  }
})
export default class Index extends Vue {

  @graphModule.Getter('list') graphList!: State['list'];
  @graphModule.Mutation('PUSH_LIST') pushGraph!: Mutations['PUSH_LIST'];
  /**
   * data start
   */


  /**
   * data end
   */

  /**
   * methods start
   */
  onClickTool(data: FlowChatToolClickEvent) {
    switch (data.type) {
      case 'rectangle':
        this.createRectangle();
        break;
    }
  }

  onGraphAreaChange(data: GraphAreaChangeEvent) {
    console.log('data：', data);
  }
  /**
   * 创建一个圆角矩形
   */
  createRectangle() {
    const graph = new BaseGraph();
    this.pushGraph(graph);
  }
  /**
   * methods end
   */
}
</script>

<style lang="less" scoped>

</style>