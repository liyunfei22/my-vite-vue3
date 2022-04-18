<template>
  <div>
    组件
    <div>{{ count }}{{ username }}</div>
    <button @click="add">add</button>
    <button @click="callback">触发父组件方法</button>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  inject: ['username'],
  props: {
    name: {
      type: String,
      default: '',
      required: false,
    },
  },
  emits: ['bClick'],
  setup(props, { attrs, slots, emit, expose }) {
    console.log('ssssss', props)
    console.log('attrs', attrs)
    console.log('slots', slots)
    console.log('emit', emit)
    console.log('expose', expose)
  },
  data() {
    return { count: 1 }
  },
  renderTracked(e) {
    console.log('renderTracked', e)
  },
  renderTriggered(e) {
    console.log('renderTriggered', e)
  },
  methods: {
    callback() {
      this.$parent.lala()
      this.$emit('bClick')
    },
    dialog: function () {
      alert('expose dialog')
    },
    add() {
      this.count++
    },
    clear() {
      this.count = 0
    },
  },
})
</script>
<style lang="scss"></style>
