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
        <IconCheck :size="24" v-if="isChecked" />
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
import IconCheck from "../icons/IconCheck.vue";

const emit = defineEmits(['clicked'])
const props = defineProps({
  text: String,
  respostasSelected: Array,
  id: Number,
});

const handleClick = () => {
  emit('clicked')
}

const isChecked = computed(() => {
  return props.respostasSelected.includes(props.id);
});
</script>

<style></style>
