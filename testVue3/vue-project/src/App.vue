<script setup>
import HelloWorld from "./components/HelloWorld.vue";
import TheWelcome from "./components/TheWelcome.vue";
import proxy from "./test/proxy.vue";
import computed from "./test/computed.vue";
import cssstyle from "./test/cssstyle.vue";
import todoList from "./test/todoList.vue";
</script>

<template>
  <main>
    <h2>模板语法：</h2>
    <div v-for="index in 10" :key="index">
      <span :id="`list-${index}`">{{ index }}</span>
    </div>
    <h2>响应式基础：</h2>
    <proxy />
    <h2>计算属性：</h2>
    <computed />
    <h2>类与样式绑定：</h2>
    <cssstyle />
    <h2>todoList：</h2>
    <todoList />
  </main>
</template>

<style>
@import "./assets/base.css";

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;

  font-weight: normal;
}

header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

a,
.green {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
}

@media (hover: hover) {
  a:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }
}

@media (min-width: 1024px) {
  body {
    display: flex;
    place-items: center;
  }

  #app {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0 2rem;
  }

  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  .logo {
    margin: 0 2rem 0 0;
  }
}
</style>
