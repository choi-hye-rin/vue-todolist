<template>
  <div class="input-wrapper">
    <Input placeholder="Enter here" v-model="todoInput" />
    <Button button-type="button-create" :buttonClick="createTodo">추가</Button>
  </div>
</template>

<script>
import dayjs from "dayjs";

import Button from "./Button.vue";
import Input from "./Input.vue";

export default {
  name: "CreateTodo",
  components: {
    Button,
    Input,
  },
  data() {
    return {
      todoInput: "",
    };
  },
  methods: {
    createTodo: function () {
      const id = `${Math.random()}${dayjs().format("YYMMDDHHmmss")}`;
      const tempItem = {
        id,
        content: this.todoInput,
        isDone: false,
      };
      this.$store.commit("addTodoItem", tempItem);
      this.todoInput = "";
    },

    handleInput: function (value) {
      this.tempContent = value;
    },
  },
};
</script>

<style>
.input-wrapper {
  display: grid;
  grid-template-columns: 1fr 50px;
  gap: 20px;
}
</style>
