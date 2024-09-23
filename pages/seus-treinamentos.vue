<template>
  <BannerPage slug="seus-treinamentos" />

  <!-- filtros -->
  <div>
    <FilterBar
      @filterClick="handleFilterClick"
      @selectCategoria="handleSelectCategoria"
    />
  </div>

  <!-- treinamentos -->
  <div
    v-if="loadingTreinamentos"
    v-loading="loadingTreinamentos"
    element-loading-background="transparent"
    style="position: static !important; height: 100vh"
  ></div>
  <div v-else>
    <div
      class="w-full flex justify-center px-3"
      v-motion-slide-visible-once-top
    >
      <div v-if="treinamentos.length === 0">
        <h2 class="text-primary font-semibold text-xlg p-6">
          A categoria selecionada não possui treinamentos.
        </h2>
      </div>
      <div v-else class="__grid-container w-full max-w-container">
        <div
          v-for="item in treinamentos"
          :key="item.treinamento.id"
          class="block w-full"
          :class="treinamentos.length <= 2 ? 'max-w-[500px]' : ''"
        >
          <CardSeusTreinamentos
            :data="item.treinamento"
            :categorias="item.categorias"
            :sub_categorias="item.subCategorias"
          />
        </div>
      </div>
    </div>
    <div class="relative z-10 flex justify-center py-7">
      <el-pagination
        layout="prev, pager, next"
        :total="paginationData.totalTreinamentosCount"
        :page-size="paginationData.perPageTreinamentosCount"
        hide-on-single-page
        :current-page="currentPageTreinamentos"
        @current-change="handleChangePage"
      />
    </div>
  </div>
</template>

<script setup>
import SubBannerComponent from "~/components/SubBannerComponent.vue";
import FilterBar from "~/components/FilterBar/FilterBar.vue";
import CardSeusTreinamentos from "~/components/CardSeusTreinamentos.vue";

const userStore = useUserStore();
const config = useRuntimeConfig();
const { baseApiUrl } = config.public;
const completeToken = "Bearer " + userStore.token;

const paginationData = ref({
  totalPages: 0,
  totalTreinamentosCount: 0,
  perPageTreinamentosCount: 0,
});

const loadingTreinamentos = ref(false);
const treinamentos = ref([]);
const currentPageTreinamentos = ref(1);
const categoriaSelected = ref({
  categoria: "",
  subcategoria: "",
});
const filterSelected = ref("");

onMounted(() => {
  fetchTreinamentos();
});

const fetchTreinamentos = async () => {
  try {
    loadingTreinamentos.value = true;

    const apiUrl = `${baseApiUrl}/treinamentos/listar?&filter[categoria_id]=${categoriaSelected.value.categoria}&filter[subCategoria_id]=${categoriaSelected.value.subcategoria}&page=${currentPageTreinamentos.value}`;

    const response = await $fetch(apiUrl, {
      method: "GET",
      headers: {
        Authorization: completeToken,
      },
    });

    console.log("response", response);

    treinamentos.value = response[0].data;
    paginationData.value = {
      totalPages: response[0].last_page,
      totalTreinamentosCount: response[0].total,
      perPageTreinamentosCount: response[0].per_page,
    };
    console.log("paginationData.value", paginationData.value);

    console.log("treinamentos.value", treinamentos.value);
  } catch (error) {
    console.log("fetch treinamentos error", error);
  } finally {
    loadingTreinamentos.value = false;
  }
};

const handleChangePage = (currentPage) => {
  currentPageTreinamentos.value = currentPage;
  fetchTreinamentos();

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const handleFilterClick = (filter) => {
  currentPageTreinamentos.value = 1;
  filterSelected.value = filter;

  if (filterSelected.value === "recentes") {
    console.log("Recentes");
  }

  if (filterSelected.value === "todos") {
    console.log("TODOS");
  }

  fetchTreinamentos();
};

const handleSelectCategoria = (categoria) => {
  currentPageTreinamentos.value = 1;
  filterSelected.value = "";
  categoriaSelected.value = categoria;
  fetchTreinamentos();
};
</script>

<style scoped>
.__grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(310px, 1fr));
  gap: 20px;
}

@media screen and (max-width: 360px) {
  .__grid-container {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  }
}
</style>
