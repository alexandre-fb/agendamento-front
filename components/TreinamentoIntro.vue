<template>
  <div
    class="w-full max-w-container gap-12 flex justify-center items-center flex-wrap"
  >
    <div class="max-w-[620px] w-full rounded-15">
      <img
        class="w-full max-h-[638px] object-cover rounded-15"
        :src="img"
        :alt="alt"
      />
    </div>
    <div
      class="w-full h-full max-w-[600px] flex flex-col justify-end items-start"
    >
      <div
        class="flex items-center gap-2 bg-secondary rounded-15 px-2 py-1 text-primary font-bold text-sm"
      >
        <h4 class="font-bold text-sm">
          {{ categoria }}
          <span
            v-if="
              sub_categoria !== '' && sub_categoria !== null && sub_categoria
            "
            >/</span
          >
          {{ sub_categoria }}
        </h4>
      </div>

      <div class="flex flex-col gap-[18px] mb-12">
        <h2
          v-if="title !== '' && title !== null && title"
          class="text-primary font-semibold text-2xlg"
        >
          {{ title }}
        </h2>
        <!-- text -->
        <div
          class="__clamp-2 text-secondary-text font-medium text-base"
          v-html="text"
        ></div>
      </div>

      <ButtonWithIcon
        icon="treinamento"
        text="Quero iniciar o treinamento"
        @clicked="handleStartTreinamento"
      />
    </div>
  </div>
</template>

<script setup>
import IconChapeuFormatura from "./icons/IconChapeuFormatura.vue";

const emits = defineEmits(["startTreinamento"])
const props = defineProps({
  img: String,
  img_mobile: String,
  alt: String,
  categoria: String,
  sub_categoria: String,
  title: String,
  text: String,
});

const handleStartTreinamento = () => {
  emits("startTreinamento");
};
</script>

<style></style>
