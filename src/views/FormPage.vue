<template>
  <div class="container">
    <div class="wrapper">form</div>
    <UserForm @updateFormData="updateFormData" />
    <div class="wrapper">
      <div v-for="(value, key) in formData" :key="key">
        {{ key }} >> {{ value }}
      </div>
      <div v-for="(value, key) in computedFormData" :key="key">
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
import { ref, computed } from "vue";
import UserForm from "../components/formPage/userForm.vue";

export default {
  name: "FormPage",
  components: {
    UserForm,
  },
  // data() {
  //   return {
  //     formData: {},
  //     errorMsg: {},
  //   };
  // },
  // methods: {
  //   updateFormData: function (formValue, errorMsg) {
  //     this.formData = formValue;
  //     this.errorMsg = errorMsg;
  //   },
  // },
  // computed: {
  //   computedFormData() {
  //     const data = {};
  //     for (const [key, value] of Object.entries(this.formData)) {
  //       data[key] = `값을 변경하는 과정... → ${value}`;
  //     }
  //     return data;
  //   },
  // },
  setup() {
    const formData = ref({});
    const errorMsg = ref({});

    const updateFormData = (formValue, error) => {
      formData.value = formValue;
      errorMsg.value = error;
    };

    const computedFormData = computed(() => {
      const data = {};

      for (const [key, value] of Object.entries(formData.value)) {
        data[key] = `값을 변경하는 과정... → ${value}`;
      }
      return data;
    });

    return { formData, errorMsg, updateFormData, computedFormData };
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

  .error {
    color: #fa5858;
  }
}
</style>
