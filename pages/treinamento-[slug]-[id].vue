<template>
  <div class="flex flex-col flex-1">
    <SubBannerComponent
      :img="'/images/img-banner.webp'"
      :img_mobile="'/images/img-mobile-banner.webp'"
      :alt="'Img'"
      :title="treinamentoData.titulo"
    />
    <div class="flex flex-col w-full flex-1 items-center">
      <div
        class="flex flex-col flex-1 w-full max-w-container py-7 px-3 gap-[19px]"
      >
        <div class="w-full flex-1" v-if="!treinamentoIsStarted">
          <TreinamentoIntro
            :img="treinamentoData.imagem"
            :alt="treinamentoData.imagem_alt"
            :categoria="treinamentoData.categoria_nome"
            :sub_categoria="treinamentoData.subcategoria_nome"
            :title="treinamentoData.titulo"
            :text="treinamentoData.descricao"
            @startTreinamento="startTreinamento"
          />
        </div>

        <!-- conteudo treinamento -->
        <div
          v-if="treinamentoIsStarted && !treinamentoIsOver"
          class="flex flex-col flex-1 w-full"
        >
          <template
            v-for="(
              treinamentoItem, index
            ) in treinamentoData.conteudo_treinamento"
            :key="index"
          >
            <template v-if="index === currentIndexConteudo">
              <div class="flex flex-col flex-1 w-full">
                <TreinamentoVideo
                  v-if="treinamentoItem.tipo === 'video'"
                  :data="treinamentoItem"
                />

                <TreinamentoImagensSlider
                  v-else-if="treinamentoItem.tipo === 'imagens'"
                  :data="treinamentoItem"
                />
              </div>
            </template>
          </template>
          <ButtonsVoltarProsseguir
            @voltarClick="handleVoltarConteudo()"
            @prosseguirClick="handleProsseguirConteudo()"
          />
        </div>

        <div class="w-full" v-if="treinamentoIsOver">
          <TreinamentoConfirmacao
            @voltarClick="restartTreinamento"
            @iniciarProvaClick="iniciarProvaClick"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import ButtonsVoltarProsseguir from "~/components/treinamento/ButtonsVoltarProsseguir.vue";
import TreinamentoVideo from "~/components/treinamento/TreinamentoVideo.vue";
import TreinamentoImagensSlider from "~/components/treinamento/TreinamentoImagensSlider.vue";
import mockTreinamentoData from "~/mocks/treinamento.json";

const route = useRoute();
const router = useRouter();
const routeParams = {
  id: route.params.id,
  slug: route.params.slug,
};

const treinamentoData = ref({});
const treinamentoIsStarted = ref(false);
const treinamentoIsOver = ref(false);
const currentIndexConteudo = ref(0);

onMounted(() => {
  treinamentoData.value = mockTreinamentoData;
});

const startTreinamento = () => {
  treinamentoIsStarted.value = true;
};

const handleVoltarConteudo = (lastCurrentIndexConteudo) => {
  if (lastCurrentIndexConteudo) {
    treinamentoIsOver.value = false;
    currentIndexConteudo.value = lastCurrentIndexConteudo;
    return;
  }

  currentIndexConteudo.value--;
  if (currentIndexConteudo.value < 0) {
    treinamentoIsStarted.value = false;
    currentIndexConteudo.value = 0;
  }
};

const handleProsseguirConteudo = () => {
  currentIndexConteudo.value++;
  if (
    currentIndexConteudo.value ==
    treinamentoData.value.conteudo_treinamento.length
  ) {
    treinamentoIsOver.value = true;
  }
};

const restartTreinamento = () => {
  treinamentoIsStarted.value = false;
  treinamentoIsOver.value = false;
  currentIndexConteudo.value = 0;
};

const iniciarProvaClick = () => {
  router.push({
    path: `quiz-${mockTreinamentoData.slug}-${mockTreinamentoData.id}`,
  });
};
</script>

<style></style>
