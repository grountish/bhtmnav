<template>
  <div class="container">
    <nuxt />
    <Header />
    <StepNavigation />
  </div>
</template>

<script>
import Header from '~/components/general/Header.vue'
import StepNavigation from '~/components/general/StepNavigation.vue'

export default {
  components: {
    Header,
    StepNavigation
  }
}
</script>
