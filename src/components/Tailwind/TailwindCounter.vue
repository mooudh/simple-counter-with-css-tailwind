<script setup>
import { ref } from "vue";
import TheCounterBtn from "./TheCounterBtn.vue";
import TheCounterScreen from "./TheCounterScreen.vue";
import { useTailwindCounterStore } from "@/stores/TailwindCounterStore";

const tailCounterStore = useTailwindCounterStore();

const reseting = ref(false);

const reset = () => {
  if (tailCounterStore.count != 0) reseting.value = true;
};

const confirmBtn = (bool) => {
  if (bool) {
    tailCounterStore.reset();
  }
  reseting.value = false;
};
</script>

<template>
  <div class="container">
    <transition name="fade">
      <error-dialog v-if="reseting" @confirm="confirmBtn"
        >are you sure to reset the Counter?</error-dialog
      >
    </transition>
    <main>
      <h1 class="text-3xl text-white">Tailwind Styled Counter</h1>
      <div class="box">
        <the-counter-screen @click="reset" />
        <the-counter-btn />
      </div>
      <button
        class="px-4 py-2 bg-red-500 text-white rounded-md shadow-md hover:bg-red-600 focus:outline-none"
        @click="reset"
      >
        Reset Counter
      </button>
    </main>
  </div>
</template>

<style lang="scss" scoped>
.container {
  display: grid;
  place-items: center;
  height: 80vh;
}

main {
  width: 500px;
  height: 600px;
  background-color: rgb(17, 2, 13);
  border-radius: 20px;
  display: grid;
  place-items: center;
}

.box {
  width: 250px;
  height: 350px;
  background-color: rgb(42, 230, 230);
  border-radius: 20px;
}

.fade-enter-from {
  opacity: 0;
}
.fade-enter-to {
  opacity: 1;
}
.fade-enter-active {
  transition: opacity 800ms ease-in;
}
.fade-leave-from {
  opacity: 1;
}
.fade-leave-to {
  opacity: 0;
}
.fade-leave-active {
  transition: opacity 800ms ease-in;
}
</style>
