<script setup>
import { useTailwindCounterStore } from "@/stores/TailwindCounterStore";

const tailCounterStore = useTailwindCounterStore();
</script>

<template>
  <div
    class="w-40 h-40 mx-auto my-10 bg-white hover:bg-gray-100 text-3xl rounded-full shadow-md flex items-center justify-center"
  >
    {{ tailCounterStore.count }}
  </div>
</template>

<style lang="scss" scoped></style>
