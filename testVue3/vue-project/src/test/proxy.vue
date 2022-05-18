<template>
  <div>
    <button @click="increment">reactive--{{ state.count }}</button>
    <button @click="incrementRef">ref--{{ count }}</button>
  </div>
</template>
<script setup>
import { reactive, ref } from "vue";
//使用reactive实现响应式
const count = ref(0);
const state = reactive({
  count,
});
console.log(state.count); //0;
state.count = 1;
console.log(count.value); //1
function increment() {
  state.count++;
  console.log(count.value);
}
//使用ref 实现响应式
function incrementRef() {
  count.value++; //count++ 无需.value,可以使用$ref()语法糖
}
</script>
<style lang="">
</style>