<template>
  <div
    class="flex flex-wrap gap-2 justify-center mx-auto w-full max-w-[714px] px-3 py-9"
  >
    <div class="flex-1 basis-24">
      <ButtonFilter
        :active="todosIsClicked ? true : false"
        text="Todos"
        @clicked="handleTodosClick"
      />
    </div>
    <div class="flex-1 basis-24">
      <SelectDefault
        placeholder="Unidade"
        :options="unidades"
        :clearSelected="todosIsClicked"
        @selected="handleSelectUnidade"
        :loading="loadingUnidades"
      />
    </div>
    <div class="flex-1 basis-24">
      <SelectDefault
        placeholder="Setor"
        :options="setores"
        :clearSelected="todosIsClicked"
        @selected="handleSelectSetor"
        :loading="loadingSetores"
      />
    </div>
  </div>
</template>

<script setup>
import unidadesDataMock from "~/mocks/unidades.json";
import setoresDataMock from "~/mocks/setores.json";

import ButtonFilter from "./ButtonFilter.vue";
import SelectDefault from "./SelectDefault.vue";

const emit = defineEmits(["filterChange"]);

const todosIsClicked = ref(true);
const unidadeSelected = ref(null);
const setorSelected = ref(null);

const valuesSelected = ref({
  unidade: null,
  setor: null,
  todos: false,
});

const unidades = ref([])
const loadingUnidades = ref(false)
const setores = ref([])
const loadingSetores = ref(false)

onMounted(() => {
  fetchUnidades()
  fetchSetores()
})

const fetchUnidades = async () => {
  try {
    loadingUnidades.value = true;

    // const apiUrl = `${baseApiUrl}/categorias`;

    // const response = await $fetch(apiUrl, {
    //   method: "GET",
    //   headers: {
    //     Authorization: completeToken,
    //   },
    // });

    // unidades.value = response[0];
    unidades.value = unidadesDataMock;
  } catch (error) {
    console.log("fetch unidades error", error);
  } finally {
    loadingUnidades.value = false;
  }
};

const fetchSetores = async () => {
  try {
    loadingSetores.value = true;

    // const apiUrl = `${baseApiUrl}/categorias`;

    // const response = await $fetch(apiUrl, {
    //   method: "GET",
    //   headers: {
    //     Authorization: completeToken,
    //   },
    // });

    // unidades.value = response[0];
    setores.value = setoresDataMock;
    console.log('setoresDataMock', setoresDataMock)
  } catch (error) {
    console.log("fetch setores error", error);
  } finally {
    loadingSetores.value = false;
  }
};

const handleSelectUnidade = (unidadeId) => {
  unidadeSelected.value = unidadeId;
  todosIsClicked.value = false;
  updateValuesSelected();
  emit("filterChange", valuesSelected.value);
};

const handleSelectSetor = (setorId) => {
  setorSelected.value = setorId;
  todosIsClicked.value = false;
  updateValuesSelected();
  emit("filterChange", valuesSelected.value);
};

const handleTodosClick = () => {
  if (todosIsClicked.value === true) {
    return;
  }

  todosIsClicked.value = true;
  setorSelected.value = null;
  unidadeSelected.value = null;
  updateValuesSelected();
  emit("filterChange", valuesSelected.value);
};

const updateValuesSelected = () => {
  valuesSelected.value = {
    unidade: unidadeSelected.value,
    setor: setorSelected.value,
    todos: todosIsClicked.value,
  };
};
</script>
