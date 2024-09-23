<template>
  <NuxtLink :to="`treinamento-${ data.slug }-${ data.id }`">
    <div
      class="group min-h-[310px] h-full flex flex-col justify-between items-center relative px-[10px] pb-[14px] rounded-15"
    >
      <div
        class="w-full h-full absolute top-0 left-0 overflow-hidden rounded-15"
      >
        <img class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" :src="data.imagem" :alt="data.imagem_alt" />

        <div class="__card-sombra"></div>
      </div>
      <div class="w-full flex justify-end max-w-container pt-[1px] md:pt-5">
        <div
          v-if="data.data_conclusao"
          class="flex justify-end items-center text-center min-w-5 relative pt-[21px] pr-1"
        >
          <div 
          v-if="data.data_conclusao"
          class="icon-container">
            <icon-check-branco />
            <div class="icon-hover">{{ data.data_conclusao }}</div>
          </div>
        </div>
      </div>
      <div
        class="w-full h-full max-w-container flex flex-col justify-end items-start z-10 gap-1 pb-3 px-4"
      >
        <div
          v-if="categorias && categorias.length > 0"
          class="flex items-center gap-2 bg-secondary rounded-15 px-2 py-1 text-primary font-bold text-sm"
        >
          <h4 class="font-bold text-sm">
            {{ categorias[0].nome }}
            <span v-if="sub_categorias.length > 0">/</span>
            {{ sub_categorias[0].nome }}
          </h4>
        </div>
        <h2
          v-if="data.titulo"
          class="text-primary font-semibold text-xlg sm:text-2xlg"
        >
          {{ data.titulo }}
        </h2>
        <p class="__clamp-2 text-primary font-medium text-lg">
          {{ data.descricao }}
        </p>
        <button class="flex items-center gap-[5px] cursor-pointer">
          <icon-chapeu-formatura />
          <span class="text-base font-bold text-primary-text">
            Iniciar Treinamento
          </span>
        </button>
      </div>
    </div>
  </NuxtLink>
</template>

<script>
import iconCheckBranco from "./icons/iconCheckBranco.vue";
import IconChapeuFormatura from "./icons/IconChapeuFormatura.vue";

export default {
  name: "CardTreinamentoHome",
  components: {
    iconCheckBranco,
    IconChapeuFormatura,
  },
  props: {
    data: Object,
    categorias: Array,
    sub_categorias: Array,
  },
};
</script>

<style scoped>
.__card-sombra {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8));
  z-index: 1;
}

.__clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

.icon-container {
  position: relative;
  display: inline-block;
  z-index: 9999;
}

.icon-hover {
  visibility: hidden;
  background-color: #555;
  color: #fff;
  text-align: center;
  padding: 5px 5px;
  border-radius: 6px;
  
  position: absolute;
  z-index: 1;
  top: 25px; 
  left: 50%;
  margin-left: -80px; 
  
  opacity: 0;
  transition: opacity 0.3s;
}

.icon-container:hover .icon-hover {
  visibility: visible;
  opacity: 1;
}

</style>
