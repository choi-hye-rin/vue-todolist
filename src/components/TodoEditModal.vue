<template>
  <ModalCommon title="TODO 수정하기" ref="modal">
    <Input
      placeholder="수정할 값을 입력해주세요."
      v-model="todoInputEdit"
      :handle-submit="editTodo"
    />
  </ModalCommon>
</template>

<script>
import ModalCommon from "./ModalCommon.vue";
import Input from "./Input.vue";

export default {
  props: {
    todoItem: {
      type: Object,
    },
  },
  components: {
    ModalCommon,
    Input,
  },
  methods: {
    editTodo: function () {
      const item = {
        id: this.todoItem.id,
        content: this.todoInputEdit,
      };
      this.$store.dispatch("updateTodoItem", item);
    },
  },
  created() {
    this.todoInputEdit = this.todoItem.content;
  },
};
</script>

<style></style>
