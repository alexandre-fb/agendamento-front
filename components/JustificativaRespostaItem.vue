<template>
  <div class="flex flex-col w-full gap-4 align-baseline justify-center">
    <div class="flex flex-col pt-[17px] pb-4 border-b-2 border-quaternary">
      <div class="flex gap-[2px] px-[6px]">
        <h3 class="font-bold text-base text-primary-text">
          {{ pergunta }}
          <span
            v-if="
              titulo_pergunta !== '' &&
              titulo_pergunta !== null &&
              titulo_pergunta
            "
            >: </span
          >
          <span
            v-if="pergunta !== '' && pergunta !== null && pergunta"
            class="font-medium text-base text-secondary-text"
          >
            {{ titulo_pergunta }}
          </span>
        </h3>
      </div>

      <div class="flex flex-col gap-[5px] items-start px-[6px]">
        <div
          :class="[
            {
              'bg-correct': status_resposta === 1,
              'bg-error': status_resposta === 0,
            },
            'h-[22px] flex justify-center items-center rounded-[10px] px-2',
          ]"
        >
          <span class="font-bold text-sm text-primary-text">{{
            status_resposta === 1 ? "Resposta Correta:" : "Resposta Errada:"
          }}</span>
        </div>
        <p
          v-if="status_resposta === 1"
          class="font-medium text-base text-secondary-text"
        >
          {{ resposta_correta }}
        </p>
        <p v-else class="font-medium text-base text-secondary-text">
          Veja o treinamento novamente e tente acertar essa resposta.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NotificationItem",
  props: {
    pergunta: {
      type: String,
    },
    titulo_pergunta: {
      type: String,
    },
    status_resposta: {
      type: Number,
      required: true,
    },
    resposta_correta: {
      type: String,
    },
  },
};
</script>
