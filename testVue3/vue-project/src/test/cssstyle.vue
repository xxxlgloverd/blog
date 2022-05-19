<template>
  <div class="static" :class="{ active: isActive, 'text-danger': hasError }">
    <p>This is a test-styleOrclass!!!</p>
    <div :class="[isActive ? activeClass : '', errorClass]">
      <span>class数组</span>
    </div>
    <div :class="[{ active: isActive }, errorClass]"></div>
    <HelloWorld class="baz" :msg="msg"></HelloWorld>
    <div :style="styleObject">style</div>

    <ul v-for="(numbers,index) in sets" :key="index">
      <li v-for="n in even(numbers)" :key="n">{{ n }}</li>
    </ul>
  </div>
</template>
<script setup>
import HelloWorld from "../components/HelloWorld.vue";
import { reactive, ref } from "vue";

const isActive = ref(true);
const hasError = ref(false);
const activeClass = ref("activeClass");
const errorClass = ref("errorClass");
const msg = ref("This is word!!");
const styleObject = reactive({
  color: "red",
  fontSize: "13px",
});

const sets = ref([
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
]);

function even(numbers) {
  return numbers.filter((number) => number % 2 === 0);
}
</script>
<style>
.activeClass {
  font-size: 15px;
}
.errorClass {
  color: red;
}
.baz {
  font-size: 16px;
  color: purple;
}
</style>