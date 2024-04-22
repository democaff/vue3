<template>
  <div>
    <h1 text-2xl>ChildComponent</h1>
    <p>{{ a }}</p>
  </div>
</template>

<script setup lang="ts">
const props = defineProps(["a"]);

console.log("====================================");
console.log(props);
console.log("====================================");
</script>

<style scoped></style>
