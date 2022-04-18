<template>
  <div>
    组件2
    <div>{{ state.name }}</div>
    <div>{{ count }} {{ plusOne }}</div>
    <div>
      <button @click="handleClick">add</button>
      <button @click="changeName">changeName</button>
    </div>
  </div>
</template>
<script lang="ts">
import {
  defineComponent,
  inject,
  ref,
  reactive,
  toRef,
  toRefs,
  computed,
} from 'vue'
export default defineComponent({
  props: {
    name: {
      type: String,
      default: '',
      required: false,
    },
  },
  setup(props) {
    const foo = inject('username')
    const count = ref(0)
    console.log('count', count)
    const obj = { name: 'foo', foo: 1 }
    const state = reactive(obj)
    console.log(state)
    const fooRef = toRef(state, 'name')
    const stateAsRefs = toRefs(state)
    console.log('stateAsRefs', stateAsRefs)
    console.log(fooRef)
    const plusOne = computed(() => {
      return count.value + 1
    })
    const handleClick = () => {
      count.value++
    }
    const changeName = () => {
      obj.name = 'bar'
    }
    console.log(props)
    return {
      foo,
      count,
      state,
      plusOne,
      handleClick,
      changeName,
    }
  },
})
</script>
<style lang="scss"></style>
