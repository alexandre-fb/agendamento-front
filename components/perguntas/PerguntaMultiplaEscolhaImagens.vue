<template>
  <div
    class="w-full max-w-[755px] flex flex-col justify-center items-center flex-1 gap-9 py-5"
  >
    <h2 class="text-center font-semibold text-xlg text-secondary-text">
      {{ pergunta.titulo }}
    </h2>
    <div
      class="w-full flex flex-wrap gap-7 justify-center items-center text-primary-text"
    >
      <template v-for="(resposta, index) in pergunta.respostas" :key="index">
        <RespostaMultiplaEscolhaImagens
          :img="resposta.imagem"
          :alternativa="getAlternativa(index)"
          :alt="resposta.imagem_alt"
          @click="handleClick(resposta.id)"
        />
      </template>
    </div>
  </div>
  <p class="font-bold text-base text-secondary-text">
    Instruções: Escolha uma das opções.
  </p>
</template>

<script setup>
import RespostaMultiplaEscolhaImagens from "./../respostas/RespostaMultiplaEscolhaImagens.vue";

const emit = defineEmits(["responderPergunta"]);
const props = defineProps({
  pergunta: Object,
});

const getAlternativa = (index) => {
  switch (index) {
    case 0:
      return "A";
      break;
    case 1:
      return "B";
      break;
    case 2:
      return "C";
      break;
    case 3:
      return "D";
      break;
  }
};

const handleClick = (idResposta) => {
  emit("responderPergunta", {
    idPergunta: props.pergunta.id,
    idResposta: idResposta,
  });
};
</script>

<style></style>
