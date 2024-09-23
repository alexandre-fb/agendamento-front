<template>
  <div class="w-full h-screen flex items-center justify-center">
    <div class="w-full max-w-[330px]">
      <!-- header -->
      <!-- <HeaderAuthCard /> -->

      <!-- body -->
      <div
        class="flex flex-col gap-8 bg-primary min-h-[370px] rounded-15 p-6 text-center shadow-lg border-gray-100 border"
      >
        <CardAuthDescription
          title="Bem-vindo"
          description="Informe seu e-mail e senha e depois clique em “entrar”."
        />

        <!-- inputs -->
        <el-form
          v-loading="loading"
          ref="formDataRef"
          :model="formData"
          :rules="rules"
          class="__form-login"
        >
          <div class="flex flex-col gap-6">
            <div class="__input_auth">
              <el-form-item prop="email">
                <el-input
                  placeholder="Email"
                  type="email"
                  v-model="formData.email"
                  clearable
                >
                  <template #prefix>
                    <div
                      class="flex justify-center items-center w-[40px] h-[40px] rounded-15 transition-all bg-secondary rounded-l-15 rounded-r-none"
                    >
                      <IconLoginMail />
                    </div>
                  </template>
                </el-input>
              </el-form-item>
            </div>

            <div class="__input_auth">
              <el-form-item prop="password">
                <el-input
                  placeholder="Senha"
                  type="password"
                  show-password
                  v-model="formData.password"
                  @keypress.enter="handleLogin(formDataRef)"
                >
                  <template #prefix>
                    <div
                      class="flex justify-center items-center w-[40px] h-[40px] rounded-15 transition-all bg-secondary rounded-l-15 rounded-r-none"
                    >
                      <IconPassword />
                    </div>
                  </template>
                </el-input>
              </el-form-item>
            </div>
          </div>
        </el-form>

        <!-- footer -->
        <div class="flex items-center justify-between">
          <ButtonAuth text="Entrar" @clicked="handleLogin(formDataRef)" />
          <NuxtLink
            to="/esqueci-senha"
            class="text-base text-secondary-text font-medium cursor-pointer hover:opacity-85 transition-opacity"
          >
            Esqueci minha senha
          </NuxtLink>
        </div>
      </div>
    </div>

    <!-- modal -->
    <!-- <ModalComponentVideo
      :visible="showModal"
      :videoLink="loginData.video_intro"
      buttonText="Pular"
      @close="goHome"
    /> -->
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useUserStore } from "~/stores/UserStore";
import { usePagesStore } from "~/stores/PagesStore";
import loginData from "~/mocks/login.json";

//components
import HeaderAuthCard from "~/components/auth/HeaderAuthCard.vue";
import CardAuthDescription from "~/components/auth/CardAuthDescription.vue";
import ButtonAuth from "~/components/auth/ButtonAuth.vue";
import IconLoginMail from "~/components/icons/IconLoginMail.vue";
import IconPassword from "~/components/icons/IconPassword.vue";
import ModalComponentVideo from "~/components/ModalComponentVideo.vue";

definePageMeta({
  layout: "auth",
});

const userData = loginData.usuario;
const router = useRouter();
const userStore = useUserStore();
const pagesStore = usePagesStore();
const loading = ref(false);
const formData = ref({
  email: "",
  password: "",
});
const formDataRef = ref();
const config = useRuntimeConfig();
const { baseApiUrl, apiToken } = config.public;

const rules = ref({
  email: [
    {
      required: true,
      message: "Campo obrigatório",
      trigger: "blur",
    },
    {
      pattern: /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i,
      message: "Insira um e-mail válido",
      trigger: "blur",
    },
  ],
  password: [
    {
      required: true,
      message: "Campo obrigatório",
      trigger: "blur",
    },
    {
      min: 3,
      message: "Esse campo deve ter ao menos 6 caracteres",
      trigger: "blur",
    },
  ],
});

const handleLogin = async (form) => {
  await form.validate(async (valid) => {
    if (valid) {
      try {
        loading.value = true;

        const response = await $fetch(baseApiUrl + "/auth/login", {
          method: "POST",
          body: formData.value,
        });

        console.log('response login',response)

        if (response.data.token) {
          ElMessage({
            showClose: true,
            message: "Login realizado com sucesso!",
            type: "success",
            duration: 1800,
          });

          // showModal.value = true;
          goHome();
        }

        setGlobalUserData(response);
        // fetchBannersPages(response.dados.token);
      } catch (error) {
        console.log("error", error);
        ElMessage({
          showClose: true,
          message: "Erro de validação. Verifique os campos do formulário.",
          type: "error",
        });
      } finally {
        loading.value = false;
      }
    } else {
      ElMessage({
        showClose: true,
        message: "Verifique os campos do formulário",
        type: "error",
      });
    }
  });
};

// const fetchBannersPages = async (token) => {
//   try {
//     const completeToken = "Bearer " + token
//     const apiUrl = `${baseApiUrl}/pagina`;
//     const response = await $fetch(apiUrl, {
//       method: "GET",
//       headers: {
//         Authorization: completeToken,
//       },
//     });

//     setBannersPagesGlobalData(response[0]);
//   } catch (error) {
//     console.log("error fetchBanners", error);
//   }
// };

const setGlobalUserData = (response) => {
  userStore.setToken(response.data.token);
  // userStore.setUser(response.data.usuario);
  userStore.setIsLogged(true);
};

// const setBannersPagesGlobalData = (bannersData) => {
//   pagesStore.setBanners(bannersData);
// };

const goHome = () => {
  // showModal.value = false;
  router.push({ path: "/agendamento" });
};
</script>

<style scoped></style>
