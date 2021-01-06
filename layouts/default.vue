<template>
  <div class="container">
    <nuxt />
    <Footer />
    <Header />
    <StepNavigation />
  </div>
</template>

<script>
import Header from '~/components/general/Header.vue'
import Footer from '~/components/general/Footer.vue'
import StepNavigation from '~/components/general/StepNavigation.vue'

export default {
  components: {
    Header,
    Footer,
    StepNavigation
  }
}
</script>
