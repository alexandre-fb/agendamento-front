<template>
  <div
    class="w-full max-w-container flex flex-col justify-center items-center py-2"
  >
    <div
      class="max-w-[523px] flex flex-col justify-center items-center gap-8 py-32"
    >
      <p class="font-semibold text-xlg text-secondary-text text-center">
        Agora que você assistiu a lição, deseja assistir o vídeo novamente ou
        iniciar o quiz?
      </p>
      <div class="flex flex-wrap justify-center items-center gap-12">
        <button
          @click="handleVoltarClick"
          class="h-[169px] w-[169px] flex flex-col justify-center items-center px-[18px] border-[3px] border-primary rounded-15 gap-[14px]"
        >
          <div
            class="flex justify-center items-center h-[50px] w-[50px] border-[3px] border-primary rounded-15"
          >
            <IconVoltar />
          </div>
          <p class="font-medium text-lg text-secondary-text text-center">
            Assistir novamente
          </p>
        </button>
        <button
          @click="handleIniciarProvaClick"
          class="h-[169px] w-[169px] flex flex-col justify-center items-center px-[18px] border-[3px] border-primary rounded-15 gap-[14px]"
        >
          <div
            class="flex justify-center items-center h-[50px] w-[50px] border-[3px] border-primary rounded-15"
          >
            <IconChapeuFormaturaBranco />
          </div>
          <p class="font-medium text-lg text-secondary-text text-center">
            Quero iniciar a prova
          </p>
        </button>
      </div>
    </div>

    <p class="font-bold text-base text-secondary-text">
      Instruções: Escolha uma das opções.
    </p>
  </div>
</template>

<script setup>
import IconChapeuFormaturaBranco from "./icons/IconChapeuFormaturaBranco.vue";
import IconVoltar from "./icons/iconVoltar.vue";

const emit = defineEmits(["voltarClick", "iniciarProvaClick"]);
const props = defineProps({
  link: String,
  text_voltar: String,
  text_iniciar: String,
});

const handleVoltarClick = () => {
  emit("voltarClick");
};

const handleIniciarProvaClick = () => {
  emit("iniciarProvaClick");
};
</script>

<style></style>
