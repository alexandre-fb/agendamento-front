<template>
  <div class="w-full flex flex-col justify-center items-center py-[10px]">
    <BannerPage slug="meu-perfil" />

    <div
      class="max-w-[460px] flex flex-col justify-center items-center py-[38px] px-3"
    >
      <div class="w-full flex justify-center items-center">
        <div class="flex pl-10 gap-[21px]">
          <div
            class="w-[130px] sm:w-[200px] h-[130px] sm:h-[200px] rounded-[19px] border-[3px] border-primary"
          >
            <img
              class="w-full h-full object-cover rounded-15"
              :src="
                userStore.user.foto
                  ? userStore.user.foto
                  : './images/user_image_default.svg'
              "
              alt="alt_img"
            />
          </div>
          <div class="w-[40px] h-[40px] rounded-15 cursor-pointer">
            <NuxtLink to="/minha-foto">
              <icon-editar-perfil />
            </NuxtLink>
          </div>
        </div>
      </div>

      <div
        class="max-w-[450px] flex flex-wrap pt-[21px] gap-[25px] justify-center items-center"
      >
        <div
          class="w-full flex flex-wrap justify-center items-center gap-[21px]"
        >
          <informacao-perfil-componet
            :label="'Nome'"
            :value="`${userStore.user.name}`"
          />
          <informacao-perfil-componet
            :label="'Matrícula'"
            :value="
              userStore.user.matricula
                ? userStore.user.matricula
                : 'Sem matrícula'
            "
          />
        </div>

        <div
          class="w-full flex flex-wrap justify-center items-center gap-[21px]"
        >
          <informacao-perfil-componet
            :label="'Unidade'"
            :value="userStore.user.unidade_nome ? userStore.user.unidade_nome :  'Sem unidade'"

          />
          <informacao-perfil-componet
            :label="'Setor'"
            :value="userStore.user.setor_nome ? userStore.user.setor_nome : 'Sem setor'"


          />
        </div>

        <div
          class="w-full flex flex-wrap justify-center items-center gap-[21px]"
        >
          <div
            class="w-[200px] flex flex-col justify-center items-center gap-2"
          >
            <p class="font-bold text-base text-primary-text">
              Treinamentos realizados:
            </p>
            <div
              class="sm:w-full w-[150px] h-[50px] border-[2.5px] border-primary rounded-15 flex justify-center items-center"
            >
              <p class="font-semibold text-xlg text-secondary-text">
                {{ userStore.user.treinamentos_realizados ? userStore.user.treinamentos_realizados : 0 }}
              </p>
            </div>
          </div>
          <div
            class="w-[200px] flex flex-col justify-center items-center gap-2"
          >
            <p class="font-bold text-base text-primary-text">Nota média:</p>
            <div
              class="sm:w-full w-[150px] h-[50px] bg-tertiary rounded-15 flex justify-center items-center"
            >
              <p class="font-semibold text-xlg text-tertiary-text">
                {{ userStore.user.nota_media ? userStore.user.nota_media : 0 }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import iconEditarPerfil from "~/components/icons/iconEditarPerfil.vue";
const userStore = useUserStore();
</script>

<style></style>
