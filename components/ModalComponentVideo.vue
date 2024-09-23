<!-- ModalComponent.vue -->
<template>
    <div v-if="visible" class="modal flex justify-center items-center bg-tertiary bg-opacity-75">
      <div class="modal-content w-full h-full flex flex-col justify-center items-center gap-7">
        <div class="video-container w-full max-w-[1300px] h-screen max-h-[300px] w400:max-h-[275px] md:max-h-[565px] lg:max-h-[732px]">
          <VideoPlayer class="max-w-full" :link="videoLink" />
        </div>
        <p class="text-primary text-sm font-bold relative top-8 lg:top-10 md:hidden">Vire o smartphone para melhor visualização.</p>
        <div class="relative top-4 lg:top-10">
          <ButtonAuth :text="buttonText" @click="closeModal" />
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import VideoPlayer from '~/components/VideoPlayer.vue';
  import ButtonAuth from '~/components/auth/ButtonAuth.vue';
  
  const props = defineProps({
    visible: {
      type: Boolean,
      required: true,
    },
    videoLink: {
      type: String,
      required: true,
    },
    buttonText: {
      type: String,
      default: 'Pular',
    },
  });
  
  const emit = defineEmits(['close']);
  
  const closeModal = () => {
    emit('close');
  };
  </script>
  
  <style scoped>
  .modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .modal-content {
    padding: 20px;
    border-radius: 10px;
    text-align: center;
  }
  </style>
  