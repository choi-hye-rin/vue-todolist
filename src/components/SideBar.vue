<template>
  <div>
    <div class="header">
      <Button button-type="button-transparent" :button-click="setIsOpen">
        <IconMenu />
      </Button>
    </div>
    <div class="nav-bar" :class="{ ['active']: isSidebarOpen }">
      <div class="nav-content">
        <ul>
          <li v-for="item in sidebarItems" :key="item.id">
            <Button
              button-type="button-transparent"
              :button-click="item.function"
            >
              {{ item.label }}
            </Button>
          </li>
        </ul>
      </div>
    </div>
    <div v-if="isSidebarOpen" class="nav-background" @click="setIsOpen"></div>
  </div>
</template>

<script>
import Button from "./Button.vue";
import IconMenu from "./icon/IconMenu.vue";
import { todoStore } from "../store/index.js";

export default {
  name: "SideBar",
  components: {
    Button,
    IconMenu,
  },
  setup() {
    const store = todoStore();
    return { store };
  },
  data() {
    return {
      isSidebarOpen: false,
      sidebarItems: [
        {
          id: "setCategory",
          label: "카테고리 편집하기",
          function: this.setCategory,
        },
        {
          id: "clearAll",
          label: "모든 아이템 삭제하기",
          function: this.removeAllItems,
        },
      ],
    };
  },
  computed: {
    todoItems() {
      return this.store.TodoList;
    },
  },
  methods: {
    setIsOpen: function () {
      this.isSidebarOpen = !this.isSidebarOpen;
    },
    setCategory: function () {
      console.log("카테고리 수정하기 ");
    },
    removeAllItems: function () {
      this.store.deleteAllTodos(this.todoItems);
    },
  },
};
</script>

<style scoped lang="scss">
.header {
  width: 100%;
  height: 40px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  text-align: left;
  z-index: 999;
}
.header-icon {
  /*  */
}

.nav-bar {
  width: 100%;
  max-width: 300px;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;

  background-color: white;
  z-index: 100;
  transform: translateX(-300px);
  transition: all 0.1s ease-out;
}

.active {
  transform: translateX(0);
  transition: all 0.2s ease;
}

.nav-content {
  padding: 20px;
  padding-top: 80px;
  text-align: left;

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  li {
    padding: 5px 0;
  }
}

.nav-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #00000020;
  z-index: 99;
}
</style>
