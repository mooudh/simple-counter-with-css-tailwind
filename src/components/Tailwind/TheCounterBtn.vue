<script setup>
import { useTailwindCounterStore } from "@/stores/TailwindCounterStore";

const tailCounterStore = useTailwindCounterStore();
</script>
<template>
  <div
    class="w-40 mx-auto bg-white p-6 rounded-lg shadow-md flex items-center justify-around"
  >
    <button
      class="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-md hover:bg-green-600 focus:outline-none"
      @click="tailCounterStore.increment"
    >
      +
    </button>
    <button
      class="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-md hover:bg-red-600 focus:outline-none"
      @click="tailCounterStore.decrement"
    >
      -
    </button>
  </div>
</template>

<style lang="scss" scoped></style>
