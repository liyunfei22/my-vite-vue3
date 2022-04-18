<template>
  <div>home</div>
  <div>{{ store.count }}</div>
  <HelloWorld msg="hello" name="1"></HelloWorld>
</template>
<script setup lang="ts">
import HelloWorld from '@/components/HelloWorld.vue'
import { useStore } from '@/store/index'
const store = useStore()
</script>
