<template>
  <div class="h-[148px] lg:h-auto">
    <div
      class="__header-bg relative z-50 flex justify-center w-full px-3 h-[90px] bg-transparent"
    >
      <nav
        class="relative flex items-center justify-between w-full max-w-container"
      >
        <!-- MENU and LOGO-->
        <div class="__menu-logo flex">
          <div class="absolute left-0">
            <!-- HAMBURGER -->
            <div
              class="menu__hamburger space-y-2 cursor-pointer border-2 p-2 rounded-2xl transition-all"
              :class="
                state.mainMenuIsOpen
                  ? 'hamburgerIsActive border-tertiary'
                  : 'border-primary'
              "
              @click.stop="toggleMenu"
            >
              <div
                class="w-[26px] h-[3px] rounded-sm transition-all"
                :class="state.mainMenuIsOpen ? 'bg-tertiary' : 'bg-primary'"
              ></div>
              <div
                class="w-[26px] h-[3px] bg-primary rounded-sm transition-all"
                :class="state.mainMenuIsOpen ? 'bg-tertiary' : 'bg-primary'"
              ></div>
              <div
                class="w-[26px] h-[3px] bg-primary rounded-sm transition-all"
                :class="state.mainMenuIsOpen ? 'bg-tertiary' : 'bg-primary'"
              ></div>
            </div>

            <!-- LINKS MOBILE -->
            <div
              id="header-links-mobile"
              class="absolute z-50 bg-primary w-56 left-0 top-14 p-7 rounded-[20px] text-right h-fit"
              v-motion-slide-left
              v-if="state.mainMenuIsOpen"
            >
              <ul class="flex flex-col gap-5">
                <li
                  class="group relative flex items-center gap-5 h-fit leading-initial"
                  v-for="(item, index) in state.menuItems"
                  :key="index"
                >
                  <NuxtLink :to="item.link">
                    <div
                      :href="item.link"
                      class="flex items-center gap-5 text-black"
                    >
                      <i
                        class="flex w-5 h-5 justify-center group-hover:scale-[1.15] transition-transform ease-in-out duration-300"
                        :class="item.icon === 'icon-play' ? 'w-4 h-4' : ''"
                      >
                        <component :is="item.icon" />
                      </i>
                      <span
                        class="text-secondary-text font-bold leading-none text-base group-hover:tertiary transition-all ease-in-out duration-300"
                      >
                        {{ item.label }}
                      </span>
                    </div>
                  </NuxtLink>
                </li>
              </ul>
            </div>
          </div>

          <!-- LOGO -->
          <div class="ml-16 flex-1 flex justify-center">
            <router-link to="/">
              <img src="/images/logo.svg" alt="EHS play" class="h-11" />
            </router-link>
          </div>
        </div>

        <!-- SEARCH BAR -->
        <div
          class="absolute top-[90px] left-1/2 -translate-x-1/2 w-full lg:max-w-[640px] lg:top-auto"
        >
          <SearchBar />
        </div>

        <!-- USER -->
        <div class="absolute flex items-center gap-4 right-0">
          <span class="hidden text-base font-bold text-primary lg:block"
            >Olá, Fulano!</span
          >
          <button
            class="w-[50px] h-[50px] cursor-pointer relative"
            @click.stop="toggleModalUserData"
          >
            <img
              :src="
                userStore.user.foto
                  ? userStore.user.foto
                  : './images/user_image_default.svg'
              "
              alt="Usuário"
              class="w-full h-full object-cover rounded-2xl"
            />
            <div
              class="absolute flex items-center justify-center -bottom-2 -left-2 p-2 min-w-[26px] h-5 bg-primary rounded-2xl"
            >
              <span class="font-bold text-tertiary-text text-base">
                {{ formatedNotifications ? formatedNotifications : 0 }}
              </span>
            </div>
          </button>
        </div>

        <!-- USER MODAL -->
        <div
          id="header-user-modal"
          class="absolute z-50 bg-primary w-full max-w-[220px] right-0 top-20 p-4 rounded-[20px] h-fit"
          v-motion-slide-right
          v-if="state.userMenuIsOpen"
        >
          <h3 class="text-xlg font-semibold mb-4 text-tertiary-text">
            Olá, {{ userStore.user.name }}
          </h3>

          <!-- pontuação -->
          <div class="flex flex-col items-center mb-5">
            <h4 class="mb-2 text-lg font-medium">Pontuação Total:</h4>
            <div
              class="flex justify-center items-center w-full py-3 rounded-15 bg-tertiary text-tertiary-text"
            >
              <!-- ATUALIZAR -->
              <span class="text-[18px] font-bold">
                {{ userStore.user.nota_media ? userStore.user.nota_media : 0 }}
              </span>
            </div>
          </div>

          <!-- links -->
          <ul class="flex flex-col gap-5">
            <li
              class="group relative flex items-center gap-5 h-fit leading-initial"
              v-for="(item, index) in state.userDataLinks"
              :key="index"
            >
              <NuxtLink :to="item.link" class="cursor-pointer">
                <div
                  class="__menu__link flex items-center gap-5 text-black"
                  @click="handleClickUserModalLinks(item.value)"
                >
                  <!-- notificacoes -->
                  <div
                    v-if="item.value === 'notificacoes'"
                    class="flex justify-center items-center w-5 h-4 rounded-20 group-hover:scale-[1.15] transition-transform ease-in-out duration-300 border-[2.5px] border-secondary"
                  >
                    <span
                      v-if="userStore.user.notificacoes_nao_lidas > 99"
                      class="text-[8px] font-bold text-tertiary-text"
                      >99+</span
                    >
                    <!-- ATUALIZAR -->
                    <span v-else class="text-[10px] text-tertiary-text">
                      {{ formatedNotifications ? formatedNotifications : 0 }}
                    </span>
                  </div>

                  <!-- outros icones -->
                  <i
                    v-else
                    class="flex w-5 h-5 justify-center group-hover:scale-[1.15] transition-transform ease-in-out duration-300"
                  >
                    <component :is="item.icon" />
                  </i>
                  <span
                    class="group-hover:text-tertiary font-bold transition-colors ease-in-out duration-300 text-base"
                  >
                    {{ item.label }}
                  </span>
                </div>
              </NuxtLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
