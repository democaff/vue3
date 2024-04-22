<template>
  <div class="w-full">
    <h1
      class="text-8xl text-green font-bold min-w-full p-20"
      bg-fuchsia
      bg-op-40
    >
      Mitt 事件总线
    </h1>
    <div flex gap-x-24>
      <Child1 />
      <Child2 />
    </div>
  </div>
</template>

<script setup lang="ts">
import Child1 from "./Child1.vue";
import Child2 from "./Child2.vue";
</script>

<style scoped>
h1 {
  min-width: 100%;
}
</style>
