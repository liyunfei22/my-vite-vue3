<template>
  <div>选项式</div>
  <div>{{ name }}</div>
  <ComComponent
    ref="li"
    name="li"
    age="18"
    class="red"
    @bClick="handler"
  ></ComComponent>
  <button @click="emitChild">子组件方法</button>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import ComComponent from '@/components/ComComponent.vue';
export default defineComponent({
  components: {
    ComComponent,
  },
  setup(props) {
    console.log(1, props);
  },
  data() {
    return {
      name: 'li',
      count: 1 as number,
    };
  },
  computed: {
    double(): number {
      return this.count * 2;
    },
    apluse: {
      get(): number {
        return this.count + 1;
      },
      set(val) {
        this.count = val - 1;
      },
    },
  },
  expose: ['lala'],
  methods: {
    pluse() {
      this.count++;
    },
    handler() {
      alert('parent');
    },
    lala() {
      alert('lala');
    },
    emitChild() {
      console.log(this.$el.handler());
    },
  },
});
</script>
