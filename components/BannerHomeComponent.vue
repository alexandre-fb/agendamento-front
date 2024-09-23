<template>
  <NuxtLink to="/seus-treinamentos-aberto">
    <div
      class="group w-full h-[400px] flex flex-col justify-center items-center relative px-[10px] pt-[10] pb-[14px] "
    >
      <div
        class="w-full h-full absolute top-0 left-0 overflow-hidden "
      >
        <picture class="w-full h-full ">
          <source :srcset="img_mobile" media="(max-width: 768px)" />
          <img class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" :src="img" :alt="alt" />
        </picture>
        <div class="__banner-sombra"></div>
      </div>
      <div class="w-full flex justify-end max-w-container pt-[1px] md:pt-5">
        <div
          v-if="treinamento_concluido"
          class=" flex justify-end items-center text-center min-w-5 relative pt-[21px] pr-1"
        >
          <icon-check-branco :treinamento_concluido="treinamento_concluido" />
        </div>
      </div>
      <div
        class="w-full h-full max-w-container flex flex-col justify-end items-start z-10 gap-1 pb-[80px] px-10 sm:px-0"
      >
        <div
          v-if="categoria !== '' && categoria !== null && categoria"
          class="flex items-center gap-2 bg-secondary rounded-15 px-2 py-1 text-primary font-bold text-sm"
        >
          <h4 class="font-bold text-sm">
            {{ categoria }}
            <span
              v-if="
                sub_categoria !== '' && sub_categoria !== null && sub_categoria
              "
              >/</span
            >
            {{ sub_categoria }}
          </h4>
        </div>
        <h2
          v-if="title !== '' && title !== null && title"
          class="text-primary font-semibold text-xlg sm:text-2xlg"
        >
          {{ title }}
        </h2>
        <p class="__clamp-2 text-primary font-medium text-lg">
          {{ sub_title }}
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
import iconCheckBranco from  "./icons/iconCheckBranco.vue";
import IconChapeuFormatura from "./icons/IconChapeuFormatura.vue";

export default {
  name: "SubBannerComponent",
  components: {
    iconCheckBranco,
    IconChapeuFormatura,
  },
  props: {
    img: String,
    img_mobile: String,
    alt: String,
    categoria: String,
    sub_categoria: String,
    title: String,
    sub_title: String,
    treinamento_concluido: {
      type: Boolean,
      default: false
    }
  },
};
</script>

<style scoped>
.__banner-sombra {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 314px;
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
</style>
    