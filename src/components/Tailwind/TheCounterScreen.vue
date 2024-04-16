<script setup>
import { useTailwindCounterStore } from "@/stores/TailwindCounterStore";

const tailCounterStore = useTailwindCounterStore();
</script>

<template>
  <div
    class="w-40 h-40 mx-auto my-10 bg-white hover:bg-gray-100 text-3xl rounded-full shadow-md flex items-center justify-center"
  >
    <div>
      <span class="flex items-center justify-center">
        {{ tailCounterStore.count }}
      </span>

      <p>press to reset</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
p {
  font-size: 14px;
}
</style>
