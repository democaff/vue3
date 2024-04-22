<template>
  <div>
    <h1 class="text-4xl text-green font-bold">Child2</h1>
    <button @click="handler" class="bg-amber px-10 py-5 px-20 rounded-full">
      送法拉利
    </button>
  </div>
</template>

<script setup lang="ts">
import bus from "@/bus";

const handler = () => {
  bus.emit("cars", "法拉利");
};
</script>

<style scoped></style>
