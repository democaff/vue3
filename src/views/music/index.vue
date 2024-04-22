<template>
  <div class="py-20">
    <h1
      class="mb-10 text-4xl text-slate-800 font-bold bg-amber inline px-12 rounded-full"
      @click="handler"
    >
      自定义事件
    </h1>

    <h3>{{ sun }}</h3>
    <Event1 @click="handler" />
    <Event2 @xxx="handler2" />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Event1 from "./Event1.vue";
import Event2 from "./Event2.vue";

const handler = () => {
  alert("自定义事件1");
};

const sun = ref("");

const handler2 = (params1: any, params2: any) => {
  sun.value = params1.value + params2.value;
};
</script>
