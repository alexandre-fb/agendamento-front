<template>
  <div
    class="w-full max-w-[755px] flex flex-col justify-center items-center flex-1 gap-9 py-5"
  >
    <div class="w-full mb-5">
      <AudioPlayer :link="pergunta.audio_url" />
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
import AudioPlayer from "../AudioPlayer.vue";
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
