<template>
  <div>home</div>
  <div>{{ store.count }}</div>
</template>
<script setup lang="ts">
import { useStore } from '@/store/index';
const store = useStore();
</script>
