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
  stablish(state, chap){
    state.counter = chap
  }
}