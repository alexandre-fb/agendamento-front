<template>
  <svg
    :width="size"
    viewBox="0 0 38 39"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2 5.84828V33.1517C2 35.2775 3.74667 37 5.90222 37H32.0978C34.2533 37 36 35.2775 36 33.1517V13.1089C36 12.0877 35.5911 11.1102 34.8578 10.3871L27.4533 3.12643C26.72 2.40324 25.7289 2 24.6933 2H5.90222C3.74667 2 2 3.72252 2 5.84828Z"
      :stroke="color"
      stroke-width="2.5"
      stroke-miterlimit="10"
    />
  </svg>
</template>

<script>
export default {
  name: "IconFormatoArquivoDownload",
  props: {
    color: {
      type: String,
      default: "#424242",
    },
    size: {
      type: Number,
      default: 38,
    },
  },
};
</script>

<style></style>
