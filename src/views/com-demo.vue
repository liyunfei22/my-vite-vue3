<template>
  <div>组合式</div>
  <div>{{ name }}</div>
  <ComComponent2></ComComponent2>
</template>
<script lang="ts">
import { defineComponent, provide } from 'vue'
import ComComponent2 from '@/components/ComComponent2.vue'
export default defineComponent({
  components: {
    ComComponent2,
  },
  setup(props) {
    provide('username', 'username')
    console.log(1, props)
  },
  data() {
    return {
      name: 'mo',
      count: 1 as number,
    }
  },
})
</script>
