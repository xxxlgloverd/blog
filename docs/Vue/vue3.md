>vue3 官方文档及geektime vue3课程学习

## 1.创建应用
> 每个 Vue 应用都是通过 createApp 函数创建一个新的 应用实例：
> 
> 可以通过一个单文件组件进行导如根组件
> 
> 在未采用构建流程的情况下使用 Vue 时，我们可以在挂载容器中直接书写根组件模板
>  
## 2.模板语法
```HTML
 <!--:id可以动态绑定（结合es6的模板语法）--->
 <div  v-for="index in 10" :key="index"><span :id="`list-${index}`">{{index}}</span></div>
<!----eventName值可以时focus、clcik、blur等 很灵活------>
 <a @[eventName]="doSomething">
```
## 3.响应式基础

> ref()和 reactive()都能实现响应式;
> 
> ref在模板中可以自动解包（哇，666），无需.vlaue去获取值
> 
> 只有深层响应式对象内时，才会发生 ref 解包
> 
> 响应语法糖 let count = $ref() ;count //不用.value去取值
> 
```html
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
```
## 4.计算属性
> 使用计算属性来描述依赖响应式状态的复杂逻辑
> 
> 计算属性会自动追踪响应式依赖
> >
> 计算属性值会基于其响应式依赖被缓存(与函数相比较)


生命周期
>vue3生命周期
>
>beforeCreated、created、beforeMount、mounted、beforeUpdate、updated、beforeUnmount、unmounted
>

