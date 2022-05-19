<template lang="">
    <div>
        <li>{{title}}  <button @click="$emit('remove')">remove</button></li>
       
    </div>
</template>
<script setup>
defineProps(['title'])
defineEmits(['remove'])
</script>
<style >
</style>