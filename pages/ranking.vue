<template>
  <div class="w-full flex flex-col justify-center items-start py-[10px]">
    <BannerPage slug="ranking" />

    <div class="w-full">
      <FilterBarRanking
        @filterChange="handleFilterChange"
      />
    </div>

    <div class="w-full">
      <!-- lista top 3 -->
      <div
        class="w-full flex items-end pt-12 w644:pt-24 pb-[40px] gap-[10px] sm:gap-[35px] justify-center"
      >
        <RankingTop3
          :dataRanking="rankingTopThree"
          :posicaoUsuario="rankingUsuario.posicao_usuario"
        />
      </div>

      <!-- lista do 4 até o 10 -->
      <div
        class="w-full flex flex-col items-center gap-[10px] justify-center px-3"
      >
        <RankingSemTop3
          :dataRankingList="rankingWithoutTopThree"
          :posicaoUsuario="rankingUsuario.posicao_usuario"
        />
      </div>

      <!-- se usuario tiver fora do top 10 -->
      <div
        v-if="rankingUsuario.posicao_usuario > 10"
        class="w-full flex flex-col items-center gap-[10px] justify-center px-3 my-3"
      >
        <div
          v-if="rankingUsuario.posicao_usuario > 11"
          class="flex flex-col gap-1"
        >
          <span
            v-for="bolinha in 3"
            :key="bolinha"
            class="block w-1 h-1 rounded-full bg-primary"
          ></span>
        </div>
        <RankingUsuario :dataRankingUsuario="rankingUsuario" />
      </div>
    </div>
    <div class="relative flex justify-center w-full z-10 py-7">
      <el-pagination
        layout="prev, pager, next"
        :total="paginationData.totalDownloadsCount"
        :page-size="paginationData.perPageRankingCount"
        hide-on-single-page
        :current-page="currentPageRanking"
        @current-change="handleChangePage"
      />
    </div>
  </div>
</template>

<script setup>
import FilterBarRanking from "./../components/FilterBar/FilterBarRanking.vue";
import rankingDataMock from "~/mocks/ranking.json";
import RankingTop3 from "./../components/ranking/RankingTop3.vue";
import RankingSemTop3 from "./../components/ranking/RankingSemTop3.vue";
import RankingUsuario from "./../components/ranking/RankingUsuario.vue";

const userStore = useUserStore();
const config = useRuntimeConfig();
const { baseApiUrl } = config.public;
const completeToken = "Bearer " + userStore.token;

const rankingData = ref([]);
const rankingUsuario = ref({});
const rankingTopThree = ref([]);
const rankingWithoutTopThree = ref([]);

const loadingRanking = ref(false);

// filtro 
const filterData = ref({
  unidade: null,
  setor: null,
  todos: false,
});

const currentPageRanking = ref(1);

const paginationData = ref({
  totalPages: 0,
  totalDownloadsCount: 0,
  perPageRankingCount: 0,
});

onMounted(() => {
  fetchRanking();
  setRankingsArrays();
});

const fetchRanking = () => {
  try {
    loadingRanking.value = true;
    rankingData.value = rankingDataMock;

    paginationData.value = {
      totalPages: 3,
      totalDownloadsCount: 18,
      perPageRankingCount: 6,
    };
  } catch (error) {
    console.log("error fetch ranking", error);
  } finally {
    loadingRanking.value = false;
  }
};

const setRankingsArrays = () => {
  rankingTopThree.value = rankingData.value.ranking_top_10.slice(0, 3);
  rankingWithoutTopThree.value = rankingData.value.ranking_top_10.slice(3, 10);
  rankingUsuario.value = rankingData.value.ranking_usuario;
};

const handleFilterChange = (updatedFilterData) => {
  console.log("updatedFilterData", updatedFilterData);
  currentPageRanking.value = 1;
  filterData.value = updatedFilterData
  fetchRanking();
};

const handleChangePage = (currentPage) => {
  currentPageRanking.value = currentPage;
  fetchRanking();

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
</script>

<style></style>
