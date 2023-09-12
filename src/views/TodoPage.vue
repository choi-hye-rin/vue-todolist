<template>
  <div id="app">
    <TodoSideBar />
    <TodoHeader />
    <TodoInput />
    <TodoList />
  </div>
</template>

<script>
import TodoSideBar from "../components/SideBar.vue";
import TodoHeader from "../components/Header.vue";
import TodoInput from "../components/TodoInput.vue";
import TodoList from "../components/TodoList.vue";

import { defineComponent } from "@vue/composition-api";
import { todoStore } from "../store/index.js";

export default defineComponent({
  name: "TodoPage",
  components: {
    TodoSideBar,
    TodoHeader,
    TodoInput,
    TodoList,
  },
  setup() {
    const store = todoStore();
    return { store };
  },
  methods: {},
  mounted() {
    this.store.getTodoList();
    this.store.getCategory();
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  max-width: 420px;
  text-align: center;
  color: #2c3e50;
  margin: 0 auto;
  padding: 0;
}
</style>
