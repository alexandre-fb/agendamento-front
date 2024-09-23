import { useUserStore } from "../stores/UserStore";

export default defineNuxtRouteMiddleware(async (to, from) => {
  if (process.client) {
    const userStore = useUserStore();
    userStore.updateStateFromLocalStorage();

    if (
      to.path === "/login" ||
      to.path === "/esqueci-senha" ||
      to.path === "/esqueci-senha-confirmacao"
    ) {
      return;
    }

    if ((!userStore.isLoggedIn || !userStore.token) && to.path !== "/login") {
      console.log(
        "Usuário não está autenticado. Redirecionando para a página de login."
      );
      return navigateTo("/login");
    }
  }
});
