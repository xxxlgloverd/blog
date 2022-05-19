>[vue3 官方文档](https://staging-cn.vuejs.org/)及geektime vue3课程学习

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

## 5.类与样式绑定
```html
<template>
  <div class="static" :class="{ active: isActive, 'text-danger': hasError }">
    <p>This is a test-styleOrclass!!!</p>
    <div :class="[isActive ? activeClass : '', errorClass]">
      <span>class数组</span>
    </div>
    <div :class="[{ active: isActive }, errorClass]"></div>
    <HelloWorld class="baz" :msg="msg"></HelloWorld>
    <div :style="styleObject">style</div>
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
```
## 6.条件渲染
> **v-if** vs **v-show**
> 
> v-if 是“真实的”按条件渲染，因为它确保了条件区块内的事件监听器和子组件都会在切换时被销毁与重建。
> 
> v-if 也是懒加载的：如果在初次渲染时条件值为 false，则不会做任何事。条件区块会直到条件首次变为 true 时才渲染。
> 
> 相比之下，v-show 简单许多，元素无论初始条件如何，始终会被渲染，仅作 CSS class 的切换。
> 
> 总的来说，v-if 在首次渲染时的切换成本比 v-show 更高。因此当你需要非常频繁切换时 v-show 会更好，而运行时不常改变的时候 v-if 会更合适。
> 
> **v-if** 和 **v-for**
> 
> 当 v-if 和 v-for 同时存在于一个元素上的时候，v-if 会首先被执行。
> 

## 7.列表渲染
>在定义 v-for 的变量别名时使用解构
```html
<li v-for="{ message } in items">
  {{ message }}
</li>

<!-- 有 index 索引时 -->
<li v-for="({ message }, index) in items">
  {{ message }} {{ index }}
</li>
<script setup>
 import {ref} from "vue"
 const items = ref([{ message: 'Foo' }, { message: 'Bar' }])
</script>

```
>v-for 与对象
```vue
<li v-for="(value, key, index) in myObject">
  {{ index }}. {{ key }}: {{ value }}
</li>
<script setup>
 import {reactive} from "vue"
 const myObject = reactive({
  title: 'How to do lists in Vue',
  author: 'Jane Doe',
  publishedAt: '2016-04-10'
})
</script>
```
> 与模板上的 v-if 类似，你也可以在 <template> 标签上使用 v-for 来渲染一个包含多个元素的块。

```vue
<!--这会抛出一个错误，因为属性 todo 此时没有在该实例上定义-->
<li v-for="todo in todos" v-if="!todo.isComplete">
  {{ todo.name }}
</li>

<!-----推荐用template包裹------>
<template v-for="todo in todos">
  <li v-if="!todo.isComplete">
    {{ todo.name }}
  </li>
</template>
```
>组件上使用v-for,组件有自己独立的作用域。为了将迭代后的数据传递到组件中，我们还是应该使用 prop.
```vue
<my-component
  v-for="(item, index) in items"
  :item="item"
  :index="index"
  :key="item.id"
></my-component>
```

生命周期
>vue3生命周期
>
>beforeCreated、created、beforeMount、mounted、beforeUpdate、updated、beforeUnmount、unmounted
>

