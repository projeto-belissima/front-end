import { ref } from 'vue';
import { defineStore } from 'pinia';

export const usarLoginConfig = defineStore('login', () => {
  const valorVF = ref(false)

  function abrirFecharCampo(boolean) {
    boolean.value = !boolean.value
  }
  return { valorVF, abrirFecharCampo }
})
