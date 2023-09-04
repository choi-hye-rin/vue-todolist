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

export default {
  components: {
    TodoItem,
    Button,
    IconChevron,
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
      const label = this.$store.state.Category.filter(
        (cate) => cate.id === this.category
      )[0]?.value;
      return label;
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
