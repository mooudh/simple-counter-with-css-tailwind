<script setup>
import { ref } from "vue";
import TheCounterBtn from "./TheCounterBtn.vue";
import TheCounterScreen from "./TheCounterScreen.vue";
import { useCounterStore } from "@/stores/CounterStore";

const counterStore = useCounterStore();

const reseting = ref(false);

const reset = () => {
  if (counterStore.count != 0) reseting.value = true;
};

const confirmBtn = (bool) => {
  if (bool) {
    counterStore.reset();
  }
  reseting.value = false;
};
</script>

<template>
  <div class="container">
    <transition name="slide">
      <error-dialog v-if="reseting" @confirm="confirmBtn"
        >are you sure to reset the Counter?</error-dialog
      >
    </transition>
    <main>
      <div class="title">
        <h1>Simple Css Styled Counter</h1>
      </div>
      <div class="box">
        <the-counter-screen @click="reset" />
        <the-counter-btn />
      </div>
      <button @click="reset">Reset</button>
    </main>
  </div>
</template>

<style scoped>
.container {
  display: grid;
  place-items: center;
  height: 80vh;
}

main {
  width: 500px;
  height: 600px;
  background-color: rgb(197, 152, 185);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}

.box {
  width: 250px;
  height: 350px;
  background-color: rgb(42, 230, 230);
  border-radius: 20px;
  z-index: 1;
}

.title {
  margin: 40px 0;
  font-size: 30px;
  color: white;
}

.title,
.box,
button {
  margin: 30px 0;
}

button {
  width: 150px;
  background-color: rgb(236, 74, 52);
  color: aliceblue;
  padding: 10px 40px;
  border-radius: 5px;
}
button:hover {
  background-color: red;
}

.slide-enter-from {
  transform: translateY(100%) scale(0.8);
}
.slide-enter-to {
  transform: translateY(0);
}
.slide-enter-active {
  position: absolute;
}

.slide-leave-from {
  transform: translateY(0);
}
.slide-leave-to {
  transform: translateY(100%) scale(0.8);
}

.slide-enter-active,
.slide-leave-active {
  transition: all 550ms ease-out;
}
</style>
