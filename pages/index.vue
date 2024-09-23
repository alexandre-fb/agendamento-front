<template>
  <div class="relative w-full flex flex-col items-center">
    <div class="w-full">
      <banner-home-component
        :img="'/images/img-banner.webp'"
        :img_mobile="'/images/img-mobile-banner.webp'"
        :alt="'Img'"
        :treinamento_concluido="true"
        :categoria="'Categoria'"
        :sub_categoria="'Sub-Categoria'"
        :title="'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'"
        :sub_title="'Lorem ipsum dolor sit amet, consectetur adipiscing elit morbi gravida erat ac porttitor efficitur. Vivamus mattis sapien ut purus mollis, at placerat ipsum interdum.'"
      />
    </div>
    <!-- Info Destaque da Home  -->
    <div
      class="absolute z-10 min-h-[100px] top-[350px] w-full flex justify-center px-3 sm:px-3"
    >
      <div class="w-full max-w-container">
        <NumerosDestaques />
      </div>
    </div>
  </div>
  <!-- Cards de treinamento Home  -->
  <div
    v-if="loadingTreinamentos"
    v-loading="loadingTreinamentos"
    element-loading-background="transparent"
    style="height: 480px"
  ></div>

  <div v-else>
    <div
      class="w-full flex justify-center px-3 w700:pt-24 pt-60"
      v-motion-slide-visible-once-top
    >
      <div class="__grid-container w-full max-w-container py-[27px]">
        <div
          v-for="item in treinamentos"
          :key="item.treinamento.id"
          class="block w-full"
          :class="treinamentos.length <= 2 ? 'max-w-[500px]' : ''"
        >
          <CardTreinamentoHome
            :data="item.treinamento"
            :categorias="item.categorias"
            :sub_categorias="item.subCategorias"
          />
        </div>
      </div>
    </div>

    <div class="w-full flex justify-center py-6 px-3">
      <div class="max-w-container w-full">
        <ButtonWithIcon icon="treinamento" text="Ver todos os treinamentos" link="/treinamentos" />
      </div>
    </div>
  </div>
</template>

<script setup>
import NumerosDestaques from "~/components/home/NumerosDestaques.vue";
import ButtonWithIcon from "~/components/ButtonWithIcon.vue";

const userStore = useUserStore();
const config = useRuntimeConfig();
const { baseApiUrl } = config.public;
const completeToken = "Bearer " + userStore.token;

const loadingTreinamentos = ref(false);
const treinamentos = ref([]);

onMounted(() => {
  fetchTreinamentos();
});

const fetchTreinamentos = async () => {
  try {
    loadingTreinamentos.value = true;

    const apiUrl = `${baseApiUrl}/treinamentos/listar`;
    const response = await $fetch(apiUrl, {
      method: "GET",
      headers: {
        Authorization: completeToken,
      },
    });

    treinamentos.value = response[0].data;
  } catch (error) {
    console.log("fetch treinamentos error", error);
  } finally {
    loadingTreinamentos.value = false;
  }
};
</script>

<style scoped>
.__grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(310px, 1fr));
  gap: 20px;
}

@media screen and (max-width: 700px) {
  .__linha-separacao {
    display: none;
  }
}

@media screen and (max-width: 360px) {
  .__grid-container {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  }
}
</style>
