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
      <MultiSelect
        :item-list="categoryList"
        v-model="selectedCategory"
        placeholder="분류"
        :add-item="addItem"
      ></MultiSelect>
    </div>
  </div>
</template>

<script>
import dayjs from "dayjs";

import Button from "./Button.vue";
import Input from "./Input.vue";
import MultiSelect from "./MultiSelectComponent.vue";
import { useTodoStore } from "../store/modules/todos";

import util from "../utils/util";

export default {
  name: "CreateTodo",
  components: {
    Button,
    Input,
    MultiSelect,
  },
  setup() {
    const store = useTodoStore();
    return { store };
  },
  data() {
    return {
      todoInput: "",
      todoDate: dayjs().format("YYYY-MM-DD"),
      selectedCategory: null,
    };
  },
  computed: {
    formattedDate() {
      return dayjs(this.todoDate).format("YY.MM.DD");
    },
    categoryList() {
      return this.store.Category;
    },
  },
  methods: {
    createTodo: function () {
      if (this.todoInput.length === 0) {
        return;
      }
      const id = `${Math.random()}${dayjs().format("YYMMDDHHmmss")}`;
      const category =
        this.selectedCategory === null ? "1" : this.selectedCategory.id;
      const tempItem = {
        id,
        content: this.todoInput,
        isDone: false,
        date: this.todoDate,
        category,
      };
      this.store.addTodoItem(tempItem);
      this.todoInput = "";
      this.selectedCategory = null;
      this.todoDate = dayjs().format("YYYY-MM-DD");
    },

    handleInput: function (value) {
      this.tempContent = value;
    },

    focusTodoDate: function () {
      this.$refs.date.showPicker();
    },

    addItem: function (tag) {
      const tagItem = {
        id: util.createRandomId(),
        value: tag,
      };
      this.store.addCategory(tagItem);
      this.selectedCategory = tagItem;
    },
  },
};
</script>

<style>
.input-wrapper {
  display: grid;
  grid-template-columns: 1fr 90px;
  gap: 10px;
  align-items: center;
}

.date {
  /* visibility: hidden; */
  width: 1px;
  height: 1px;
  opacity: 0;
  position: absolute;
}

.left {
  display: flex;
  align-items: center;
  gap: 10px;
}
</style>
