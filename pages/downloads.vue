<template>
  <div class="w-full flex flex-col justify-center items-start py-[10px]">
    <BannerPage slug="downloads" />
    <div class="w-full">
      <FilterBar
        :categorias="categorias"
        :loading="loadingCategorias"
        @filterClick="handleFilterClick"
        @selectCategoria="handleSelectCategoria"
      />
    </div>

    <div
      v-if="loadingDownloads"
      v-loading="loadingDownloads"
      element-loading-background="transparent"
      class="w-full h-56"
    ></div>
    <div v-else class="w-full flex justify-center px-3">
      <div
        class="w-full max-w-container flex flex-wrap gap-[22px] pt-[22px] justify-center"
      >
        <template
          v-for="(download, index) in downloadsData.downloads"
          :key="index"
        >
          <CardDownloads
            :categoria="download.categoria_nome"
            :sub_categoria="download.subcategoria_nome"
            :title="download.titulo"
            :text="download.descricao"
            :texto_formato="download.tipo_arquivo"
            :link_arquivo="download.link_arquivo"
          />
        </template>
      </div>
    </div>
    <div class="relative flex justify-center w-full z-10 py-7">
      <el-pagination
        layout="prev, pager, next"
        :total="paginationData.totalDownloadsCount"
        :page-size="paginationData.perPageDownloadsCount"
        hide-on-single-page
        :current-page="currentPageDownloads"
        @current-change="handleChangePage"
      />
    </div>
  </div>
</template>

<script setup>
import downloadsData from "~/mocks/downloads.json";

const userStore = useUserStore();
const config = useRuntimeConfig();
const { baseApiUrl } = config.public;
const completeToken = "Bearer " + userStore.token;

const loadingDownloads = ref(false);
const categorias = ref([]);
const loadingCategorias = ref(false);
const categoriaSelected = ref({
  categoria: "",
  subcategoria: "",
});
const filterSelected = ref("");

const currentPageDownloads = ref(1);

const paginationData = ref({
  totalPages: 0,
  totalDownloadsCount: 0,
  perPageDownloadsCount: 0,
});

const data = ref();

onMounted(() => {
  fetchCategorias();
  fetchDownloads();
  console.log("data", data.value);
});

const fetchCategorias = async () => {
  try {
    loadingCategorias.value = true;

    const apiUrl = `${baseApiUrl}/categorias`;

    const response = await $fetch(apiUrl, {
      method: "GET",
      headers: {
        Authorization: completeToken,
      },
    });

    categorias.value = response[0];
  } catch (error) {
    console.log("fetch categorias error", error);
  } finally {
    loadingCategorias.value = false;
  }
};

const fetchDownloads = () => {
  try {
    loadingDownloads.value = true;
    data.value = downloadsData;

    paginationData.value = {
      totalPages: 3,
      totalDownloadsCount: 18,
      perPageDownloadsCount: 6,
    };
  } catch (error) {
    console.log("error", error);
  } finally {
    loadingDownloads.value = false;
  }
};

const handleChangePage = (currentPage) => {
  currentPageDownloads.value = currentPage;
  fetchDownloads();

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const handleFilterClick = (filter) => {
  currentPageDownloads.value = 1;
  filterSelected.value = filter;

  if (filterSelected.value === "recentes") {
    console.log("==Recentes");
  }

  if (filterSelected.value === "todos") {
    console.log("==TODOS");
  }

  fetchDownloads();
};

const handleSelectCategoria = (categoria) => {
  console.log("categoria", categoria);
  currentPageDownloads.value = 1;
  filterSelected.value = "";
  categoriaSelected.value = categoria;
  fetchDownloads();
};
</script>

<style></style>
