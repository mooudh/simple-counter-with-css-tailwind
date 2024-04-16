<script setup></script>

<template>
  <div class="container">
    <main>
      <header>
        <div>
          <h1>Simple Counter with Css & Tailwind</h1>
        </div>
      </header>
      <body>
        <h2>Introduction</h2>
        <p>a simple counter has created with Vuejs with two different style:</p>
        <ul>
          <li>1.in pure Css style</li>
          <li>2.in tailwind style</li>
        </ul>
        <h2>vue-router:</h2>
        <p>
          two different pages for each style has considered, so vue-router is
          used to do so.
        </p>
        <h2>Pinia:</h2>
        <p>
          State management of the project is handling by Pinia, there has
          considered a store for each style in this project.
        </p>
        <h2>Animations:</h2>
        <p>
          for better Ui/Ux, some transition and animation has applied for dialog
          notification boxes.
        </p>
      </body>

      <footer>
        <div>
          <router-link to="css"><button>Css Styled</button></router-link>
          <router-link to="tailwind"
            ><button>Tailwind Styled</button></router-link
          >
        </div>
      </footer>
    </main>
  </div>
</template>

<style scoped>
.container {
  display: grid;
  place-items: center;
  height: 100vh;
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

header {
  margin: 10px 0;
}
h1 {
  font-size: 25px;
}
h2 {
  font-size: 20px;
}
p,
li {
  color: white;
  padding: 0 10px;
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
