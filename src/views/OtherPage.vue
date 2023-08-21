<template>
  <div class="container">
    <!-- input -->
    <div class="wrapper">
      <div>title: {{ pageTitle }}</div>
      <input type="text" :placeholder="pageTitle" v-model="titleInput" />
      <br />
      <Button :button-click="handleOnclickChangeTitle">제목 변경하기</Button>
      <Button :button-click="handleOnClickChangeComputedTitle">
        제목 변경하기2
      </Button>
    </div>

    <!-- checkbox -->
    <div class="wrapper">
      <label v-for="item in checkList" :key="item.id">
        <input type="checkbox" :value="item.value" v-model="checkSelected" />
        {{ item.value }}
      </label>
      <div>선택된 체크박스: {{ checkSelected }}</div>
    </div>

    <!-- checkbox Component -->
    <div class="wrapper">
      <!-- 
        v-bind:value="checkSelectedComponent"
        v-on:input="checkSelectedComponent = $event"

        참고: https://stackoverflow.com/questions/58187290/vue-binding-with-v-model-in-custom-checkbox-component-doesnt-work
      -->
      <Checkbox
        v-for="item in checkList"
        :key="item.id"
        :input-value="item.value"
        v-model="checkSelectedComponent"
      />
      <div>선택된 컴포넌트(체크박스): {{ checkSelectedComponent }}</div>
    </div>

    <!-- radio component -->
    <div class="wrapper">
      <Radio
        v-for="item in checkList"
        :key="item.id"
        :radio-value="item.value"
        name="radioSelected"
        v-model="radioSelected"
      />
      <div>선택된 라디오: {{ radioSelected }}</div>
    </div>

    <div class="wrapper">
      <Button :button-click="handleOnClickPageMove">
        투두 페이지로 돌아가기
      </Button>
    </div>
  </div>
</template>
<script>
import Button from "../components/Button.vue";
import Checkbox from "../components/Checkbox.vue";
import Radio from "../components/Radio.vue";

export default {
  name: "OtherPage",
  components: {
    Button,
    Checkbox,
    Radio,
  },
  data() {
    return {
      pageTitle: "초기 타이틀",
      titleInput: "",
      checkList: [
        { id: 1, value: "A" },
        { id: 2, value: "B" },
        { id: 3, value: "C" },
      ],
      checkSelected: [],
      checkSelectedComponent: [],
      radioSelected: "",
    };
  },
  methods: {
    handleOnclickChangeTitle: function () {
      this.pageTitle = this.titleInput;
    },
    handleOnClickChangeComputedTitle: function () {
      this.computedPageTitle += "🥹";
    },
    handleOnClickPageMove: function () {
      this.$router.push("/");
    },
  },
  computed: {
    computedPageTitle: {
      get() {
        return this.pageTitle;
      },
      set(value) {
        this.pageTitle = value;
      },
    },
  },
};
</script>
<style lang="scss" scoped>
.container {
  padding: 10px;
}
.wrapper {
  margin-top: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #cdcdcd;
}
</style>
