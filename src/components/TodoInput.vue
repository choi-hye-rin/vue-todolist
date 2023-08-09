<template>
  <div class="input-wrapper">
    <Input placeholder="Enter here" :value="value" @change="handleInput" />
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
      tempContent: "",
    };
  },
  methods: {
    createTodo: function () {
      const tempItem = {
        id: dayjs().format("YYMMDDHHmmss"),
        content: this.tempContent,
        isDone: false,
      };
      this.$store.commit("addTodoItem", tempItem);
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
