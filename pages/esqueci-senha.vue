<template>
  <div class="w-full h-screen flex items-center justify-center">
    <div class="w-full max-w-[330px]">
      <!-- header -->
      <HeaderAuthCard />

      <!-- body -->
      <div
        v-loading="loading"
        element-loading-color="#F5821F"
        class="flex flex-col gap-8 bg-primary min-h-[370px] rounded-b-15 p-6 text-center"
      >
        <CardAuthDescription
          title="Esqueci minha senha"
          description="Informe seu e-mail cadastrado e depois clique em “enviar”."
        />

        <!-- inputs -->
        <el-form
          ref="formDataRef" 
          :model="formData" 
          :rules="rules" 
          class="flex-1"
        >
          <div class="flex flex-col gap-2">
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

            <p class="text-sm font-bold">O endereço de e-mail informado deve ser o mesmo utilizado para o cadastro.</p>
          </div>
        </el-form>

        <!-- footer -->
        <div class="flex items-center justify-between">
          <ButtonAuth text="Entrar" @clicked="handleSendEmail(formDataRef)" />
          <NuxtLink
            to="/login"
            class="text-base text-secondary-text font-medium cursor-pointer hover:opacity-85 transition-opacity"
          >
            Voltar
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import HeaderAuthCard from "~/components/auth/HeaderAuthCard.vue";
import CardAuthDescription from "~/components/auth/CardAuthDescription.vue";
import ButtonAuth from "~/components/auth/ButtonAuth.vue";
import IconLoginMail from "~/components/icons/IconLoginMail.vue";

import { useUserStore } from "~/stores/UserStore";

definePageMeta({
  layout: "auth",
});

const router = useRouter();
const userStore = useUserStore();
const loading = ref(false);
const formData = ref({
  email: "",
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
});

const handleSendEmail = async (form) => {
  await form.validate(async (valid) => {
    if (valid) {
      try {
        loading.value = true;

        // const response = await $fetch(baseApiUrl + "/auth/login", {
        //   method: "POST",
        //   body: formData.value,
        // });

        // userStore.setToken(response.data.token);

        router.push({ path: "/esqueci-senha-confirmacao" });

        loading.value = false;
      } catch (error) {
        ElMessage({
          showClose: true,
          message: "Erro de validação. Verifique o email adicionado.",
          type: "error",
        });
      } finally {
        loading.value = false;
      }
    } else {
      ElMessage({
        showClose: true,
        message: "Verifique o email adicionado",
        type: "error",
      });
    }
  });
};
</script>

<style></style>
