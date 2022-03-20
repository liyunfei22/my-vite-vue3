<template>
  <div>abort</div>
  <div>{{ store.name }}</div>
  <div>{{ store.count }}</div>
  <button @click="add">add</button>
  <button @click="change">change</button>
  <button @click="clear">clear</button>
</template>
<script setup lang="ts">
import { useStore } from '@/store/index';

const store = useStore();
function add() {
  store.count++;
}
function change() {
  store.$patch({
    name: 'liyunfei',
  });
}
function clear() {
  store.$reset();
}
</script>
