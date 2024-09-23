<template>
  <button
    class="group flex flex-col justify-center items-center gap-[10px] cursor-pointer"
  >
    <div
      class="w644:w-[150px] w644:h-[150px] h-[199px] w-[199px] border-[3px] border-primary flex justify-center items-center rounded-15 overflow-hidden"
    >
      <img class="h-full w-full object-cover group-hover:scale-105 transition" :src="img" :alt="alt">
    </div>

    <div
      class="h-[50px] w-[50px] border-[3px] border-primary flex justify-center items-center rounded-15 px-3 py-2"
    >
    <p class="font-semibold text-xlg text-primary-text text-center group-hover:scale-110 transition">
      {{ alternativa }}
    </p>
    </div>
  </button>

</template>

<script>
export default {
  name: "RespostasTreinamentoImagemComponent",
  props: {
    img: String,
    alt: String,
    alternativa: String,
  },
};
</script>

<style></style>
