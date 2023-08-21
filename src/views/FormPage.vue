<template>
  <div class="container">
    <div class="wrapper">form</div>
    <div class="wrapper">
      <form>
        <div>그룹유형</div>
        <div>
          <Radio
            v-for="item in checkList"
            :key="item.id"
            :radio-value="item.value"
            v-model="groupType"
          />
        </div>
        <div>그룹명</div>
        <input type="text" v-model.lazy="groupName" />
        <div>주민등록번호</div>
        <input type="text" v-model.lazy="registrationNo" />
        <br />
        <br />
        <Button :button-click="onSubmit">제출하기</Button>
      </form>
    </div>

    <div class="wrapper">
      <div v-for="(value, key) in formValue" :key="key">
        {{ key }} >> {{ value }}
      </div>
    </div>
  </div>
</template>
<script>
import Radio from "../components/Radio.vue";
import Button from "../components/Button.vue";

export default {
  name: "FormPage",
  components: {
    Radio,
    Button,
  },
  data() {
    return {
      checkList: [
        { id: 1, value: "A" },
        { id: 2, value: "B" },
        { id: 3, value: "C" },
      ],
      groupType: "",
      groupName: "오잉😭",
      registrationNo: "",
      formValue: {},
    };
  },
  methods: {
    onSubmit: function () {
      this.formValue = {
        groupType: this.groupType,
        groupName: this.groupName,
        registrationNo: this.registrationNo,
      };
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

  input {
    padding: 5px 10px;
  }
}
</style>
