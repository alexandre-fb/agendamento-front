<template>
  <svg
    :width="size"
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6 8.00989L6.01 7.99878M10 8.00989L10.01 7.99878M6 12.0099L6.01 11.9988M10 12.0099L10.01 11.9988M6 16.0099L6.01 15.9988M10 16.0099L10.01 15.9988M14 20H2.6C2.26863 20 2 19.7314 2 19.4V4.6C2 4.26863 2.26863 4 2.6 4H8V2.6C8 2.26863 8.26863 2 8.6 2H13.4C13.7314 2 14 2.26863 14 2.6V8M14 20V8M14 20H19.4C19.7314 20 20 19.7314 20 19.4V8.6C20 8.26863 19.7314 8 19.4 8H14M14 20V16M14 8V12M14 16V12M14 16H16M14 12H16"
      :stroke="color"
      stroke-width="2.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>

<script>
export default {
  name: "IconArrowBack",
  props: {
    color: {
      type: String,
      default: "#F5821F",
    },
    size: {
      type: Number,
      default: 22,
    },
  },
};
</script>

<style></style>
