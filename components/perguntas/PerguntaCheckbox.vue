<template>
  <div
    class="w-full max-w-[755px] flex flex-col justify-center items-center flex-1 gap-9 py-5"
  >
    <h2 class="text-center font-semibold text-xlg text-secondary-text">
      {{ pergunta.titulo }}
    </h2>
    <div
      class="w-full flex flex-wrap gap-7 justify-start items-center text-primary-text"
    >
      <!-- Respostas -->
      <template v-for="(resposta, index) in pergunta.respostas" :key="index">
        <div class="w-full">
          <RespostaCheckbox
            :respostasSelected="respostasSelected"
            :id="resposta.id"
            :text="resposta.texto"
            @clicked="handleClickResposta(resposta.id)"
          />
        </div>
      </template>
    </div>
  </div>
  <ButtonWithIcon
    icon="like"
    text="Confirmar Resposta"
    @clicked="handleConfirm"
  />
  <p class="font-bold text-base text-secondary-text mt-7">
    Instruções: Escolha todas as opções corretas.
  </p>
</template>

<script setup>
import RespostaCheckbox from "../respostas/RespostaCheckbox.vue";
const emit = defineEmits(["responderPergunta"]);

const props = defineProps({
  pergunta: Object,
});

const respostasSelected = ref([]);
const respostaPerguntaAtual = ref([]);

onMounted(() => {
  verificarRespostaExistente();
});

const verificarRespostaExistente = () => {
  const todasRespostas = JSON.parse(localStorage.getItem("respostas"));
  const perguntaId = props.pergunta.id;

  respostaPerguntaAtual.value = todasRespostas.filter((resposta) => {
    if (resposta.idPergunta) {
      return resposta.idPergunta === perguntaId;
    }
  });
  
  if(respostaPerguntaAtual.value[0]) {
    respostasSelected.value = respostaPerguntaAtual.value[0].idResposta
  }

};

const handleClickResposta = (idResposta) => {
  if (respostasSelected.value.includes(idResposta)) {
    const indice = respostasSelected.value.indexOf(idResposta);
    respostasSelected.value.splice(indice, 1);
  } else {
    respostasSelected.value.push(idResposta);
  }
};

const handleConfirm = () => {
  if (respostasSelected.value.length === 0) {
    ElMessage.error("Selecione pelo uma alternativa!");
    return;
  }

  emit("responderPergunta", {
    idPergunta: props.pergunta.id,
    idResposta: respostasSelected.value,
  });
};
</script>

<style></style>
