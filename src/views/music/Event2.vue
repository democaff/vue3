<template>
  <div>
    <div bg-slate-100>Evnet2 子传父</div>
    <button @click="handler" class="w-40 h-10 bg-slate rounded-full mt-10">
      click
    </button>
  </div>
</template>

<script setup lang="ts">
import { defineEmits, ref } from "vue";

const params1 = ref("hello");
const params2 = ref("world");
// 自定义事件需要defineEmits接收
const emits = defineEmits(["xxx"]);

const handler = () => {
  // 第一个为事件的类型，第二～n个为传递的参数
  emits("xxx", params1, params2);
};
</script>
