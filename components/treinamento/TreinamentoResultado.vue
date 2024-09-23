<template>
  <div class="w-full flex flex-col justify-center items-center pt-[94px]">
    <p class="font-semibold text-xlg text-secondary-text pb-2">
      Você completou a prova.
    </p>
    <div class="w-full flex flex-wrap justify-center items-center gap-[10px]">
      <div class="w-[150px] flex flex-col justify-center items-center">
        <p class="font-bold text-base text-primary-text pb-[5px]">
          Respostas Corretas:
        </p>
        <div
          class="w-full h-[50px] border-[3px] border-primary flex justify-center items-center rounded-15"
        >
          <p class="font-semibold text-xlg text-secondary-text">
            {{ data.respostas_corretas }}/{{ data.respostas_total }}
          </p>
        </div>
      </div>
      <div class="w-[150px] flex flex-col justify-center items-center">
        <p class="font-bold text-base text-primary-text pb-[5px]">Tempo:</p>
        <div
          class="w-full h-[50px] border-[3px] border-primary flex justify-center items-center rounded-15"
        >
          <p class="font-semibold text-xlg text-secondary-text">
            {{ formatTimeCronometro(timeInSeconds) }}
          </p>
        </div>
      </div>
    </div>

    <div
      class="w-[78px] flex flex-col justify-center items-center mt-[13px] mb-7"
    >
      <p class="font-bold text-base text-primary-text pb-[5px]">Nota:</p>
      <div
        class="w-full h-[50px] px-2 flex justify-center items-center rounded-15 bg-tertiary"
      >
        <p class="font-semibold text-xlg text-tertiary-text">{{ data.nota }}</p>
      </div>
    </div>

    <ButtonWithIcon icon="home" text="Voltar para Home" link="/" />
  </div>
</template>

<script setup>
const props = defineProps({
  data: Object,
  timeInSeconds: Number
});

const formatTimeCronometro = (totalSegundos) => {
  const horas = Math.floor(totalSegundos / 3600);
  const minutos = Math.floor((totalSegundos % 3600) / 60);
  const segundosRestantes = totalSegundos % 60;

  const horasFormatadas = String(horas).padStart(2, "0");
  const minutosFormatados = String(minutos).padStart(2, "0");
  const segundosFormatados = String(segundosRestantes).padStart(2, "0");

  return `${horasFormatadas}:${minutosFormatados}:${segundosFormatados}`;
};
</script>
