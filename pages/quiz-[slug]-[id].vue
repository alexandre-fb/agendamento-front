<template>
  <div class="flex flex-col flex-1">
    <SubBannerComponent
      :img="quizData.imagem_banner_desk"
      :img_mobile="quizData.imagem_banner_mobile"
      :alt="quizData.imagem_alt"
      :title="quizData.titulo"
    />

    <div class="flex flex-col items-center px-3 flex-1">
      <div class="flex justify-center w-full py-6 mx-auto">
        <BarraProgressoTreinamento
          :progresso_porcentagem="progressPercentage"
        />
      </div>
      <div
        v-if="!quizIsOver"
        class="flex flex-col flex-1 w-full max-w-container"
      >
        <template v-for="(pergunta, index) in quizData.perguntas" :key="index">
          <template v-if="index === currentPerguntaIndex">
            <div
              class="flex flex-col items-center justify-center flex-1 w-full"
            >
              <PerguntaSimNao
                v-if="pergunta.tipo === 'sim-nao'"
                :pergunta="pergunta"
                @responderPergunta="handleRespostaClick"
              />

              <PerguntaMultiplaEscolhaTexto
                v-if="pergunta.tipo === 'multipla-escolha-texto'"
                :pergunta="pergunta"
                @responderPergunta="handleRespostaClick"
              />

              <PerguntaCheckbox
                v-if="pergunta.tipo === 'checkbox'"
                :pergunta="pergunta"
                @responderPergunta="handleRespostaClick"
              />

              <PerguntaMultiplaEscolhaImagens
                v-if="pergunta.tipo === 'multipla-escolha-imagens'"
                :pergunta="pergunta"
                @responderPergunta="handleRespostaClick"
              />

              <PerguntaMultiplaEscolhaVideo
                v-if="pergunta.tipo === 'multipla-escolha-video'"
                :pergunta="pergunta"
                @responderPergunta="handleRespostaClick"
              />

              <PerguntaMultiplaEscolhaAudio
                v-if="pergunta.tipo === 'multipla-escolha-audio'"
                :pergunta="pergunta"
                @responderPergunta="handleRespostaClick"
              />
            </div>
          </template>
        </template>
        <div class="py-4">
          <ButtonsVoltarProsseguir
            v-if="currentPerguntaIndex !== 0"
            @voltarClick="handleVoltarPergunta()"
            hiddenProsseguir
          />
        </div>
      </div>
      <div v-else>
        <div
          v-if="loadingResultado"
          v-loading="loadingResultado"
          class="h-60 w-10"
          element-loading-background="transparent"
        ></div>
        <TreinamentoResultado
          :data="resultadoData"
          :timeInSeconds="cronometro.timeInSeconds"
          v-else
          v-motion-slide-visible-once-top
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import mockQuizData from "~/mocks/quiz.json";
import mockResultadoData from "~/mocks/quiz_resultado.json";
import ButtonsVoltarProsseguir from "~/components/treinamento/ButtonsVoltarProsseguir.vue";
import PerguntaSimNao from "~/components/perguntas/PerguntaSimNao.vue";
import PerguntaMultiplaEscolhaTexto from "~/components/perguntas/PerguntaMultiplaEscolhaTexto.vue";
import PerguntaCheckbox from "~/components/perguntas/PerguntaCheckbox.vue";
import PerguntaMultiplaEscolhaImagens from "~/components/perguntas/PerguntaMultiplaEscolhaImagens.vue";
import PerguntaMultiplaEscolhaVideo from "~/components/perguntas/PerguntaMultiplaEscolhaVideo.vue";
import PerguntaMultiplaEscolhaAudio from "~/components/perguntas/PerguntaMultiplaEscolhaAudio.vue";
import TreinamentoResultado from "~/components/treinamento/TreinamentoResultado.vue";

const router = useRouter();
const config = useRuntimeConfig();
const { baseApiUrl } = config.public;

const userStore = useUserStore();
const completeToken = "Bearer " + userStore.token;

const quizData = ref({});
const quizIsOver = ref(false);
const currentPerguntaIndex = ref(0);
const respostas = ref([]);
const progressPercentage = ref(0);
const loadingResultado = ref(true);
const resultadoData = ref({});
const cronometro = ref({
  timeInSeconds: 0,
  interval: null,
});

onMounted(() => {
  quizData.value = mockQuizData;
  startCronometro();
});

const handleRespostaClick = (resposta) => {
  if (!respostas.value[currentPerguntaIndex.value]) {
    respostas.value.push(resposta);
  }

  respostas.value[currentPerguntaIndex.value] = resposta;
  currentPerguntaIndex.value++;
  progressPercentage.value = Math.round(
    (100 / quizData.value.perguntas.length) * currentPerguntaIndex.value
  );
  localStorage.setItem("respostas", JSON.stringify(respostas.value));

  if (currentPerguntaIndex.value == quizData.value.perguntas.length) {
    pauseCronometro();
    finalizarQuiz();
  }
};

const finalizarQuiz = () => {
  quizIsOver.value = true;
  sendResult();
};

const handleVoltarPergunta = () => {
  currentPerguntaIndex.value--;

  if (currentPerguntaIndex.value < 0) {
    router.push({
      path: `/treinamento-${quizData.value.slug}-${quizData.value.id}`,
    });
    currentPerguntaIndex.value = 0;
  }
};

const sendResult = async () => {
  try {
    loadingResultado.value = true;

    const body = {
      usuario_token: completeToken,
      respostas: respostas.value,
      tempo: cronometro.value.timeInSeconds,
    };

    // const response = await $fetch(baseApiUrl + "/resultado", {
    //   method: "POST",
    //   body
    // });

    // resultadoData.value = response;
    resultadoData.value = mockResultadoData;

    console.log("resultado enviado", body);
  } catch (error) {
    console.log("error", error);
  } finally {
    setTimeout(() => {
      loadingResultado.value = false;
    }, 1000);
  }
};

function startCronometro() {
  cronometro.value.interval = setInterval(() => {
    cronometro.value.timeInSeconds++;
  }, 1000);
}

function pauseCronometro() {
  clearInterval(cronometro.value.interval);
}
</script>
