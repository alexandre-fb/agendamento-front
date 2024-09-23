<template>
  <NuxtLink to="/seus-treinamentos-aberto">
    <div
      class="group flex flex-col justify-between items-stretch relative px-[10px] pt-[10] pb-[14px] rounded-15 min-h-[160px] h-full bg-secondary bg-opacity-15"
    >
      <div
        class="w-full h-full absolute top-0 left-0 rounded-15 overflow-hidden"
      >
        <img
          class="w-full h-full object-cover rounded-15 group-hover:scale-105 transition-transform duration-300"
          :src="data.imagem"
          :alt="data.imagem_alt"
          @load="handleImageLoad"
        />
        <div class="__card-sombra"></div>
      </div>
      <div class="w-full flex justify-end pt-[10px]">
        <div
          v-if="data.data_conclusao"
          class="bg-tertiary rounded-15 py-1 px-2 flex justify-center items-center text-center min-w-24 relative"
        >
          <span class="font-bold text-sm text-primary flex gap-[6px]">
            {{ data.data_conclusao }} <icon-check-laranja />
          </span>
        </div>
      </div>
      <div
        class="w-full h-full flex flex-col justify-end items-start z-10 gap-1"
      >
        <div
          v-if="categorias.length > 0"
          class="flex items-center gap-2 bg-secondary rounded-15 px-2 py-1 text-primary font-bold text-sm"
        >
          <h4 class="font-bold text-sm">
            {{ categorias[0].nome }}
            <span
              v-if="
                sub_categorias.length > 0"
              >/</span
            >
            {{ sub_categorias[0].nome }}
          </h4>
        </div>
        <h2
          v-if="data.titulo"
          class="text-primary font-semibold text-2xlg"
        >
          {{ data.titulo }}
        </h2>
        <button class="flex items-center gap-[5px] cursor-pointer">
          <iconPlayLaranja />
          <span class="text-base font-bold text-primary-text">
            Ver Detalhes
          </span>
        </button>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup>
import iconCheckLaranja from "./icons/iconCheckLaranja.vue";
import iconPlayLaranja from "./icons/iconPlayLaranja.vue";

const props = defineProps({
    data: Object,
    categorias: Array,
    sub_categorias: Array,
  })

</script>

<style scoped>
.__card-sombra {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 78px;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8));
  z-index: 1;
  border-radius: 0 0 15px 15px;
}
</style>
