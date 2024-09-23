<template>
  <div
    class="flex flex-col items-center gap-5 w-full max-w-[970px] flex-1 mx-auto"
  >
  <div class="flex flex-col items-center gap-4 flex-1">
    <h2 v-if="data.titulo" class="text-2xlg font-bold">{{ data.titulo }}</h2>
    <p v-if="data.descricao">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
      obcaecati quam ducimus tenetur omnis odio, veritatis libero ut eaque vero.
      Aliquid et corrupti architecto rerum dolorem vitae dolorum consequuntur
      ullam.
    </p>
    <div class="h-[546px] w-full max-w-[971px] mb-5">
      <VideoPlayer :link="data.url" />
    </div>
  </div>

    <!-- instrucoes -->
    <div class="mb-4 pt-[30px]">
      <p class="text-center font-bold text-base">
        Instruções: Assista o vídeo até o fim.
      </p>

      <p class="text-center font-bold text-base md:hidden block">
        Vire o smartphone para melhor visualização.
      </p>
    </div>
  </div>
</template>

<script setup>
const emits = defineEmits(["prosseguirClick"]);
const props = defineProps({
  data: {
    type: Object,
    default: {
      titulo: "",
      descricao: "",
      url: "",
    },
  },
});
</script>

<style></style>
