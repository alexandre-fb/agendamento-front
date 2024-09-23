<template>
  <div class="w-full flex flex-col justify-center items-center py-[10px]">
    <BannerPage slug="como-funciona" />

    <!-- text -->
    <div
      v-if="!detalheIsOpen"
      class="pt-7 pb-5 w-full max-w-[924px] px-3 text-left"
    >
      <h2 class="text-secondary-text text-xlg font-semibold mb-2">
        Entenda como essa plataforma funciona
      </h2>
      <h3 class="text-primary-text text-lg">
        Selecione o assunto ao qual a sua dúvida se refere, para ver a resposta,
        basta clicar na pergunta.
      </h3>
    </div>

    <div
      v-if="!detalheIsOpen"
      class="w-full max-w-[924px] px-3 flex flex-col gap-3"
    >
      <template v-for="(duvida, index) in data.duvidas" :key="index">
        <drop-down-como-funciona
          :drop_titulo="duvida.categoria_duvida"
          :duvidas="duvida.duvidas_detalhes"
          :text_item="'texto drop down selecionado'"
          @duvidaClicked="mostrarDetalhe"
        />
      </template>
    </div>

    <!-- detalhe -->
    <div class="w-full max-w-[924px] px-3 flex flex-col">
      <div v-if="detalheIsOpen" class="w-full h-auto max-w-[858px] px-3 py-7">
        <div
          class="h-[53px] w-full flex items-center justify-between bg-primary shadow-lg px-4 mb-[10px] rounded-15"
        >
          <h2 class="font-bold text-base text-secondary-text">
            {{ detalheAtivoContent.titulo }}
          </h2>
        </div>

        <div class="py-6">
          <p>{{ detalheAtivoContent.descricao }}</p>
        </div>

        <ButtonWithIcon
          icon="voltar"
          :text="'Voltar'"
          @click="handleBackClick"
        />

        <!-- <button-component-voltar
        :icon="iconVoltarBranco"
        :text="'Voltar'"
        :link="''"
        @click="handleBackClick"
      /> -->
      </div>
    </div>
  </div>
</template>

<script setup>
import ButtonWithIcon from "./../../components/ButtonWithIcon.vue";
import comoFuncionaData from "~/mocks/como_funciona.json";

const data = ref({});

const detalheIsOpen = ref(false);
const detalheAtivoContent = ref({});

onMounted(() => {
  console.log("comoFuncionaData", comoFuncionaData);
  data.value = comoFuncionaData.item;
  console.log("data.value", data.value);
});

const mostrarDetalhe = (duvida) => {
  detalheIsOpen.value = true;
  detalheAtivoContent.value = duvida;
  console.log("a duvida selecionada é", duvida);
};

const handleBackClick = () => {
  detalheIsOpen.value = false;
  showDropdown.value = true;
  detalheAtivoContent.value = {};
};
</script>

<style></style>
