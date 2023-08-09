<template>
  <div id="app">
    <TodoHeader />
    <TodoInput />
    <TodoList :todoItems="todoItems" />
  </div>
</template>

<script>
import TodoHeader from "./components/Header.vue";
import TodoInput from "./components/TodoInput.vue";
import TodoList from "./components/TodoList.vue";

export default {
  name: "App",
  components: {
    TodoHeader,
    TodoInput,
    TodoList,
  },
  data() {
    return {
      todoItems: [],
    };
  },
  created() {
    const todos = localStorage.getItem("todos");
    this.todoItems = JSON.parse(todos);
  },
};
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
  margin-top: 60px;
  padding: 0;
}
</style>
