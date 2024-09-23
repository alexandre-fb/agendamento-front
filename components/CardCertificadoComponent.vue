<template>
  <div 
    @click="openModal" 
    class="w-full min-h-[90px] flex cursor-pointer"
  >
    <div class="flex align-center justify-center p-2 bg-secondary rounded-l-15">
      <img 
      class="h-full object-contain"
      :src="icon" :alt="alt_img" />
    </div>

    <div class="w-full flex flex-col justify-center items-start py-5 pl-[9px] pr-[2px] bg-tertiary rounded-r-15">
      <p class="font-medium text-base text-primary">
        {{ maestria_certificado }}
      </p>
      <p class="font-medium text-sm text-primary">
        {{ conquista }}
      </p>
      <p class="font-bold text-sm text-tertiary-text">Conquistado em {{ data }}</p>
    </div>
  </div>
  <ModalComponent
    v-if="modalOpen"
    @close="closeModal"
    :icon="icon"
    :img="img"
    :alt_img="alt_img"
    :nome="nome"
    :maestria_certificado="maestria_certificado"
    :conquista="conquista"
    :data="data"
  />
</template>

<script setup>
import { ref } from 'vue';
import ModalComponent from '~/components/ModalComponent.vue';

// Props
defineProps({
  icon: String,
  img: String,
  titulo_treinamento: String,
  maestria_certificado: String,
  conquista: String,
  nome: String,
  data: String
});

// Data
const modalOpen = ref(false);

// Methods
const openModal = () => {
  modalOpen.value = true;
};

const closeModal = () => {
  modalOpen.value = false;
};
</script>

<style scoped></style>
