<template>
  <div
    class="flex-1 basis-[440px] min-h-[170px] flex flex-col justify-center items-center bg-primary rounded-15 py-[14px] pr-[16px] pl-[19px]"
  >
    <div class="w-full h-full flex flex-col justify-start items-start gap-1">
      <div class="w-full flex justify-between items-center">
        <div
          v-if="categoria !== '' && categoria !== null && categoria"
          class="flex items-center gap-2 bg-secondary rounded-15 px-2 py-1 h-[22px] text-primary-text"
        >
          <h4 class="font-bold text-sm">
            {{ categoria }}
            <span>/</span>
            {{ sub_categoria }}
          </h4>
        </div>

        <div class="w-[35px] h-[35px] relative">
          <icon-formato-arquivo-download />
          <p
            class="absolute bottom-0 font-bold text-sm text-tertiary-text-text uppercase left-1/2 transform -translate-x-1/2"
          >
            {{ texto_formato }}
          </p>
        </div>
      </div>

      <h2 class="text-tertiary font-semibold text-xlg">
        {{ title }}
      </h2>
      <div class="flex-1 w-full">
        <p class="font-medium text-lg text-tertiary-text">
          {{ text }}
        </p>
      </div>
      <div class="flex gap-[5px] cursor-pointer pt-[10px]">
        <icon-download-treinamento />
        <a
          :href="link_arquivo"
          download
          target="_blank"
          class="text-base font-bold text-secondary-text"
          >Download</a
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import iconFormatoArquivoDownload from "./icons/iconFormatoArquivoDownload.vue";
import iconDownloadTreinamento from "./icons/IconDownloadTreinamento.vue";

const props = defineProps({
  categoria: String,
  sub_categoria: String,
  title: String,
  text: String,
  tag_data: String,
  texto_formato: String,
  link_arquivo: String,
});
</script>

<style scoped>
.__clamp-1 {
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
.__clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
