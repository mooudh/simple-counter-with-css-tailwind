<template>
  <div class="container">
    <nav>
      <router-link to="/"><button>Home Page</button></router-link>
      <router-link to="css"><button>Css Counter</button></router-link>

      <router-link to="tailwind">
        <button>Tailwind Counter</button></router-link
      >
    </nav>
  </div>
</template>

<script setup></script>

<style scoped>
.container {
  display: grid;
  place-items: center;
}
ul {
  display: flex;
  margin-bottom: 0;
}
button {
  width: 200px;
  background-color: aqua;
  padding: 20px 40px;
  margin: 20px 5px;
  border-radius: 5px;
}
button:hover {
  background-color: rgb(23, 207, 207);
}
</style>
