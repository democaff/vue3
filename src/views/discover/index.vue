<template>
  <div>
    <h1 text-4xl text-amber>Props数据传递</h1>
    <Banner :a="name" />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const name = ref("initialValue");
import Banner from "./Banner.vue";
</script>

<style scoped></style>
