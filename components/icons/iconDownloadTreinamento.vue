<template>

  <svg
    :width="size"
    viewBox="0 0 22 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6 16C3.79086 16 2 14.2091 2 12C2 10.0929 3.33457 8.4976 5.12071 8.09695C5.04169 7.74395 5 7.37684 5 7C5 4.23858 7.23858 2 10 2C12.4193 2 14.4373 3.71825 14.9002 6.00098C14.9334 6.00033 14.9666 6 15 6C17.7614 6 20 8.23858 20 11C20 13.419 18.2822 15.4367 16 15.9M8 19L11 22M11 22L14 19M11 22V10"
      :stroke="color"
      stroke-width="2.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>

<script>
export default {
  name: "IconDownloadTreinamento",
  props: {
    color: {
      type: String,
      default: "#F5821F",
    },
    size: {
      type: Number,
      default: 20,
    },
  },
};
</script>

<style></style>
