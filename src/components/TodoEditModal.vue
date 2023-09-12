<template>
  <ModalCommon title="TODO 수정하기" ref="modal">
    <Input
      placeholder="수정할 값을 입력해주세요."
      v-model="todoInputEdit"
      :handle-submit="editTodo"
    />
    <div>
      <input type="date" ref="date" class="date" v-model="todoDate" />
      <Button button-type="button-edit" :button-click="focusTodoDate">
        완료 날짜 변경하기 🗓️ {{ formattedDate }}
      </Button>
    </div>
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
import dayjs from "dayjs";

import ModalCommon from "./ModalCommon.vue";
import Input from "./Input.vue";
import Button from "./Button.vue";
import { useTodoStore } from "../store/modules/todos";

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
  setup() {
    const store = useTodoStore();
    return { store };
  },
  data() {
    return {
      todoDate: dayjs(this.todoItem.date).format("YYYY-MM-DD"),
    };
  },
  computed: {
    formattedDate() {
      return dayjs(this.todoDate).format("YY.MM.DD");
    },
  },
  methods: {
    editTodo: function () {
      const item = {
        id: this.todoItem.id,
        content: this.todoInputEdit,
        date: this.todoDate,
      };
      this.store.updateTodoItem(item);
      this.$refs.modal.hide();
    },
    closeModal: function () {
      this.$refs.modal.hide();
    },
    focusTodoDate: function () {
      this.$refs.date.showPicker();
    },
  },
  created() {
    this.todoInputEdit = this.todoItem.content;
  },
};
</script>

<style scoped>
.modal-button-wrapper {
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-top: 15px;
}

.date {
  width: 1px;
  height: 1px;
  opacity: 0;
}
</style>
