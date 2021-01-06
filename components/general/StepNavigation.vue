<template>
  <div class="stepNav fixed flex flex-col justify-center">
    <div @click="navigateToStep(0)" >
      <img v-if="this.$store.state.video === 0" class="lg:w-12" src="~/assets/step-nav-arrows.svg" alt="" />
      <img v-else src="~/assets/navigation-circle.svg"  alt="" />
    </div>
    <img src="~/assets/dots.svg" alt="" />
    <div @click="navigateToStep(1)">
      <img v-if="this.$store.state.video === 1" class="lg:w-12"  src="~/assets/step-nav-arrows.svg" alt="" />
      <img v-else src="~/assets/navigation-circle.svg" alt="" />
    </div>
    <img src="~/assets/dots.svg" alt="" />
    <div @click="navigateToStep(2)">
      <img v-if="this.$store.state.video === 2" class="lg:w-12" src="~/assets/step-nav-arrows.svg" alt="" />
      <img v-else src="~/assets/navigation-circle.svg" alt="" />
    </div>
    <img src="~/assets/dots.svg" alt="" />
    <div @click="navigateToStep(3)">
      <img v-if="this.$store.state.video === 3" class="lg:w-12" src="~/assets/step-nav-arrows.svg" alt="" />
      <img v-else src="~/assets/navigation-circle.svg" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'StepNavigation',
  methods:{
      navigateToStep(step){
          this.$store.commit('stepNavigation', step)
      }
  }
}
</script>

<style>
.stepNav {
  max-height: 100px;
  right: 3%;
  top: 40%;
  z-index: 3;
}
.stepNav img {
  margin: auto;
}
</style>