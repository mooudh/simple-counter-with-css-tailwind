<template>
  <dialog open>
    <slot />
    <div class="btn-box">
      <button @click="$emit('confirm', true)">ok</button>
      <button class="cancel" @click="$emit('confirm', false)">Cancel</button>
    </div>
  </dialog>
</template>

<script>
export default {};
</script>
<style scoped>
dialog {
  position: fixed;
  top: 20vh;
  left: 30%;
  width: 25%;
  background-color: white;
  box-shadow: 0 2px 8px black;
  padding: 2rem;
  margin: 0;
  z-index: 1000;
}

button {
  background-color: blue;
  padding: 10px 20px;
  float: right;
  color: azure;
  border-radius: 5px;
}
button.cancel {
  background-color: red;
  margin-right: 5px;
}

.btn-box {
  margin-top: 10px;
}
</style>
