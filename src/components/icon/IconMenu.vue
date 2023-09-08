<template>
  <div class="icon" :class="[`direction-${direction}`]">
    <svg
      :width="width"
      :height="height"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="#cdcdcd"
    >
      <path
        d="M19 12H5"
        stroke="#2E2C2C"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M19 6L5 6"
        stroke="#2E2C2C"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M19 18H5"
        stroke="#2E2C2C"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  </div>
</template>

<script>
export default {
  name: "IconChevron",
  props: {
    width: {
      type: Number,
      default: 15,
    },
    height: {
      type: Number,
      default: 15,
    },
    direction: {
      type: String,
      default: "down",
    },
  },
};
</script>

<style>
.icon {
}

.direction-up {
  transform: rotate(180deg);
}
</style>
