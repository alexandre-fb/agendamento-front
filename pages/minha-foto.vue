<template>
  <div class="w-full flex flex-col justify-center items-center py-[10px]">
    <BannerPage slug="meu-perfil" />

    <div
      class="max-w-container flex flex-col justify-center items-center py-[38px] px-3"
    >
      <div
        class="h-[200px] w-[200px] bg-black-50 border-[3px] border-primary flex justify-center items-end rounded-15 bg-secondary"
      >
        <img
          v-if="state.fotoAdicionada"
          :src="state.fotoAdicionada"
          alt="Foto do usuário"
          class="h-full w-full object-cover rounded-15"
        />
        <IconPhotoUser v-else />
      </div>

      <div
        class="flex flex-col justify-start items-center pt-[30px] pb-[15px] gap-[10px]"
      >
        <p class="font-lg text-medium text-secondary-text">
          Você pode adicionar sua foto de perfil de duas maneiras:
        </p>
        <p class="font-base text-medium text-primary-text">
          Tenha certeza que a foto selecionada mostre claramente seu rosto.
        </p>
      </div>

      <div
        v-if="state.loadingUploadFoto"
        v-loading="state.loadingUploadFoto"
        element-loading-background="transparent"
        class="w-full h-36"
      ></div>
      <div v-else class="flex flex-col gap-5">
        <!-- Tirar foto com camera -->
        <div
          class="md:hidden sm:w-[306px] w-[190px] h-[50px] flex justify-center items-center border-[3px] border-primary rounded-15 cursor-pointer"
        >
          <label
            class="font-bold text-base text-primary-text w-full h-full flex justify-center items-center text-center cursor-pointer"
            for="fotoCapturada"
            >Tire uma foto agora</label
          >
          <input
            class="hidden"
            id="fotoCapturada"
            type="file"
            accept="image/*"
            capture="camera"
            @change="onFotoUpload"
          />
        </div>
        <!-- Carregar foto  -->
        <div
          class="hidden sm:w-[306px] w-[190px] h-[50px] md:flex justify-center items-center border-[3px] border-primary rounded-15 cursor-pointer"
        >
          <label
            class="font-bold text-base text-primary-text w-full h-full flex justify-center items-center text-center cursor-pointer"
            for="fotoSelecionada"
            >Carregar foto</label
          >
          <input
            class="hidden w-full h-full"
            type="file"
            id="fotoSelecionada"
            name="avatar"
            accept="image/png, image/jpeg"
            @change="onFotoUpload"
          />
        </div>

        <NuxtLink to="/perfil"
        class="sm:w-[306px] w-[190px] h-[50px] flex justify-center items-center border-[3px] border-primary rounded-15 cursor-pointer font-bold text-base text-primary-text"
        >
          Cancelar
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";
import { useRouter } from "vue-router";
import { ElMessage } from "element-plus";
import SubBannerComponent from "~/components/SubBannerComponent.vue";
import IconPhotoUser from "~/components/icons/IconPhotoUser.vue";

import { useUserStore } from "~/stores/UserStore";

const fileInput = ref(null);
const state = reactive({
  imageUrl: null,
  loadingUploadFoto: false,
  fotoAdicionada: "",
});
const router = useRouter();

function onFileChange(event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = function () {
      state.imageUrl = reader.result;
      state.fotoAdicionada = reader.result;
      // sendImage();
    };
  }
}

function onFotoUpload(ev) {
  var fReader = new FileReader();

  fReader.readAsDataURL(ev.target.files[0]);
  fReader.onloadend = function (event) {
    state.fotoAdicionada = event.target.result;
    console.log("state.fotoAdicionada", state.fotoAdicionada);
    sendImage();
  };
}

// async function sendImage() {
//   try {
//     state.loadingUploadFoto = true;

//     let token = localStorage.getItem("token");

//     const body = {
//       token,
//       foto: state.fotoAdicionada,
//     };

//     const response = await apiFetch.post("/usuario/foto", body);

//     updateUserStateGlobal();

//     ElMessage({
//       showClose: true,
//       message: "Imagem enviada com sucesso!",
//       type: "success",
//     });

//     router.push({ name: 'conta' });
//   } catch (error) {
//     console.error('Erro ao enviar a imagem', error);
//     ElMessage({
//       showClose: true,
//       message: "Erro ao enviar a imagem",
//       type: "error",
//     });
//   } finally {
//     state.loadingUploadFoto = false;
//   }
// }

async function updateUserStateGlobal() {
  try {
    const userStore = useUserStore();
    let userData = userStore.user;

    const body = {
      primeiro_nome: userData.primeiro_nome,
      matricula: userData.matricula,
    };

    const response = await apiFetch.post("/usuario/login", body);

    userStore.setToken(response.data.token);
  } catch (error) {
    console.error("Erro ao atualizar o estado do usuário", error);

    ElMessage({
      showClose: true,
      message:
        error.response?.data.message || "Erro ao atualizar o estado do usuário",
      type: "error",
    });
  }
}
</script>

<style></style>
