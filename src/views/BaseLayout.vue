<template>
  <div class="flex">
    <Menu />
    <main class="min-w-full min-h-screen">
      <RouterView />
    </main>
  </div>
</template>

<script setup>
import Menu from "@/components/Menu.vue";
import Footer from "@/components/Footer.vue";
import { RouterView } from "vue-router";
</script>

<style lang="scss" scoped></style>
