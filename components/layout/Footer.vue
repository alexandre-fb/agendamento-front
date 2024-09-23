<template>
  <div class="__footer-container relative flex flex-col items-center justify-center px-4  pt-4 sm:pt-2 pb-5 sm:pb-2 w-full min-h-[78px] h-fit bg-white">

      <div class="relative flex items-center justify-between h-full w-full max-w-container">

          <!-- redes sociais -->
          <div class="relative flex items-center gap-5 bottom-2 sm:bottom-0">
              <template v-for="(socialLinkData, index) in socialLinksData" :key="index">
                  <a :href="socialLinkData.link" :alt="socialLinkData.name" target="_blank"
                      class="relative block hover:scale-110 transition-transform duration-300 ease-in-out cursor-pointer"
                      :class="socialLinkData.name === 'Youtube' ? 'top-[2px]' : ''">
                      <component :is="socialLinkData.iconName" :size="socialLinkData.size" color="#F5821F" />
                  </a>
              </template>
          </div>

          <!-- politica -->
          <div class="absolute  -bottom-4 sm:bottom-auto left-1/2 -translate-x-1/2">
              <router-link to="/politica-privacidade">
                  <span class="text text-amcor-dark-blue text-[10px]">política de privacidade</span>
              </router-link>
          </div>
          
          <!-- logo -->
          <a href="https://www.planmkt.com.br" target="_blank" class="relative bottom-2 sm:bottom-0 block cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out">
              <img src="/images/logo-laranja.svg" class="max-h-11 " loading="lazy">
          </a>
      </div>
      <!-- <cookie-compliance-modal /> -->
  </div>
</template>

<script>
import { ref } from 'vue';
import IconFacebook from '/components/icons/IconFacebook.vue';
import IconLinkedin from '/components/Icons/IconLinkedin.vue';
import IconYoutube from '/components/Icons/IconYoutube.vue';

import CookieComplianceModal from '../CookiesModal/CookieComplianceModal.vue';

export default {
  name: 'Footer',
  components: {
      IconFacebook,
      IconLinkedin,
      IconYoutube,
      CookieComplianceModal
  },
  setup() {
      const socialLinksData = ref([
              {
                  name: 'Facebook',
                  link: 'https://www.facebook.com/amcorlimited/',
                  iconName: 'icon-facebook',
                  size: 16
              },
              {
                  name: 'Linkedin',
                  link: 'https://www.linkedin.com/company/amcor',
                  iconName: 'icon-linkedin',
                  size: 20
              },
              {
                  name: 'Youtube',
                  link: 'https://www.youtube.com/user/AmcorPackaging',
                  iconName: 'icon-youtube',
                  size: 20
              },
          ]
      )

      return {
        socialLinksData
      }
  }
}
</script>

<style scoped>
/*.__footer-container::after {
  content: '';
  display: block;
  position: absolute;
  bottom: calc(100% - 1px);
  width: 360px;
  height: 67px;
  right: 0;
}
*/
</style>

