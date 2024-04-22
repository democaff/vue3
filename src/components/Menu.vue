<template>
  <div class="h-screen px-10 py-20" bg-indigo bg-op-10>
    <ul>
      <li v-for="item in menus" :key="item.name" text-base font-800>
        {{ item.name }}

        <div
          v-for="menu in item.menus"
          text-14px
          font-normal
          pl-2
          hover:bg-coolgray
          hover:text-white
          rounded-full
          text-nowrap
        >
          <RouterLink :to="menu.key" flex items-center py-2 gap-2 font-600>
            <IconPark :icon="menu.icon" />{{ menu.name }}</RouterLink
          >
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import IconPark from "@/useIcon/IconPark.vue";
import { RouterLink } from "vue-router";
import { useMenu } from "@/data";

const menus = useMenu();
</script>

<style scoped></style>
