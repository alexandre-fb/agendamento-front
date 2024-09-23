<template>
  <div class="flex w-full justify-center gap-3">
    <button
      v-if="!hiddenVoltar"
      class="group font-semibold text-base text-primary-text border-[3px] border-primary rounded-15 py-2 px-3 cursor-pointer"
      @click="voltarClick"
    >
      <span class="block group-hover:scale-105 transition"> Voltar </span>
    </button>
    <button 
      v-if="!hiddenProsseguir"
      class="group font-semibold text-base text-primary-text border-[3px] border-primary rounded-15 py-2 px-3 cursor-pointer"
      @click="handleProsseguirClick"
    >
      <span class="block group-hover:scale-105 transition"> Prosseguir </span>
    </button>
  </div>
</template>
<script setup>
const emit = defineEmits(["voltarClick", "prosseguirClick"]);
const props = defineProps({
  hiddenVoltar: Boolean,
  hiddenProsseguir: Boolean
})

const voltarClick = () => {
  emit("voltarClick");
};
const handleProsseguirClick = () => {
  emit("prosseguirClick");
};
</script>
