<script setup>
import { useCounterStore } from "@/stores/CounterStore";

const counterStore = useCounterStore();
</script>

<template>
  <div>
    <nav>
      <ul class="nav">
        <li>
          <a href="#">
            <span>{{ counterStore.count }}</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<style scoped>
.nav {
  list-style: none;
  text-align: center;
}

.nav li {
  position: relative;
  display: inline-block;
  margin-right: -4px;
}

.nav li:before {
  content: "";
  display: block;
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #fff;
  width: 100%;
  height: 1px;
  position: absolute;
  top: 50%;
  z-index: -1;
}

.nav a:link,
.nav a:visited {
  display: block;
  text-decoration: none;
  background-color: #f7f7f7;
  background-image: -webkit-linear-gradient(top, #f7f7f7, #e7e7e7);
  background-image: -moz-linear-gradient(top, #f7f7f7, #e7e7e7);
  background-image: -ms-linear-gradient(top, #f7f7f7, #e7e7e7);
  background-image: -o-linear-gradient(top, #f7f7f7, #e7e7e7);
  color: #140101;
  margin: 36px;
  width: 144px;
  height: 144px;
  position: relative;
  text-align: center;
  line-height: 144px;
  border-radius: 50%;
  box-shadow: 0px 3px 8px #aaa, inset 0px 2px 3px #fff;
  border: solid 1px transparent;
  font-size: 40px;
}

.nav a:before {
  content: "";
  display: block;
  background: #fff;
  border-top: 2px solid #ddd;
  position: absolute;
  top: -18px;
  left: -18px;
  bottom: -18px;
  right: -18px;
  z-index: -1;
  border-radius: 50%;
  box-shadow: inset 0px 8px 48px #ddd;
}

.nav a:active {
  box-shadow: 0px 3px 4px #aaa inset, 0px 2px 3px #fff;
}

.nav a:hover {
  text-decoration: none;
  color: #555;
  background: #f5f5f5;
}
</style>
