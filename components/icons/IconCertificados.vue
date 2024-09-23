<template>
  <svg
    :width="size"
    viewBox="0 0 19 27"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5.43929 15.4759L4.14286 25L9.5 21.8636L14.8571 25L13.5607 15.4654M17 9.31819C17 13.3599 13.6421 16.6364 9.5 16.6364C5.35786 16.6364 2 13.3599 2 9.31819C2 5.27647 5.35786 2 9.5 2C13.6421 2 17 5.27647 17 9.31819Z"
      :stroke="color"
      stroke-width="2.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>

<script>
export default {
  name: "IconCertificados",
  props: {
    color: {
      type: String,
      default: "#F5821F",
    },
    size: {
      type: Number,
      default: 19,
    },
  },
};
</script>

<style></style>
