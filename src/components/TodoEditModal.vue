<template>
  <ModalCommon title="TODO 수정하기" ref="modal">
    <Input
      placeholder="수정할 값을 입력해주세요."
      v-model="todoInputEdit"
      :handle-submit="editTodo"
    />
    <div class="modal-button-wrapper">
      <Button button-type="button-create" :button-click="editTodo">
        수정하기
      </Button>
      <Button button-type="button-remove" :button-click="closeModal">
        닫기
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
      this.$refs.modal.hide();
    },
    closeModal: function () {
      this.$refs.modal.hide();
    },
  },
  created() {
    this.todoInputEdit = this.todoItem.content;
  },
};
</script>

<style>
.modal-button-wrapper {
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-top: 30px;
}
</style>
