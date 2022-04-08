import { GraphTypeEnum } from '@/utils/Graph'

// 工具栏
type FlowChatTool = {
  label: string,
  value: GraphTypeEnum,
  icon: string
}

// click 事件
type FlowChatToolClickEvent = {
  type: string
}

export { FlowChatTool, FlowChatToolClickEvent }