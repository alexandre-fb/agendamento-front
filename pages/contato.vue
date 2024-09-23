<template>
  <div class="w-full flex flex-col justify-center items-center py-[10px]">
    <BannerPage slug="contato" />
    <div class="w-full max-w-[860px] flex flex-col justify-center items-center pt-[30px]">
      <div class="w-full px-3">
        <p class="font-semibold text-xlg text-tertiary">
          Caso tenha alguma dúvida ou problema, entre em contato pelos seguintes
          canais:
        </p>

        <div class="w-full flex flex-wrap">
          <informacoes-contato-component
          v-for="(info, index) in informacoesContato"
          :key="index"
          :title_info="info.title"
          :label="info.label"
          :value="info.value"
        />
        </div>

        <div class="pt-[15px] pb-[21px]">
          <p class="font-semibold text-xlg text-primary-text">
            Formulário de Contato:
          </p>

          <div class="w-full">
            <form class="bg-white rounded pt-6 pb-8 mb-4">
              <div class="mb-4">
                <label
                  class="block text-primary-text text-base font-bold mb-2"
                  for="subject"
                >
                  Assunto
                </label>
                <input
                  class="__input-contato shadow appearance-none border rounded-15 w-full py-2 px-3 text-primary-text leading-tight focus:outline-none focus:shadow-outline"
                  id="subject"
                  type="text"
                />
              </div>
              <div class="mb-6">
                <label
                  class="block text-primary-text text-base font-bold mb-2"
                  for="message"
                >
                  Mensagem
                </label>
                <textarea
                  class="__input-contato h-[100px] shadow appearance-none border border-primary text-primary-text rounded-15 w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="message"
                ></textarea>
              </div>
              <div class="flex items-center justify-between">
                <button
                  class="w-[135px] h-[50px] text-primary-text text-base font-bold border-[2.5px] border-primary py-2 px-4 rounded-15 focus:outline-none focus:shadow-outline"
                  type="button"
                >
                  Enviar
                </button>
              </div>
            </form>
          </div>
        </div>

        <div class="">
          <informacoes-contato-component :title_info="'Endereços:'" />
        </div>
      </div>
    </div>
   
  </div>
  <div class="w-full h-[396px] sm:h-[388px] flex flex-col">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3736.81942429063!2d-50.359183513318676!3d-20.513627457768784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94979330375ce047%3A0x83cf7e8afd1ed8e0!2sS%C3%A3o%20Jo%C3%A3o%20de%20Iracema%2C%20SP%2C%2015315-000!5e0!3m2!1spt-BR!2sbr!4v1714482330833!5m2!1spt-BR!2sbr"
      width="100%"
      height="450"
      style="border: 0"
      allowfullscreen=""
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
</template>

<script>
import SubBannerComponent from "~/components/SubBannerComponent.vue";
import InformacoesContatoComponent from "~/components/InformacoesContatoComponent.vue";
export default {
  name: "Contato",
  components: {
    SubBannerComponent,
    InformacoesContatoComponent,
  },
  data() {
    return {
      informacoesContato: [
        { title: 'Telefones Úteis', label: 'Recursos Humanos:', value: '(99) 9999.9999' },
      ],
    };
  },
};
</script>

<style scooped>
.__input-contato {
  background: transparent;
}
</style>
