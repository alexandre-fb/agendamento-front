<template>
  <SubBannerComponent
    :img="'/images/img-banner.webp'"
    :img_mobile="'/images/img-mobile-banner.webp'"
    :alt="'Img'"
    :categoria="'Categoria'"
    :sub_categoria="'Subicategoria'"
    :title="'Título do treinamento vai aqui'"
    :tag_data="'00/00/0000'"
  />
  <div class="w-full flex flex-col justify-center items-center ">
    <div
      class="w-full max-w-container flex flex-wrap justify-center items-center gap-5 py-[27px]"
    >
      <div class="flex flex-col justify-center items-center gap-3 px-3">
        <div class="flex justify-center items-center sm:gap-[21px] gap-3">
          <div
            class="max-w-[150px] flex flex-col justify-center items-center gap-[6px]"
          >
            <h3 class="text-primary-text text-base font-bold">
              Respostas Corretas:
            </h3>
            <div
              class="w-full min-w-[130px] h-[50px] border-[2.5px] border-primary rounded-15 text-center flex justify-center items-center"
            >
              <span class="font-semibold text-xlg text-secondary-text"
                >3/5</span
              >
            </div>
          </div>
          <div
            class="max-w-[150px] flex flex-col justify-center items-center gap-[6px]"
          >
            <h3 class="text-primary-text text-base font-bold">Tempo:</h3>
            <div
              class="w-full min-w-[130px] h-[50px] border-[2.5px] border-primary rounded-15 text-center flex justify-center items-center"
            >
              <span class="font-semibold text-xlg text-secondary-text"
                >03:10:00</span
              >
            </div>
          </div>
        </div>

        <div
          class="max-w-[150px] w-full flex flex-col justify-center items-center gap-[6px]"
        >
          <h3 class="text-primary-text text-base font-bold">Nota:</h3>
          <div
            class="w-full min-w-[130px] h-[50px] rounded-15 text-center flex justify-center items-center bg-tertiary"
          >
            <span class="font-semibold text-xlg text-tertiary-text">8.0</span>
          </div>
        </div>
      </div>
    </div>
    
    <div class="w-full max-w-[860px] justify-center flex flex-col">
      <h2 class="text-secondary-text font-semibold text-xlg pb-4 border-b-2 border-quaternary">Suas escolhas:</h2>
      <JustificativaRespostaItem 
      :pergunta="'Pergunta 1'"
      :titulo_pergunta="'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed ac nunc velit?'"
      :status_resposta="0"
      :resposta_correta="'Veja o treinamento novamente e tente acertar essa resposta.'"
      />
      <JustificativaRespostaItem 
      :pergunta="'Pergunta 1'"
      :titulo_pergunta="'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed ac nunc velit?'"
      :status_resposta="1"
      :resposta_correta="'resposta correta'"
      />
    </div>
    <div class="max-w-[860px] w-full py-6">
 
      <ButtonComponentnVoltar 
      :icon="iconVoltarBranco"
      :text="'Voltar'"
      :link="'/seus-treinamentos'" 
      />
    </div>
  </div>
</template>

<script>
import SubBannerComponent from "~/components/SubBannerComponent.vue";
import JustificativaRespostaItem from "~/components/JustificativaRespostaItem.vue";
import ButtonComponentnVoltar from "~/components/ButtonComponentVoltar.vue";

import iconVoltarBranco from '~/components/icons/iconVoltarBranco.vue';

export default {
  name: "seus-treinamentos-abertos",
  components: {
    SubBannerComponent,
    JustificativaRespostaItem,
    ButtonComponentnVoltar,
  },
  data() {
    return {
      iconVoltarBranco: iconVoltarBranco
    };
  },
};
</script>

<style></style>
