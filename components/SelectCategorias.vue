<template>
  <div class="__categoria-select">
    <el-select
      v-model="categoriaSelected.categoria"
      popper-class="__categoria-dropdown"
      no-match-text="Não encontrado"
      no-data-text="Sem dados"
      loading-text="..."
      @visible-change="handleSelectVisibleChange"
    >
      <template #prefix>
        <div
          class="flex justify-center items-center border-[3px] w-[50px] h-[50px] rounded-15 transition-all"
          :class="selectIsVisible ? 'border-tertiary' : 'border-primary'"
        >
          <IconFilter
            :size="25"
            :color="selectIsVisible ? '#424242' : '#fff'"
          />
        </div>
      </template>
      <el-option
        v-for="categoria in categoriasWithTodos"
        :key="categoria.id"
        :label="categoria.nome"
        :value="categoria.id"
        @click="handleSelectCategoria"
      >
        <div>
          <div class="categoria-option-content-wrapper">
            <span class="option-icon"></span>
            <span class="option-text">{{ categoria.nome }}</span>
          </div>

          <ul
            v-if="categoria.subCategorias && categoria.subCategorias.length > 0"
            class="__subcategorias"
          >
            <el-option
              v-for="subcategoria in categoria.subCategorias"
              :key="formatedSubcategoriaValue(categoria.id, subcategoria.id)"
              :label="subcategoria.nome"
              :value="formatedSubcategoriaValue(categoria.id, subcategoria.id)"
              class="__subcategoria"
              :class="{
                selected:
                  formatedSubcategoriaValue(categoria.id, subcategoria.id) ===
                  categoriaSelected.subcategoria,
              }"
              @click.stop="
                handleSelectSubcategoria(
                  categoria.id,
                  formatedSubcategoriaValue(categoria.id, subcategoria.id)
                )
              "
            >
              <div class="subcategoria-option-content-wrapper">
                <span class="subcategoria-option-icon"></span>
                <span class="subcategoria-option-text">
                  {{ subcategoria.nome }}
                </span>
              </div>
            </el-option>
          </ul>
        </div>
      </el-option>
    </el-select>
  </div>
</template>

<script setup>
import IconFilter from "./icons/IconFilter.vue";

const props = defineProps({
  loading: Boolean,
  categorias: {
    type: Array,
    default: [],
  },
});

const emit = defineEmits(["selected"]);
const categoriaSelected = ref({
  categoria: "",
  subcategoria: "",
});

const selectIsVisible = ref(false);
const categoriasWithTodos = computed(() => {
  let categoriasCopy = [...props.categorias];

  categoriasCopy.unshift({
    nome: "Todos",
    id: "",
  });

  return categoriasCopy;
});

function handleSelectCategoria(event) {
  categoriaSelected.value.subcategoria = "";
  emit("selected", formatedSelectedCategoria());
}

function handleSelectSubcategoria(categoriaValue, subcategoriaValue) {
  categoriaSelected.value = {
    categoria: categoriaValue,
    subcategoria: subcategoriaValue,
  };
  emit("selected", formatedSelectedCategoria());
}

function formatedSelectedCategoria() {
  if (categoriaSelected.value.subcategoria) {
    const parts = categoriaSelected.value.subcategoria.split("-");
    const subcategoriaNumber = Number(parts[1]);

    return {
      categoria: categoriaSelected.value.categoria,
      subcategoria: subcategoriaNumber,
    };
  } else {
    return categoriaSelected.value;
  }
}

function formatedSubcategoriaValue(idCategoria, idSubcategoria) {
  return `${idCategoria}-${idSubcategoria}`;
}

const handleSelectVisibleChange = (visible) => {
  selectIsVisible.value = visible;
};
</script>

<style>
.__categoria-select .el-select .el-select__prefix svg {
  transition: 200ms ease-in-out;
}
.__categoria-select:hover .el-select .el-select__prefix svg {
  scale: 1.07;
}
</style>
