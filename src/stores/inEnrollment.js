import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const inEnrollment = defineStore("inenrollment", () => {
  const inenrollment = ref([]);

  const getState = computed(() => inenrollment.value);
  function storeState(state) {
    inenrollment.value.push(state);
  }
  return { inenrollment, getState, storeState };
});
