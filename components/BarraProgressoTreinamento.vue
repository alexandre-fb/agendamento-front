<template>
  <div
    class="w-full max-w-[640px] h-[50px] flex justify-center items-center gap-[9px]"
  >
    <div class="h-full w-full border-[3px] border-primary rounded-15">
      <div
        class="h-full bg-primary rounded-[10px]"
        :style="{ width: progresso_porcentagem + '%' }"
      ></div>
    </div>
    <div
      class="h-[50px] w-[50px] border-[3px] border-primary rounded-15 flex justify-center items-center"
    >
      <p class="font-bold text-base text-secondary-text">
        {{ progresso_porcentagem }}%
      </p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  progresso_porcentagem: {
    type: Number,
    default: 0,
  },
});
</script>

<style></style>
