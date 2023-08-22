<template>
  <div class="container">
    <div class="wrapper">form</div>
    <UserForm @updateFormData="updateFormData" />
    <div class="wrapper">
      <div v-for="(value, key) in formData" :key="key">
        {{ key }} >> {{ value }}
      </div>
    </div>
    <div class="wrapper">
      <div v-for="msg in errorMsg" :key="msg" class="error">
        에러메세지: {{ msg[0] }}
      </div>
    </div>
  </div>
</template>
<script>
import UserForm from "../components/formPage/userForm.vue";

export default {
  name: "FormPage",
  components: {
    UserForm,
  },
  data() {
    return {
      formData: {},
      errorMsg: {},
    };
  },
  methods: {
    updateFormData: function (formValue, errorMsg) {
      this.formData = formValue;
      this.errorMsg = errorMsg;
    },
  },
  computed: {},
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
