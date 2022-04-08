<template>
  <div class="absolute bottom-7 left-0 w-full">
    <div class="flex justify-center">
      <div class="bg-white rounded-lg p-2 ring-gray-400">
        <span 
          v-for="(item, i) in tools" 
          :key="item.value" 
          class="iconfont font-bold hover:bg-gray-100 cursor-pointer"
          :class="[ item.icon, i + 1 < tools.length ? 'mr-1' : '' ]"
          @click="onClickTool(item)"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { Vue, Component, Emit } from 'vue-property-decorator'
  import { FlowChatTool } from '@/typings/toolbar';
  import { tools }  from './index';

  @Component
  export default class ToolBar extends Vue {
    // 名称
    name: string = 'TooBar';
    /**
     * data start
     */
    // 工具列表
    tools: FlowChatTool[] = tools
    /**
     * data end
     */

    /**
     * methods start
     */
    @Emit('click')
    onClickTool(item: FlowChatTool) {
      return { type: item.value };
    }
    /**
     * methods end
     */
  }
</script>

<style lang="less" scoped>

</style>