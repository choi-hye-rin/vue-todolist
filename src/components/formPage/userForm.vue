<template>
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
</template>

<script>
import Radio from "../Radio.vue";
import Button from "../Button.vue";
import validator from "../../utils/validatior";

export default {
  name: "UserForm",
  components: {
    Radio,
    Button,
  },
  props: {
    formData: {
      type: Object,
    },
  },
  data() {
    return {
      checkList: [
        { id: 1, value: "A" },
        { id: 2, value: "B" },
        { id: 3, value: "C" },
      ],
      groupType: "",
      groupName: "😭",
      registrationNo: "",
      formValue: {
        groupType: this.groupType,
        groupName: this.groupName,
        registrationNo: this.registrationNo,
      },
      errorMsg: {},
    };
  },
  methods: {
    onSubmit: function () {
      this.errorMsg.groupType = validator.validate("groupType", this.groupType);
      this.errorMsg.registrationNo = validator.validate(
        "registrationNo",
        this.registrationNo
      );

      this.formValue = {
        groupType: this.groupType,
        groupName: this.groupName,
        registrationNo: this.registrationNo,
      };

      this.$emit("updateFormData", this.formValue, this.errorMsg);
    },
  },
  computed: {},
  watch: {},
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

  .error {
    color: #fa5858;
  }
}
</style>
