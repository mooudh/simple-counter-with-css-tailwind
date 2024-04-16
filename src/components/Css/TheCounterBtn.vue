<script setup>
import { useCounterStore } from "@/stores/CounterStore";
const counterStore = useCounterStore();
</script>

<template>
  <div class="btn-box">
    <button class="buttonDark buttonRound" @click="counterStore.increment">
      <i class="icon" data-char="+"></i>
    </button>

    <button class="buttonDark buttonRound" @click="counterStore.decrement">
      <i class="icon" data-char="-"></i>
    </button>
  </div>
</template>

<style lang="scss" scoped>
.btn-box {
  display: flex;
  justify-content: center;
}

button {
  position: relative;
  font-size: 16px;
  padding: 0 20px;
  display: inline-block;
  border: none;
  outline: none;
  background: #fff;
  border-radius: 3px;
  border: 1px solid #1f1f1f;
  box-shadow: 0 1px 3px 0px rgba(#0f0f0f, 0.5), inset 0 1px rgba(#fff, 0.2);
}

.buttonRound {
  height: 4em;
  width: 4em;
  border-radius: 100%;
  margin: 0 10px;
}

.buttonDark {
  background: linear-gradient(#737373, #333333);
  background-size: auto 150%;
  background-position: 0 100%;

  &:hover {
    background-position: 0 50%;
  }

  &:active {
    color: #000;
    background-position: 0 50%;
    background: #333333;
    box-shadow: inset 0 2px 3px rgba(black, 0.5), 0 1px 1px rgba(white, 0.1);

    .icon:before {
      color: #111;
      text-shadow: 0 1px rgba(white, 0.1);
    }
  }
}

.icon:before {
  font-style: normal;
  font-size: 40px;
  display: block;
  margin-top: -5px;
  color: #ddd;
  text-shadow: 0 1px 1px rgba(black, 1);
  content: attr(data-char);
}
</style>
