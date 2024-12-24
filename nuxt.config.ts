// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      pbUrl: "http://127.0.0.1:8090",
    },
  },
  css: [
    "@fortawesome/fontawesome-free/css/all.css",
  ],
});
