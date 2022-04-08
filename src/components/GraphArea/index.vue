<template>
  <div class="w-full h-full relative">
    
  </div>
</template>

<script lang="ts">
  import { BaseGraph } from '@/utils/Graph';
  import { Component, Vue, Prop, Emit } from 'vue-property-decorator';
  import { GraphAreaChangeEvent } from './index';

  @Component
  export default class  extends Vue {
    name: string = 'GraphArea';
    // Props start
    /**
     * 图形列表
     */
    // warning 如果加上类型定义 @Prop({ default: [], type: [] }) 编译会报错 不知道为什么？？？
    @Prop({ default: [] }) readonly list!: BaseGraph[];
    // Props end

    @Emit()
    change(data: GraphAreaChangeEvent) {
      return data;
    }
  }
</script>

<style lang="less" scoped>

</style>