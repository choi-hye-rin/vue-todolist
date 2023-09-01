<template>
  <div>
    <div class="title">
      <span>
        {{ category }}
      </span>
      <Button :button-type="button - remove" :button-click="setIsOpen">
        <span v-if="isOpen"> ✖️ </span>
        <span v-else> 👀 </span>
      </Button>
    </div>
    <div v-if="isOpen">
      <TodoItem v-for="item in todoItems" :key="item.id" :item="item" />
    </div>
  </div>
</template>

<script>
import Button from "./Button.vue";
import TodoItem from "./TodoItem.vue";

export default {
  components: {
    TodoItem,
    Button,
  },
  props: {
    todoItems: {
      type: Array || Object,
    },
    category: {
      type: Number,
    },
  },
  data() {
    return {
      isOpen: false,
    };
  },
  computed: {},
  methods: {
    setIsOpen: function () {
      this.isOpen = !this.isOpen;
    },
  },
  mounted() {
    console.log("PROPS", this.todoItems);
  },
};
</script>

<style scoped lang="scss">
.title {
  width: 100%;
  position: relative;
  background-color: #f0f0f0;

  span {
    position: relative;
    padding: 5px 20px;
    z-index: 10;
  }

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;

    width: 100%;
  }
}
</style>
