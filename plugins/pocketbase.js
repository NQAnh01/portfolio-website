import PocketBase from "pocketbase";

export default defineNuxtPlugin(() => {
  const pb = new PocketBase("http://127.0.0.1:8090");
  return {
    provide: {
      pb,
    },
  };
});
