<template>
  <div class="modal-wrapper" v-if="isShow">
    <div class="modal-title">{{ title }}</div>
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      isShow: false,
    };
  },
  methods: {
    show() {
      this.isShow = true;
    },
    hide() {
      this.isShow = false;
    },
  },
};
</script>

<style>
.modal-wrapper {
  min-width: 200px;
  position: fixed;
  top: 150px;
  left: 130px;

  background-color: white;
  border-radius: 12px;
  font-size: 12px;

  padding: 20px 30px;
  box-shadow: 0 2px 10px -5px #cdcdcd;
}

.modal-title {
  font-size: 15px;
  font-weight: 700;
  margin-bottom: 30px;
}
</style>
