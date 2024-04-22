<template>
  <component :is="icon" :size="props.size" :fill="props.fill" />
</template>

<script setup lang="ts">
import { defineProps } from "vue";

// 定义 props 的类型
const props = defineProps<{
  icon: any;
  size?: number | string;
  fill?: string | number;
}>();
</script>

<style scoped></style>
