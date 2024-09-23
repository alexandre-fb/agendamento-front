<template>
    <div class="flex flex-col w-1/2 min-w-[180px] justify-between">
      <div class="pt-[15px] pb-[21px]">
        <p class="font-semibold text-xlg text-primary-text">{{ title_info }}</p>
      </div>
      <div class="flex flex-col justify-end">

        <p class="font-medium text-lg text-secondary-text">{{ label }}</p>
        <p class="font-semibold text-xlg text-secondary-text">{{ value }}</p>
      </div>
    </div>
</template>

<script>
export default {
  name: "informacoesContatoComponent",
  props: {
    title_info: {
      type: String,
    },
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
