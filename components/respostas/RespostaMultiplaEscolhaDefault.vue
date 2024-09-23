<template>
  <button
    class="group flex justify-start items-stretch gap-[10px] w-full cursor-pointer"
    @click="handleClick"
  >
    <div
      class="min-h-[50px] w-[50px] border-[3px] border-primary flex justify-center items-center rounded-15 px-2"
    >
      <span
        class="block font-semibold text-xlg text-primary-text text-center group-hover:scale-110 transition"
      >
        {{ alternativa }}
      </span>
    </div>

    <div
      class="min-h-[50px] w-full max-w-[695px] border-[3px] border-primary flex items-center rounded-15 px-5 py-2"
    >
      <p
        class="text-left font-bold text-base w-full text-secondary-text group-hover:scale-[1.01] transition"
      >
        {{ text }}
      </p>
    </div>
  </button>
</template>

<script setup>
const props = defineProps({
  alternativa: String,
  text: String,
});
</script>

<style></style>
