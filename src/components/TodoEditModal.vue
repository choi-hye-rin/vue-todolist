<template>
  <ModalCommon title="TODO 수정하기" ref="modal">
    <div class="edit-modal-wrapper">
      <Input
        placeholder="수정할 값을 입력해주세요."
        v-model="todoInputEdit"
        :handle-submit="editTodo"
      />
      <Button button-type="button-create" :button-click="editTodo">
        수정하기
      </Button>
    </div>
  </ModalCommon>
</template>

<script>
import ModalCommon from "./ModalCommon.vue";
import Input from "./Input.vue";
import Button from "./Button.vue";

export default {
  props: {
    todoItem: {
      type: Object,
    },
  },
  components: {
    ModalCommon,
    Input,
    Button,
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

<style>
.edit-modal-wrapper {
  display: flex;
  flex-direction: column;
  gap: 30px;
}
</style>
