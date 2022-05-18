<template lang="">
    <div>
       <p>Has published book</p>
       <span>{{publishBooksMessage}}</span> 
       <div v-for="(item,index) in autor.books" ::key="item">book name:{{item}} <button @click="()=>autor.books.splice(index,1)">delete</button></div>

       <input  v-model="fullName"> <br>
       <span>firstName:{{firstName}}</span> <br>
        <span>lastName:{{lastName}}</span>
    </div>
</template>
<script setup>
import { computed, reactive, ref } from "vue";

const autor = reactive({
  name: "John Doe",
  books: ["vue2", "vue3", "vue4"],
});
const publishBooksMessage = computed(() => {
  return autor.books.length > 0 ? "YES" : "NO";
});

let firstName = ref("John");
let lastName = ref("Doe");
const fullName = computed({
  get() {
    return firstName.value + " " + lastName.value;
  },
  set(newValue) {
    [firstName.value, lastName.value] = newValue.split(" ");
  },
});
</script>
<style lang="">
</style>