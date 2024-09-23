<template>
  <div
    class="w-full max-w-[755px] flex flex-col justify-center items-center flex-1 gap-10 py-5"
  >
    <h2 class="text-center font-semibold text-xlg text-secondary-text">
      {{ pergunta.titulo }}
    </h2>
    <div
      class="w-full flex flex-wrap gap-x-10 gap-y-5 justify-center items-center text-primary-text"
    >
      <ButtonWithIcon
        icon="like"
        text="SIM"
        alt="sim"
        @clicked="emitResposta(1)"
      />
      <ButtonWithIcon
        icon="deslike"
        text="NÃO"
        alt="não"
        @clicked="emitResposta(0)"
      />
    </div>
  </div>
  <p class="font-bold text-base text-secondary-text">
    Instruções: Escolha uma das opções.
  </p>
</template>

<script setup>
const emit = defineEmits(['responderPergunta'])

const props = defineProps({
  pergunta: Object,
});

const emitResposta = (resposta) => {
  emit("responderPergunta", {
    idPergunta: props.pergunta.id,
    idResposta: resposta,
  });
}
</script>

<style></style>
