export const state = ()=>({
  counter : 1
})
export const mutations = {
  increment(state){
    state.counter++
  },
  decrement(state){
    state.counter--
  },
  one(state){
    state.counter = 1
  },
  two(state){
    state.counter = 2
  },
  three(state){
    state.counter = 3
  }
}