<template>
  <div>
    <div class="title">
      <Button button-type="button-transparent" :button-click="setIsOpen">
        <div v-if="isOpen" class="content">
          {{ categoryLabel }}
          <IconChevron direction="up" />
        </div>
        <div v-else class="content">
          {{ categoryLabel }}
          <IconChevron direction="down" />
        </div>
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
import IconChevron from "./icon/IconChevron.vue";
import { useTodoStore } from "../store/modules/todos";

import utils from "../utils/util";

export default {
  components: {
    TodoItem,
    Button,
    IconChevron,
  },
  setup() {
    const store = useTodoStore();
    return { store };
  },
  props: {
    todoItems: {
      type: Array || Object,
    },
    category: {
      type: String,
    },
  },
  data() {
    return {
      isOpen: true,
    };
  },
  computed: {
    categoryLabel() {
      return utils.getCategoryLabel(this.store.Category, this.category);
    },
  },
  methods: {
    setIsOpen: function () {
      this.isOpen = !this.isOpen;
    },
  },
  mounted() {},
};
</script>

<style scoped lang="scss">
.title {
  width: 100%;
  position: relative;

  background-color: #f5f5f555;

  &::before {
    content: "";
    width: 100%;
    position: absolute;
    top: 50%;
    left: 0;
  }

  .content {
    display: flex;
    gap: 30px;
    align-items: center;
    justify-content: center;

    color: #cdcdcd;
    font-size: 13px;
    font-weight: 700;
  }
}
</style>