import { onBeforeUnmount, reactive, computed, onBeforeMount } from "vue";
import { useRouter } from "vue-router";
import { useUserStore } from "~/stores/UserStore";
import { usePagesStore } from "~/stores/PagesStore";

import SearchBar from "../SearchBar.vue";

// icons
import IconEmpresa from "../icons/iconEmpresa.vue";
import IconInterrogacao from "../icons/IconInterrogacao.vue";
import IconChapeuFormatura from "../icons/IconChapeuFormatura.vue";
import IconDownload from "../icons/IconDownload.vue";
import IconGrafico from "../icons/IconGrafico.vue";
import IconContato from "../icons/IconContato.vue";
import IconUser from "../icons/IconUser.vue";
import IconCertificados from "../icons/IconCertificados.vue";
import IconSeusTreinamentos from "../icons/IconSeusTreinamentos.vue";
import IconSair from "../icons/IconSair.vue";

export default {
  name: "Header",
  components: {
    SearchBar,
    IconEmpresa,
    IconInterrogacao,
    IconChapeuFormatura,
    IconDownload,
    IconGrafico,
    IconContato,
    IconUser,
    IconCertificados,
    IconSeusTreinamentos,
    IconSair,
  },
  setup() {
    const state = reactive({
      menuItems: [
        {
          label: "Sobre a Empresa",
          value: "sobre",
          link: "/sobre",
          icon: "icon-empresa",
        },
        {
          label: "Como Funciona",
          value: "como-funciona",
          link: "/como-funciona",
          icon: "icon-interrogacao",
        },
        {
          label: "Treinamentos",
          value: "treinamentos",
          link: "/treinamentos",
          icon: "icon-chapeu-formatura",
        },
        {
          label: "Downloads",
          value: "downloads",
          link: "/downloads",
          icon: "icon-download",
        },
        {
          label: "Ranking",
          value: "ranking",
          link: "/ranking",
          icon: "icon-grafico",
        },
        {
          label: "Contato",
          value: "contato",
          link: "/contato",
          icon: "icon-contato",
        },
      ],
      userDataLinks: [
        {
          label: "Meu perfil",
          value: "perfil",
          link: "/perfil",
          icon: "icon-user",
        },
        {
          label: "Suas notificações",
          value: "notificacoes",
          link: "/notificacoes",
          icon: "",
        },
        {
          label: "Seus treinamentos",
          value: "seus-treinamentos",
          link: "/seus-treinamentos",
          icon: "icon-seus-treinamentos",
        },
        {
          label: "Seus certificados",
          value: "certificados",
          link: "/certificados",
          icon: "icon-certificados",
        },
        {
          label: "Sair",
          value: "sair",
          link: "",
          icon: "icon-sair",
        },
      ],
      mainMenuIsOpen: false,
      modalUserMenuIsOpen: false,
    });

    const userStore = useUserStore();
    const pagesStore = usePagesStore();

    const router = useRouter();

    onBeforeMount(() => {
      window.addEventListener("click", clickOutside);
    });

    onBeforeUnmount(() => {
      window.removeEventListener("click", clickOutside);
    });

    const formatedNotifications = computed(() => {
      if (userStore.user.notificacoes_nao_lidas > 99) {
        return "99+";
      } else {
        return userStore.user.notificacoes_nao_lidas;
      }
    });

    const handleSelectCategoria = (categoriaSelected) => {
      console.log("categoriaSelected", categoriaSelected);
    };

    const clickOutside = (event) => {
      if (event.target.id !== "header-links-mobile") {
        closeMenuMobile();
      }

      if (
        event.target.id !== "header-user-modal" &&
        !event.target.closest("#header-user-modal")
      ) {
        closeModalUserData();
      }
    };

    const toggleMenu = () => {
      state.mainMenuIsOpen = !state.mainMenuIsOpen;
      state.userMenuIsOpen = false;
    };

    const closeMenuMobile = () => {
      state.mainMenuIsOpen = false;
    };

    const toggleModalUserData = () => {
      state.userMenuIsOpen = !state.userMenuIsOpen;
      state.mainMenuIsOpen = false;
    };

    const closeModalUserData = () => {
      state.userMenuIsOpen = false;
    };

    const handleClickUserModalLinks = (linkValue) => {
      closeModalUserData();
      if (linkValue === "sair") {
        logout();
      }
    };

    const logout = () => {
      userStore.clear();
      pagesStore.clear();
      router.push({ path: "/login" });
    };

    return {
      state,
      userStore,
      toggleMenu,
      toggleModalUserData,
      closeModalUserData,
      handleClickUserModalLinks,
      formatedNotifications,
      handleSelectCategoria,
    };
  },
};
</script>

<style scoped>
.__menu-logo {
  @media screen and (max-width: 1024px) {
    width: calc(100% - 4rem);
  }
}

/*MENU HAMBURGER*/
.menu__hamburger > div {
  transition: 200ms ease-in-out;
}

.menu__hamburger.hamburgerIsActive :first-child {
  transform: rotate(-225deg);
  position: relative;
  top: 10px;
}

.menu__hamburger.hamburgerIsActive :nth-child(2) {
  opacity: 0;
}

.menu__hamburger.hamburgerIsActive :last-child {
  transform: rotate(45deg);
  position: relative;
  top: -10px;
}
</style>
