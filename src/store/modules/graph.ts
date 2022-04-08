import { Module } from 'vuex'
import { BaseGraph } from '@/utils/Graph';

export type State = {
  list: BaseGraph[]
}

export type Mutations = {
  PUSH_LIST: (graph: BaseGraph) => void;
  REMOVE_LIST: (graph: BaseGraph | string) => void;
}

const state = (): State => {
  return {
    list: []
  }
}

const getters = {
  list(state: State) {
    return state.list;
  }
}

const mutations = {
  PUSH_LIST(state: State, graph: BaseGraph) {
    state.list.push(graph);
  },
  REMOVE_LIST(state: State, graph: BaseGraph | string) {
    if (typeof graph === 'string') {
      state.list = state.list.filter(item => item.id !== graph);
    } else {
      state.list = state.list.filter(item => item !== graph);
    }
  }
}

const graph: Module<State, unknown> = {
  namespaced: true,
  state,
  getters,
  mutations
}

export default graph;