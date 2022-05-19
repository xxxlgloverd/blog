<template lang="">
    <div>
    <h2>This is TodoList</h2>
       <form action="" @submit.prevent="AddTodos">
       <label for="">things:</label>
       <input type="text" v-model="todoText">
       <button>Add</button>
       </form>
       <ul>
           <todoItem v-for="(item,index) in todoList" :key="item.id" :title="item.todoText" @remove="removeTodos(index)"/>
       </ul>
    </div>
</template>
<script setup>
import { ref } from "vue";
import todoItem from "../components/todoItem.vue";
const todoList = ref([
  { id: 1, todoText: "eat" },
  { id: 2, todoText: "sleep" },
  { id: 3, todoText: "doudou" },
]);

let nextTodoId = todoList.value.length;
const todoText = ref("");
function AddTodos() {
  todoList.value.push({
    id: nextTodoId++,
    todoText: todoText.value,
  });
  todoText.value=""
}
function removeTodos(param) {
  console.log(param);
  todoList.value.splice(param, 1);
}
</script>
<style>
</style>