<template>
  <div class="w-full flex flex-col justify-center items-center gap-10 py-40">
    <h2 class="text-center font-semibold text-xlg text-secondary-text">
      {{ pergunta }}
    </h2>
    <div
      class="w-full flex flex-wrap gap-5 justify-center items-center pt-[38px] text-primary-text"
    >
      <RespostasTreinamentosImagemComponent
        v-for="(item, index) in respostas"
        :key="index"
        :img="item.img"
        :alternativa="item.alternativa"
        :alt="item.alt"
      />
    </div>
  </div>
  <p class="font-bold text-base text-secondary-text">
    Instruções: Escolha uma das opções.
  </p>
</template>

<script>
import RespostasTreinamentosImagemComponent from "./RespostasTreinamentoImagemComponent.vue";

export default {
  name: "TreinamentoImagem",
  props: {
    pergunta: String,
  },
  components: {
    RespostasTreinamentosImagemComponent,
  },
  data() {
    return {
      respostas: [
        { img: "/images/imgCardRespostas.svg", alternativa: "A", alt: "alt" },
        { img: "/images/imgCardRespostas.svg", alternativa: "B", alt: "alt" },
        { img: "/images/imgCardRespostas.svg", alternativa: "C", alt: "alt" },
        { img: "/images/imgCardRespostas.svg", alternativa: "D", alt: "alt" },
      ],
    };
  },
};
</script>

<style></style>
