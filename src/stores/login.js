import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useLoginConfig = defineStore('login', () => {
  const valorVF = ref(false)

  function abrirFecharCampo() {
    valorVF.value = !valorVF.value
  }
  return { valorVF, abrirFecharCampo }
})
