<template>
  <BannerPage slug="seus-certificados" />
  <div class="w-full">
    <FilterBar
      :categorias="categorias"
      :loading="loadingCategorias"
      @filterClick="handleFilterClick"
      @selectCategoria="handleSelectCategoria"
    />
  </div>
  <div class="w-full flex flex-col justify-center items-center px-3">
    <div
      v-if="loadingCertificados"
      v-loading="loadingCertificados"
      element-loading-background="transparent"
      class="w-full h-56"
    ></div>
    <div
      v-else
       class="__grid-container w-full max-w-container py-7"
    >
      <CardCertificadoComponent
        v-for="(certificado, index) in certificadosData.certificados"
        :key="index"
        :icon="certificado.icon_certificado"
        :maestria_certificado="certificado.maestria_certificado"
        :conquista="certificado.conquista"
        :data="certificado.data"
        :img="certificado.img"
        :alt_img="certificado.alt_img"
        :nome="certificado.nome"
      />
    </div>
    <div class="relative flex justify-center w-full z-10 py-7">
      <el-pagination
        layout="prev, pager, next"
        :total="paginationData.totalCertificadosCount"
        :page-size="paginationData.perPageCertificadosCount"
        hide-on-single-page
        :current-page="currentPageCertificados"
        @current-change="handleChangePage"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import SubBannerComponent from "~/components/SubBannerComponent.vue";
import CardCertificadoComponent from "~/components/CardCertificadoComponent.vue";
import certificadosDataMock from "~/mocks/certificados.json";

const loadingCertificados = ref(false);
const categorias = ref([]);
const loadingCategorias = ref(false);
const categoriaSelected = ref({
  categoria: "",
  subcategoria: "",
});

const filterSelected = ref("");

const currentPageCertificados = ref(1);

const paginationData = ref({
  totalPages: 0,
  totalCertificadosCount: 0,
  perPageCertificadosCount: 0,
});

const certificadosData = ref({});

onMounted(() => {
  fetchCertificados();
  fetchCategorias();
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

const fetchCertificados = () => {
  try {
    loadingCertificados.value = true;
    certificadosData.value = certificadosDataMock;
    console.log('certificadosData.value-->', certificadosData.value)

    paginationData.value = {
      totalPages: 3,
      totalCertificadosCount: 18,
      perPageCertificadosCount: 6,
    };
  } catch (error) {
    console.log("error", error);
  } finally {
    loadingCertificados.value = false;
  }
};

const handleChangePage = (currentPage) => {
  currentPageCertificados.value = currentPage;
  fetchCertificados();

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const handleFilterClick = (filter) => {
  currentPageCertificados.value = 1;
  filterSelected.value = filter;

  if (filterSelected.value === "recentes") {
    console.log("==Recentes");
  }

  if (filterSelected.value === "todos") {
    console.log("==TODOS");
  }

  fetchCertificados();
};

const handleSelectCategoria = (categoria) => {
  console.log("categoria", categoria);
  currentPageCertificados.value = 1;
  filterSelected.value = "";
  categoriaSelected.value = categoria;
  fetchCertificados();
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
    grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));
  }
}
</style>
