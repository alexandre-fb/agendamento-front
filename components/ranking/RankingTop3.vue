<template>
  <div
    class="relative flex flex-col justify-end transition-transform hover:scale-[1.018] cursor-default"
    v-for="(item, index) in formatedDataRanking"
    :key="item.id"
    :class="index === 1 ? 'firstRankingItem' : ''"
  >
    <div
      class="absolute h-[22px] w-full flex justify-center items-center"
      :class="
        index === 1
          ? 'sm:-top-[90px] -top-[40px]'
          : 'sm:-top-[100px] -top-[70px]'
      "
    >
      <h2 class="text-xlg font-semibold text-primary-text" v-if="index === 1">
        1
      </h2>
      <h2 class="text-xlg font-semibold text-primary-text" v-if="index === 0">
        2
      </h2>
      <h2 class="text-xlg font-semibold text-primary-text" v-if="index === 2">
        3
      </h2>
    </div>
    <div
      class="relative flex flex-col items-center justify-end h-[255px] w-[97px] sm:w-[130px] rounded-20"
      :class="index === formatedPosicaoUsuario ? 'bg-secondary' : 'bg-primary'"
    >
      <div
        class="absolute -top-[13%] sm:-top-[26%] w-[97px] h-[97px] sm:w-[130px] sm:h-[130px] rounded-full border-[2.5px] border-primary bg-cover bg-center"
        :style="{
          'background-image': `url(${
            item.foto
              ? item.foto
              : 'http://localhost:3000/images/user-small.webp'
          })`,
        }"
        :class="index === 1 ? 'firstRankingImage' : ''"
      ></div>

      <div
        class="h-full flex flex-col justify-center items-center text-center w-full"
        :class="'firstRankingConteudo'"
      >
        <div class="min-h-[36px] flex items-center">
          <h2
            class="__max-lines-name leading-tight text-base font-bold text-secondary-text"
          >
            {{ item.primeiro_nome }}
          </h2>
        </div>
        <div
          class="w-full border-y-[1px] py-[7px]"
          :class="
            index === formatedPosicaoUsuario
              ? 'border-primary'
              : 'border-secondary'
          "
        >
          <span
            class="text-sm font-bold __max-lines-description"
            :class="
              index === formatedPosicaoUsuario
                ? 'text-primary-text'
                : 'text-tertiary-text'
            "
          >
            {{ item.unidade_nome }}
          </span>
          <span
            class="text-sm font-bold __max-lines-description"
            :class="
              index === formatedPosicaoUsuario
                ? 'text-primary-text'
                : 'text-tertiary-text'
            "
          >
            {{ item.setor_nome }}
          </span>
        </div>
        <div class="py-[7px]">
          <h2 class="text-lg font-medium text-secondary-text">
            {{ formatQuantityMaxPoint(item.pontos) }}
          </h2>
          <h2
            class="text-sm font-bold"
            :class="
              index === formatedPosicaoUsuario
                ? 'text-primary-text'
                : 'text-tertiary-text'
            "
          >
            Treinamentos <br />
            Realizados
          </h2>
        </div>
        <div class="bg-tertiary w-full rounded-b-15 py-1">
          <h3
            class="__max-lines-description text-xlg font-semibold text-tertiary-text leading-tight"
          >
            {{ item.nota }}
          </h3>
          <span class="text-sm font-bold text-primary __max-lines-description">
            Nota Média
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  dataRanking: Array,
  posicaoUsuario: Number,
});

onMounted(() => {
  console.log("formatedPosicaoUsuario", formatedPosicaoUsuario.value);
});

//para corresponder ao index do v-for
const formatedPosicaoUsuario = computed(() => {
  switch (props.posicaoUsuario) {
    case 1:
      return 1;
    case 2:
      return 0;
    case 3:
      return 2;
  }
});

const formatedDataRanking = computed(() => {
  switch (props.dataRanking.length) {
    case 3:
      return [props.dataRanking[1], props.dataRanking[0], props.dataRanking[2]];
    case 2:
      return [props.dataRanking[1], props.dataRanking[0]];
    case 1:
      return [props.dataRanking[0]];
    default:
      return [];
  }
});

const formatQuantityMaxPoint = (number) => {
  if (number) {
    return number > 9999 ? "9999+" : number.toString();
  } else {
    return "0";
  }
};
</script>

<style scoop>
.firstRankingItem {
  height: 295px;
  gap: 40px;
}

.firstRankinConteudo {
  position: relative;
}

.firstRankingImage {
  height: 156px;
  width: 156px;
  top: -37%;
  z-index: 99;
}

.firstRankingConteudo {
  justify-content: end;
}

.__max-lines-name {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.__max-lines-description {
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

@media screen and (max-width: 640px) {
  .firstRankingItem {
    gap: 20px;
  }

  .firstRankingImage {
    height: 112px;
    width: 112px;
    top: -18%;
  }
}

@media screen and (max-width: 340px) {
  .firstRankinConteudo {
    width: 85px;
  }
}

@media screen and (max-width: 340px) {
  .firstRankingImage {
    top: -16% !important;
  }
}
</style>
