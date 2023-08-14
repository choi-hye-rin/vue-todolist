import Vue from "vue";
import Vuex from "vuex";

import useTodos from "./api/todos";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    TodoList: JSON.parse(localStorage.getItem("todos")) || [],
  },
  getters: {},
  mutations: {
    setTodoItem: function (state, data) {
      state.TodoList = data;
    },
  },
  actions: {
    async getTodoList() {
      const res = await useTodos.getTodoList();
      this.commit("setTodoItem", res.data);
    },
    async addTodoItem(store, item) {
      await useTodos.addTodoItem(item);
      this.dispatch("getTodoList");
    },
    async deleteTodoItem(store, id) {
      await useTodos.deleteTodoItem(id);
      this.dispatch("getTodoList");
    },
    async deleteAllTodos(store, items) {
      const ids = items.map((item) => item.id);
      ids.forEach((id) => {
        this.dispatch("deleteTodoItem", id);
      });
      this.dispatch("getTodoList");
    },
    async updateTodoItem(store, item) {
      await useTodos.updateTodoItem(item.id, item);
      this.dispatch("getTodoList");
    },
  },
  modules: {},
});

export default store;
