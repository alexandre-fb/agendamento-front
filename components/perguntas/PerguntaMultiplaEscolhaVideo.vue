<template>
  <div
    class="w-full max-w-[755px] flex flex-col justify-center items-center flex-1 gap-9 py-5"
  >
    <div class="h-[174px] w400:h-[236px] w-full max-w-[420px] mb-5">
      <iframe
        class="w-full h-full"
        :src="pergunta.video_url"
        frameborder="0"
        allowfullscreen
      ></iframe>
    </div>

    <template v-for="(resposta, index) in pergunta.respostas" :key="index">
      <div class="w-full">
        <RespostaMultiplaEscolhaDefault
          :alternativa="getAlternativa(index)"
          :text="resposta.texto"
          @click="handleClick(resposta.id)"
        />
      </div>
    </template>
  </div>
</template>

<script setup>
import RespostaMultiplaEscolhaDefault from "../respostas/RespostaMultiplaEscolhaDefault.vue";

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
