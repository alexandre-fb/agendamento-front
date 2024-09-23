<template>
  <div
    class="flex flex-col items-center gap-5 w-full max-w-[970px] flex-1 mx-auto"
  >
    <div class="flex flex-col items-center gap-4 flex-1">
      <h2 v-if="data.titulo" class="text-2xlg font-bold">{{ data.titulo }}</h2>
      <p v-if="data.descricao">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
        obcaecati quam ducimus tenetur omnis odio, veritatis libero ut eaque
        vero. Aliquid et corrupti architecto rerum dolorem vitae dolorum
        consequuntur ullam.
      </p>
      <div v-loading="loadDelay" v-if="loadDelay" element-loading-background="transparent" class="h-32 w-full"></div>
      <div class="__treinamento-slider w-full h-full py-5 px-3">
        <carousel
          ref="imgSlider"
          :items-to-show="1"
          @slide-start="handleSlideChange"
        >
          <slide v-for="(imagem, index) in data.imagens" :key="index">
            <div class="max-h-[544px]">
              <picture class="w-full h-auto">
                <source
                  :srcset="
                    imagem.img_mobile ? imagem.img_mobile : imagem.img_desk
                  "
                  media="(max-width: 768px)"
                />
                <img
                  class="w-full object-contain"
                  :srcset="imagem.img_desk"
                  :alt="imagem.alt_imagem"
                  @load="onImageLoad"
                  @error="onImageLoad"
                />
              </picture>
            </div>
          </slide>
        </carousel>
      </div>

      <!-- botoes -->
      <div class="flex justify-center items-center gap-4">
        <button
          @click="prevSlide"
          class="flex items-center justify-center w-[50px] h-[50px] border-[3px] border-primary rounded-15 -rotate-90"
          :class="currentSlide === 1 ? 'opacity-50 cursor-not-allowed' : ''"
        >
          <IconArrowDropDown />
        </button>
        <span
          class="flex justify-center items-center rounded-15 border-[3px] border-primary p-3 min-w-20 font-bold"
          >{{ currentSlide }} / {{ data.imagens.length }}</span
        >
        <button
          @click="nextSlide"
          class="flex items-center justify-center w-[50px] h-[50px] border-[3px] border-primary rounded-15 rotate-90"
          :class="
            currentSlide === data.imagens.length
              ? 'opacity-50 cursor-not-allowed'
              : ''
          "
        >
          <IconArrowDropDown />
        </button>
      </div>
    </div>
    <!-- instruçoes -->
    <div class="mb-4">
      <p class="text-center font-bold text-base">
        Instruções: Leia e passe os slides até o fim do treinamento.
      </p>
    </div>
  </div>
</template>

<script setup>
import IconArrowDropDown from "~/components/icons/IconArrowDropDown.vue";

const props = defineProps({
  data: {
    type: Object,
    default: {
      titulo: "",
      descricao: "",
      imagens: [],
    },
  },
});

const imgSlider = ref(null);
const currentSlide = ref(1);
const loadDelay = ref(true);

const onImageLoad = () => {
  loadDelay.value = false;
};

const handleSlideChange = (slider) => {
  currentSlide.value = slider.slidingToIndex + 1;
};

const prevSlide = () => {
  imgSlider.value.prev();
};

const nextSlide = () => {
  imgSlider.value.next();
};
</script>

<style>
.__treinamento-slider .carousel__slide {
  width: 100%;
  height: 100%;
  max-height: 544px;
}
.__treinamento-slider .carousel__prev,
.__treinamento-slider .carousel__next {
  top: initial;
  bottom: -80px;
  transform: initial;
  width: 50px;
  height: 50px;
  border: 3px solid #fff;
  border-radius: 15px;
}

.__treinamento-slider .carousel__prev svg,
.__treinamento-slider .carousel__next svg {
  fill: #fff;
}

.__treinamento-slider .carousel__prev {
  left: 20%;
}

.__treinamento-slider .carousel__next {
  right: 20%;
}
</style>
