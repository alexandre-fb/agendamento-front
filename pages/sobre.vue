<template>
  <div
    v-loading="loading"
    v-if="loading"
    class="w-full h-48"
    element-loading-background="transparent"
  ></div>
  <div
    v-else
    v-motion-fade-visible-once
    class="w-full flex flex-col justify-center items-center py-[10px]"
  >
    <BannerPage slug="sobre-a-empresa" />

    <div
      class="max-w-[858px] flex flex-col justify-center items-center py-[38px] px-3 gap-3"
    >
      <!-- titulo -->
      <div class="w-full flex flex-col gap-2">
        <h2 class="text-xlg font-semibold text-secondary-text">
          Lorem Ipsum mamet
        </h2>
        <!-- subtitulo -->
        <h3 class="text-lg font-medium text-primary-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </h3>
      </div>

      <!-- RECEBER CONTEUDO FEITO NO EDITOR -->
      <div class="w-full flex flex-col">
        <div class="w-full flex flex-col">
          <p class="text-base font-medium text-secondary-text">
            {{ data.texto }}
          </p>
        </div>

        <div class="py-6 w-full h-full object-cover">
          <picture class="w-full h-full">
            <img
              class="w-full h-full object-cover"
              :src="data.imagem_destaque"
              :alt="data.imagem_destaque_alt"
            />
          </picture>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const config = useRuntimeConfig();
const { baseApiUrl } = config.public;

const userStore = useUserStore();
const completeToken = "Bearer " + userStore.token;

const data = ref({});
const loading = ref(false);

onMounted(() => {
  fetchData();
  console.log("complete token", completeToken);
});

const fetchData = async () => {
  try {
    loading.value = true;

    const apiUrl = `${baseApiUrl}/empresa`;
    const response = await $fetch(apiUrl, {
      method: "GET",
      headers: {
        Authorization: completeToken,
      },
    });

    data.value = response[0];
  } catch (error) {
    console.log("fetch error empresa", error);
  } finally {
    loading.value = false;
  }
};
</script>

<style></style>
