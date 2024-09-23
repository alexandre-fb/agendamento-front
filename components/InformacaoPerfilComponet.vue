<template>
    <div class="w-[200px] flex flex-col justify-center items-center">
      <p class="font-bold text-base text-secondary-text">{{ label }}:</p>
      <p class="font-semibold text-xlg text-primary-text">{{ value }}</p>
    </div>
</template>

<script>
export default {
  name: "informacaoPerfilComponent",
  props: {
    label: {
      type: String,
    },
    value: {
      type: String,
    },
  },
};
</script>

<style></style>
