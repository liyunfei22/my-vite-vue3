import { defineStore } from 'pinia';
export const useStore = defineStore('main', {
  state: () => {
    return {
      name: 'li',
      count: 0,
    };
  },
  getters: {
    double: (state) => state.count * 2,
  },
});
