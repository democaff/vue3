<template>
  <div>
    <h1 class="text-4xl text-green font-bold">Child1</h1>
    <h2>{{ car }}</h2>
  </div>
</template>

<script setup lang="ts">
import bus from "@/bus";

import { onMounted, ref } from "vue";

const car = ref("");
onMounted(() => {
  bus.on("cars", (newCar) => {
    car.value = newCar;
  });
});
</script>

<style scoped></style>
