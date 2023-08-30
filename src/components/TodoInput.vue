<template>
  <div class="input-wrapper">
    <Input
      placeholder="Enter here"
      v-model="todoInput"
      :handle-submit="createTodo"
    />
    <Button button-type="button-create" :button-click="createTodo">
      추가
    </Button>

    <div class="left">
      <Button button-type="button-edit" :button-click="focusTodoDate">
        언제까지 끝낼 건가요? 🗓️ {{ formattedDate }}
      </Button>
      <input type="date" ref="date" class="date" v-model="todoDate" />
    </div>
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
      todoDate: dayjs().format("YYYY-MM-DD"),
    };
  },
  computed: {
    formattedDate() {
      return dayjs(this.todoDate).format("YY.MM.DD");
    },
  },
  methods: {
    createTodo: function () {
      if (this.todoInput.length === 0) {
        return;
      }
      const id = `${Math.random()}${dayjs().format("YYMMDDHHmmss")}`;
      const tempItem = {
        id,
        content: this.todoInput,
        isDone: false,
        date: this.todoDate,
      };
      this.$store.dispatch("addTodoItem", tempItem);
      this.todoInput = "";
    },

    handleInput: function (value) {
      this.tempContent = value;
    },

    focusTodoDate: function () {
      this.$refs.date.showPicker();
    },
  },
};
</script>

<style>
.input-wrapper {
  display: grid;
  grid-template-columns: 1fr 90px;
  gap: 10px;
}

.date {
  /* visibility: hidden; */
  width: 1px;
  height: 1px;
  opacity: 0;
}
</style>
