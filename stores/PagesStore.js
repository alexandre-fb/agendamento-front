import { ref } from "vue";

export const usePagesStore = defineStore("pagesStore", {
  state() {
    const banners = ref([]);

    return {
      banners
    };
  },
  actions: {
    updateStateFromLocalStorage() {
      const bannersValue = JSON.parse(localStorage.getItem("banners"));
      console.log('bannersValue', bannersValue)
      bannersValue ? this.banners = bannersValue : this.banners = null
    },

    setBanners(bannersValue) {
      localStorage.setItem("banners", JSON.stringify(bannersValue));
      this.banners = bannersValue;
    },

    clear() {
      localStorage.removeItem("banners");
      localStorage.removeItem("user");
      localStorage.removeItem("is_logged");
      this.banners = "";
    },
  },
});

