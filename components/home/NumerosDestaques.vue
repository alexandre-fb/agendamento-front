<template>
  <ul
    class="h-auto w-full max-w-container bg-primary rounded-15 flex flex-wrap items-evenly py-[14px] shadow-xl shadow-black w700:flex-nowrap"
  >
    <li
      v-for="(destaque, index) in destaquesData"
      :key="index"
      class="group relative min-h-[100px] basis-1/2 w700:w-1/4 flex-1 flex items-center"
    >
      <div
        class="flex flex-col justify-between items-center w-full text-center p-3"
      >
        <div class="h-[33px] w-[33px] flex items-center justify-center group-hover:scale-105 transition">
          <component
            :is="destaque.icon"
            :size="destaque.iconSize"
            color="#F5821F"
          />
        </div>
        <p class="text-center text-secondary-text text-xlg font-semibold">
          {{ destaque.value ? destaque.value : 0 }}
        </p>
        <p
          class="text-center text-secondary-text text-lg font-medium max-w-[128px] w700:max-w-none"
        >
          {{ destaque.label }}
        </p>
      </div>

      <!-- divisor -->
      <div
        class="absolute -right-[2px] w-[1px] border border-tertiary h-[65px]"
        :class="{
          'hidden': index === 3,
          'hidden w700:block': index === 1
        }"
      ></div>
    </li>
  </ul>
</template>

<script setup>
import { ref } from "vue";
import IconChapeuFormatura from "../icons/IconChapeuFormatura.vue";
import IconCheck from "../icons/IconCheck.vue";
import IconSmile from "../icons/IconSmile.vue";
import IconGrafico from "../icons/IconGrafico.vue";

const iconChapeuFormatura = shallowRef(IconChapeuFormatura);
const iconCheck = shallowRef(IconCheck);
const iconSmile = shallowRef(IconSmile);
const iconGrafico = shallowRef(IconGrafico);

const userStore = useUserStore();

const destaquesData = ref([
  {
    label: "Treinamentos disponíveis",
    value: userStore.user.treinamentos_disponiveis,
    icon: iconChapeuFormatura,
    iconSize: 40,
  },
  {
    label: "Treinamentos realizados",
    value: userStore.user.treinamentos_realizados,
    icon: iconCheck,
    iconSize: 30,
  },
  {
    label: "É sua nota média",
    value: userStore.user.nota_media,
    icon: iconSmile,
    iconSize: 30,
  },
  {
    label: "Posição no ranking geral",
    value: userStore.user.posicao_ranking,
    icon: iconGrafico,
    iconSize: 34,
  },
]);
</script>
<style scoped></style>
