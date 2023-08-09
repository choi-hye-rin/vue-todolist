import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    TodoList: JSON.parse(localStorage.getItem("todos")) || [],
  },
  getters: {},
  mutations: {
    addTodoItem: (state, data) => {
      state.TodoList.push(data);
      localStorage.setItem("todos", JSON.stringify(data));
    },
  },
  actions: {},
  modules: {},
});

export default store;
