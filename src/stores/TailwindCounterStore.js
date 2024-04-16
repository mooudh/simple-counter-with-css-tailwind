import { defineStore } from "pinia";

export const useTailwindCounterStore = defineStore("tailwindCounterStore", {
  state: () => {
    return { count: 0 };
  },

  actions: {
    increment() {
      this.count++;
    },
    decrement() {
      this.count--;
    },
    reset() {
      this.count = 0;
    },
  },
});
