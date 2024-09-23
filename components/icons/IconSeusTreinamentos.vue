<template>
  <svg
    :width="size"
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M18 10H4M18 10C19.1046 10 20 10.8954 20 12V18C20 19.1046 19.1046 20 18 20H4C2.89543 20 2 19.1046 2 18V12C2 10.8954 2.89543 10 4 10M18 10V8C18 6.89543 17.1046 6 16 6M4 10V8C4 6.89543 4.89543 6 6 6M6 6V4C6 2.89543 6.89543 2 8 2H14C15.1046 2 16 2.89543 16 4V6M6 6H16"
      :stroke="color"
      stroke-width="2.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>

<script>
export default {
  name: "IconSeusTreinamentos",
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
