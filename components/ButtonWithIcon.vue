<template>
  <!-- se nao tiver link -->
  <button
    v-if="!link"
    class="group flex gap-[10px] align-center justify-start w-fit"
    @click="handleClick"
  >
    <div
      class="h-[50px] flex justify-center items-center border-[3px] border-primary px-3 rounded-15 cursor-pointer"
    >
      <i class="group-hover:scale-110 transition">
        <IconChapeuFormatura :color="iconColor" v-if="icon === 'treinamento'" />
        <IconLike :color="iconColor" v-if="icon === 'like'" />
        <IconDeslike :color="iconColor" v-if="icon === 'deslike'" />
        <IconCasa :color="iconColor" v-if="icon === 'home'" />
        <IconArrowDropDown :color="iconColor" v-if="icon === 'voltar'" class="-rotate-90" />
      </i>
    </div>
    <div
      class="h-[50px] flex justify-center items-center border-[3px] border-primary px-6 rounded-15 cursor-pointer"
    >
      <p
        class="min-w-20 font-bold text-base text-primary-text group-hover:scale-105 transition"
      >
        {{ text }}
      </p>
    </div>
  </button>

  <!-- se tiver link -->
  <NuxtLink
    v-else
    :to="link"
    class="group flex gap-[10px] align-center justify-start w-fit"
  >
    <div
      class="h-[50px] flex justify-center items-center border-[3px] border-primary px-3 rounded-15 cursor-pointer"
    >
      <i class="group-hover:scale-110 transition">
        <IconChapeuFormatura :color="iconColor" v-if="icon === 'treinamento'" />
        <IconLike :color="iconColor" v-if="icon === 'like'" />
        <IconDeslike :color="iconColor" v-if="icon === 'deslike'" />
        <IconCasa :color="iconColor" v-if="icon === 'home'" />
        <IconArrowDropDown :color="iconColor" v-if="icon === 'voltar'" class="-rotate-90" />
      </i>
    </div>

    <div
      class="h-[50px] flex justify-center items-center border-[3px] border-primary px-6 rounded-15 cursor-pointer"
    >
      <p
        class="min-w-20 font-bold text-base text-primary-text group-hover:scale-105 transition"
      >
        {{ text }}
      </p>
    </div>
  </NuxtLink>
</template>

<script setup>
import IconChapeuFormatura from "./icons/IconChapeuFormatura.vue";
import IconLike from "./icons/IconLike.vue";
import IconDeslike from "./icons/IconDeslike.vue";
import IconCasa from "./icons/iconCasa.vue";
import IconArrowDropDown from "./icons/IconArrowDropDown.vue";

const emit = defineEmits(["clicked"]);
const props = defineProps({
  icon: {
    type: String,
  },
  text: {
    type: String,
  },
  link: {
    type: String,
  },
  iconColor: {
    type: String,
    default: "#fff",
  },
});

const handleClick = () => {
  emit("clicked");
};
</script>

<style></style>
