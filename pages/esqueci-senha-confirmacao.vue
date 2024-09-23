<template>
  <div class="w-full h-screen flex items-center justify-center">
    <div class="w-full max-w-[330px]">
      <!-- header -->
      <HeaderAuthCard />

      <!-- body -->
      <div
        element-loading-color="#F5821F"
        class="flex flex-col items-center gap-8 bg-primary min-h-[370px] rounded-b-15 p-6 text-center"
      >
        <CardAuthDescription
          title="E-mail encontrato"
          description="Enviamos uma mensagem com a sua senha para o e-mail informado."
        />

        <div class="flex-1"></div>

        <!-- footer -->
        <div class="flex items-center justify-between">
          <NuxtLink
            to="/login"
            class="text-base text-secondary-text font-medium cursor-pointer hover:opacity-85 transition-opacity"
          >
            <ButtonAuth text="Voltar ao login" />
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import HeaderAuthCard from "~/components/auth/HeaderAuthCard.vue";
import CardAuthDescription from "~/components/auth/CardAuthDescription.vue";
import ButtonAuth from "~/components/auth/ButtonAuth.vue";

definePageMeta({
  layout: "auth",
});

const router = useRouter();
</script>

<style></style>
