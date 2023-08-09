import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    TodoList: JSON.parse(localStorage.getItem("todos")) || [],
  },
  getters: {},
  mutations: {
    addTodoItem: function (state, data) {
      state.TodoList.push(data);
      localStorage.setItem("todos", JSON.stringify(state.TodoList));
    },
    deleteTodoItem: function (state, data) {
      const newList = state.TodoList.filter((item) => item.id !== data.id);
      state.TodoList = newList;
      localStorage.setItem("todos", JSON.stringify(newList));
    },
    clearTodoItem: function (state) {
      state.TodoList = [];
      localStorage.setItem("todos", JSON.stringify([]));
    },
  },
  actions: {},
  modules: {},
});

export default store;
