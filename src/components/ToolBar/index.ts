import { FlowChatTool } from '@/typings/toolbar';
import { GraphTypeEnum } from '@/utils/Graph';

// 默认工具栏
export const tools: FlowChatTool[] = [{
  label: '矩形',
  value: GraphTypeEnum['rectangle'],
  icon: 'icon-yuanjiaojuxing'
}, {
  label: '平行四边形',
  value: GraphTypeEnum['parallelogram'],
  icon: 'icon-pinghangsibianxing'
}];