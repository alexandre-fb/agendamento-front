<template>
  <div
    class="group w-full h-[150px] flex flex-col justify-center items-center relative px-3"
  >
    <div class="w-full h-full absolute top-0 left-0">
      <picture class="w-full h-full transition-transform duration-300">
        <source :srcset="img_mobile" media="(max-width: 768px)" />
        <img
          class="w-full h-full object-cover transition-transform duration-300"
          :src="img"
          :alt="alt"
        />
      </picture>
      <div class="__banner-component transition-transform duration-300"></div>
    </div>
    <div class="w-full flex justify-end max-w-container pt-[1px] md:pt-5">
      <div
        v-if="tag_data !== '' && tag_data !== null && tag_data"
        class="bg-tertiary rounded-15 py-1 px-2 flex justify-center items-center text-center min-w-24 relative"
      >
        <span class="font-bold text-sm text-primary flex gap-[6px]">
          {{ tag_data }} <icon-check-laranja />
        </span>
      </div>
    </div>
    <div
      class="max-w-container w-full h-full flex flex-col justify-end items-start pb-6 md:pb-7 z-10 gap-8 md:gap-1"
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
        class="text-primary font-semibold text-2xlg"
      >
        {{ title }}
      </h2>
    </div>
  </div>
</template>

<script>
import iconCheckLaranja from "./icons/iconCheckLaranja.vue";

export default {
  name: "SubBannerComponent",
  components: {
    iconCheckLaranja,
  },
  props: {
    img: String,
    img_mobile: String,
    alt: String,
    categoria: String,
    sub_categoria: String,
    title: String,
    tag_data: String,
  },
};
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
