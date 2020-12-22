<template>
  <div class="conte">
    <div class="stepNav fixed flex flex-col">
      <div @click="handleStep(0)">
        <img v-if="video === 0" src="~/assets/step-nav-arrows.svg" alt="" />
        <img v-else src="~/assets/white.svg" alt="" />
      </div>
      <img src="~/assets/dots.svg" alt="" />
      <div @click="handleStep(1)">
        <img v-if="video === 1" src="~/assets/step-nav-arrows.svg" alt="" />
        <img v-else src="~/assets/white.svg" alt="" />
      </div>
      <img src="~/assets/dots.svg" alt="" />
      <div @click="handleStep(2)">
        <img v-if="video === 2" src="~/assets/step-nav-arrows.svg" alt="" />
        <img v-else src="~/assets/white.svg" alt="" />
      </div>
      <img src="~/assets/dots.svg" alt="" />
      <div @click="handleStep(3)">
        <img v-if="video === 3" src="~/assets/step-nav-arrows.svg" alt="" />
        <img v-else src="~/assets/white.svg" alt="" />
      </div>
    </div>
    <img :src="stepImageSource" alt="">
    <!-- <div class="bg-black fixed inset-0 w-full h-full -z-10" v-else>
      <img src="~/assets/trade-union-title.png" alt="" />
      <img src="~/assets/trade-union-pic.png" alt="" />
      <nuxt-link
        v-if="nextChapter"
        class="skip fixed top-3/4 text-2x1 p-4 border border-black"
        to="/countries/zimbabwe/chaptertwo"
        >Go to next chapter</nuxt-link
      >
    </div> -->
  </div>
</template>

<script>
import a1 from '~/assets/a1.jpg'
import a2 from '~/assets/a2.jpg'
import a3 from '~/assets/a3.jpg'

export default {
  data: () => ({
    duration: '',
    video: 0,
    nextChapter: false,
    showVid: true,
    stepImageSource: a1,
  }),
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll(event) {
      console.log((event.target.scrollingElement.scrollTop))
    },
    handleStep(step) {
      
      this.video = step
      this.vidToShow = videos[step]
      window.scrollTo(0, 0)
    },
  },
}
</script>
<style>
.skip {
  left: 50%;
  border: 1px solid black;
  top: 80%;
}

.cont {
  background-color: black !important;
}

video {
  z-index: -3;
}
.stepNav {
  max-height: 100px;
  right: 7%;
  top: 40%;
}
.conte{
  height: 110vh;
}
</style>