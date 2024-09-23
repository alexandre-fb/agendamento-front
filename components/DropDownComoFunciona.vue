<template>
  <div class="flex flex-col w-full justify-start items-center">
    <div ref="dropdown" v-if="showDropdown" class="dropdown w-full h-auto">
      <!-- titulo -->
      <div
        @click="toggleDropdown"
        :class="dropdownOpen ? 'dropdown-open' : 'dropdown-close'"
        class="h-[53px] w-full relative flex items-center justify-between border-[3px] border-primary px-4 text-center mb-[10px] rounded-15 cursor-pointer"
      >
        <p
          :class="dropdownOpen ? 'text-open' : 'text-close'"
          class="font-bold text-base text-primary-text"
        >
          {{ drop_titulo }}
        </p>
        <div
          class="transition-transform"
          :class="dropdownOpen ? 'rotate-0' : 'rotate-180'"
        >
          <icon-arrow-drop-down :color="dropdownOpen ? '#424242' : 'white'" />
        </div>
      </div>

      <!-- text -->
      <div class="flex flex-col gap-3">
        <template v-for="(duvida, index) in duvidas" :key="index">
          <div
            v-motion-slide-top
            @click="emitDuvidaSelecionada(duvida)"
            v-if="dropdownOpen"
            class="__duvida-titulo h-[53px] w-full flex items-center justify-between bg-primary shadow-lg px-4 rounded-15 cursor-pointer"
          >
            <p class="font-bold text-base text-secondary-text">
              {{ duvida.titulo }}
            </p>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup>
import IconArrowDropDown from "~/components/icons/IconArrowDropDown.vue";

const emit = defineEmits(['duvidaSelecionada'])

const props = defineProps({
  drop_titulo: {
    type: String,
  },
  duvidas: {
    type: Array,
  },
  text_item: {
    type: String,
  },
});

const dropdownOpen = ref(false);
const showDropdown = ref(true);

const toggleDropdown = () => {
  dropdownOpen.value = !dropdownOpen.value;
};

const emitDuvidaSelecionada = (duvida) => {
  emit('duvidaClicked', duvida)
  showDropdown.value = false;
};

</script>

<style>
.__duvida-titulo:last-of-type {
  margin-bottom: 20px;
}

.ref {
  display: none;
}

.dropdown-open {
  border: 3px solid #424242;
  color: #424242;
}

.text-open {
  color: #424242;
}

.seta-open {
  color: #424242;
}

.dropdown-close {
  color: white;
}

.text-close {
  color: white;
}

.seta-close {
  color: white;
}
</style>
