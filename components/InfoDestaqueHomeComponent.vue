<template>
  <div
    class="min-h-[100px] sm:max-w-[320px] max-w-[200px] flex flex-col justify-between items-center text-center px-3"
  >
    <div class="h-[33px] w-[33px]">
      <img class="w-full h-full object-cover" :src="icon" :alt="alt" />
    </div>
    <p class="text-center text-secondary-text text-xlg font-semibold">
      {{ valor }}
    </p>
    <p class=" __clamp-2 text-center text-secondary-text text-lg font-medium">
      {{ valor_descricao }}
    </p>
  </div>
</template>

<script>
export default {
  name: "InfoDestaqueHomeComponent",
  props: {
    icon: {
      type: String,
    },
    alt: {
      type: String,
    },
    valor: {
      type: String,
    },
    valor_descricao: {
      type: String,
    },
  },
};
</script>

<style scooped>
.__clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
