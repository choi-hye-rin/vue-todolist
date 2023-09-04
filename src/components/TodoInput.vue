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
        🗓️ {{ formattedDate }}
      </Button>
      <input type="date" ref="date" class="date" v-model="todoDate" />
    </div>
    <div>
      <Select
        :item-list="categoryList"
        v-model="selectedCategory"
        placeholder="분류"
      />
    </div>
  </div>
</template>

<script>
import dayjs from "dayjs";

import Button from "./Button.vue";
import Input from "./Input.vue";
import Select from "./Select.vue";

export default {
  name: "CreateTodo",
  components: {
    Button,
    Input,
    Select,
  },
  data() {
    return {
      todoInput: "",
      todoDate: dayjs().format("YYYY-MM-DD"),
      selectedCategory: "",
    };
  },
  computed: {
    formattedDate() {
      return dayjs(this.todoDate).format("YY.MM.DD");
    },
    categoryList() {
      return this.$store.state.Category;
    },
  },
  methods: {
    createTodo: function () {
      if (this.todoInput.length === 0) {
        return;
      }
      const id = `${Math.random()}${dayjs().format("YYMMDDHHmmss")}`;
      const category =
        this.selectedCategory === "" ? "1" : this.selectedCategory;
      const tempItem = {
        id,
        content: this.todoInput,
        isDone: false,
        date: this.todoDate,
        category,
      };
      this.$store.dispatch("addTodoItem", tempItem);
      this.todoInput = "";
      this.selectedCategory = "";
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
  align-items: center;
  gap: 10px;
}

.date {
  /* visibility: hidden; */
  width: 1px;
  height: 1px;
  opacity: 0;
}
</style>
