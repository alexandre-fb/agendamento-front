<template>
  <svg
    :width="size"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M13 5C14.1046 5 15 5.89543 15 7M19 7C19 10.3137 16.3137 13 13 13C12.3938 13 11.8087 12.9101 11.2571 12.7429L9 15H7V17H5V19H2C1.44772 19 1 18.5523 1 18V15.4142C1 15.149 1.10536 14.8946 1.29289 14.7071L7.25707 8.74293C7.08989 8.19135 7 7.60617 7 7C7 3.68629 9.68629 1 13 1C16.3137 1 19 3.68629 19 7Z"
      :stroke="color"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>

<script>
export default {
  name: "IconPassword",
  props: {
    color: {
      type: String,
      default: "#ffffff",
    },
    size: {
      type: Number,
      default: 20,
    },
  },
};
</script>

<style></style>
