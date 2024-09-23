<template>
  <div
    v-loading="loading"
    class="group w-full h-[150px] flex flex-col justify-center items-center relative px-3"
  >
    <div class="w-full h-full absolute top-0 left-0">
      <picture class="w-full h-full transition-transform duration-300">
        <source
          :srcset="
            bannerData.imagem_banner_mobile
              ? bannerData.imagem_banner_mobile
              : bannerData.imagem_banner
          "
          media="(max-width: 768px)"
        />
        <img
          class="w-full h-full object-cover transition-transform duration-300"
          :src="bannerData.imagem_banner"
          :alt="bannerData.alt_imagem_banner"
        />
      </picture>
      <div class="__banner-component transition-transform duration-300"></div>
    </div>
    <div
      class="max-w-container w-full h-full flex flex-col justify-end items-start pb-6 md:pb-7 z-10 gap-8 md:gap-1"
    >
      <h2
        v-if="bannerData.titulo_pagina"
        class="text-primary font-semibold text-2xlg"
      >
        {{ bannerData.titulo_pagina }}
      </h2>
    </div>
  </div>
</template>

<script setup>
import iconCheckLaranja from "./icons/iconCheckLaranja.vue";
const pagesStore = usePagesStore();
const config = useRuntimeConfig();
const { baseApiUrl } = config.public;

const userStore = useUserStore();
const completeToken = "Bearer " + userStore.token;

const props = defineProps({
  slug: {
    type: String,
    require: true,
  },
});

const loading = ref(false);
const bannerData = ref({});

onMounted(() => {
  console.log("pagesStore.banners", pagesStore);
  const currentBanner = pagesStore.banners.filter((banner) => {
    return banner.slug === props.slug;
  });

  bannerData.value = currentBanner[0]
});
</script>

<style scoped>
.__banner-component {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8));
  z-index: 1;
}
</style>
