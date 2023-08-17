<template>
  <div class="list" v-if="todoItems.length > 0">
    <div class="">
      <Button
        v-if="!isSelect"
        button-type="button-remove"
        :button-click="setIsSelect"
      >
        선택하기
      </Button>
      <div v-else>
        <Button button-type="button-remove" :button-click="setIsSelect">
          선택 삭제
        </Button>
        <Button button-type="button-remove" :button-click="setIsSelect">
          선택 완료
        </Button>
        <Button button-type="button-remove" :button-click="setIsSelect">
          취소
        </Button>
      </div>
    </div>
    <TodoItem v-for="item in todoItems" :key="item.id" :item="item" />
    <div class="buttonWrapper">
      <Button
        v-if="todoItems.length > 0"
        button-type="button-remove"
        :button-click="removeAllItems"
      >
        clear all
      </Button>
    </div>
  </div>
  <div v-else class="noList">휑..</div>
</template>

<script>
import TodoItem from "./TodoItem.vue";
import Button from "./Button.vue";

export default {
  components: {
    TodoItem,
    Button,
  },
  props: {
    todoItems: {
      type: Array,
    },
  },
  computed: {
    isSelect() {
      return this.$store.state.IsSelect;
    },
  },
  methods: {
    removeAllItems: function () {
      this.$store.dispatch("deleteAllTodos", this.todoItems);
    },
    setIsSelect: function () {
      this.$store.commit("setIsSelect");
    },
  },
};
</script>
<style>
.list {
  margin-top: 30px;
}

.noList {
  margin-top: 100px;
  color: #cdcdcd;
}

.buttonWrapper {
  margin-top: 30px;

  .divider {
    color: #dae1e6;
  }
}
</style>
