<template>
    <div
      class="w-full flex flex-col justify-center items-center gap-5 py-5"
    >
      <h2 class="text-center font-semibold text-xlg text-secondary-text">
        {{ pergunta }}
      </h2>
      <div
        class="w-full flex flex-wrap gap-5 justify-center items-center text-primary-text"
      >
        <RespostasTreinamentoAudioComponent 
        :alternativa="'A'" :alt="'alt'"/>
      </div>
    </div>
    <p class="font-bold text-base text-secondary-text">Instruções: Escolha uma das opções.</p>
  </template>
  
  <script>
 
  import RespostasTreinamentoAudioComponent  from "./RespostasTreinamentoAudioComponent.vue"
  
  export default {
    name: "TreinamentoVideo",
    props: {
      pergunta: String,
    },
    components: {
        RespostasTreinamentoAudioComponent ,
    },
    data() {
      return {
   
      };
    },
  };
  </script>
  
  <style></style>
  