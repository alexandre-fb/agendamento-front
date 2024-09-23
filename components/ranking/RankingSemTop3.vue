<template>
  <div
    class="flex w-full h-[65px] max-w-[860px] bg-primary justify-between transition-transform hover:scale-[1.007] cursor-default rounded-15"
    v-for="(item, index) in dataRankingList"
    :key="item.id"
    :class="index === formatedPosicaoUsuario ? 'bg-secondary' : 'bg-primary'"
  >
    <!-- imagem -->
    <div class="flex w-full items-center justify-start">
      <div
        class="h-full min-w-[65px] w-[65px] rounded-15 border-[2px] bg-cover bg-center shadow-sm shadow-black"
        :class="
          index === formatedPosicaoUsuario
            ? 'border-secondary'
            : 'border-primary'
        "
        :style="{
          'background-image': `url(${
            item.foto
              ? item.foto
              : 'https://planmkt.com.br/clientes/amcor/front-gamificacao-2023/images/user_image_default.svg'
          })`,
        }"
      ></div>

      <!-- nome e setor -->
      <div
        class="px-[10px] h-full flex sm:flex-row flex-col justify-between sm:justify-center items-start w-[164px] sm:w-full"
      >
        <div class="flex flex-col w-full justify-center">
          <h2
            class="text-base font-bold text-secondary-text __max-lines-message w-full"
          >
            {{ `${index + 4} -  ${item.primeiro_nome}` }}
          </h2>
          <span
            class="text-sm font-bold"
            :class="
              index === formatedPosicaoUsuario
                ? 'text-primary-text'
                : 'text-tertiary-text'
            "
          >
            {{ item.setor_nome }}
          </span>
          <span
            class="text-sm font-bold"
            :class="
              index === formatedPosicaoUsuario
                ? 'text-primary-text'
                : 'text-tertiary-text'
            "
          >
            {{ item.unidade_nome }}
          </span>
        </div>

        <!-- treinamentos realizados -->
        <div
          class="w-full min-w-44 sm:min-w-[109px] h-full flex flex-row sm:flex-col justify-start sm:justify-center items-center sm:w-[106px] sm:border-l-[1px] sm:gap-0 gap-[5px]"
          :class="
            index === formatedPosicaoUsuario
              ? 'sm:border-primary'
              : 'sm:border-secondary'
          "
        >
          <h2
            class="sm:text-lg text-sm sm:font-medium font-bold text-secondary-text"
          >
            {{ formatQuantityMaxPoint(item.pontos) }}
          </h2>
          <h2
            class="text-sm font-bold text-center"
            :class="
              index === formatedPosicaoUsuario
                ? 'text-primary-text'
                : 'text-tertiary-text'
            "
          >
            Treinamentos Realizados
          </h2>
        </div>
      </div>
    </div>
    <div
      class="h-full flex flex-col justify-center items-center min-w-[52px] sm:min-w-[89px] bg-tertiary rounded-r-15"
    >
      <h3
        class="text-xlg font-semibold text-tertiary-text __max-lines-description"
      >
        {{ item.nota }}
      </h3>
      <h3 class="text-sm font-bold text-primary text-center">Nota Média</h3>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  dataRankingList: Array,
  posicaoUsuario: Number,
});

const formatedPosicaoUsuario = computed(() => {
  return props.posicaoUsuario - 4;
});

onMounted(() => {
  console.log("formatedPosicaoUsuario ranking", formatedPosicaoUsuario.value);
});

const formatQuantityMaxPoint = (number) => {
  // Verifica se o número é maior que 99 e adiciona o "+" se for verdadeiro
  if (number) {
    return number > 9999 ? "9999+" : number.toString();
  } else {
    return "0";
  }
};
</script>

<style>
.__max-lines-message {
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
