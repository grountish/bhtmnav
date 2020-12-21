<template>
  <div ref="input" class="overflow-hidden bg-black cont" :style="{ height: duration }">
    <video
      ref="video"
      v-if="showVid"
      :class="['fixed inset-0 w-full h-full -z-10', 'object-cover']"
      :src="vid"
      muted
      loop
      playsinline
    />
    <div class="bg-black fixed inset-0 w-full h-full -z-10" v-else >
      <img src="~/assets/trade-union-title.png" alt="">
      <img src="~/assets/trade-union-pic.png" alt="">
      <nuxt-link v-if="nextChapter" class="skip fixed top-3/4 text-2x1 p-4 border border-black" to="/countries/zimbawe/chaptertwo">Go to next chapter</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    vid: 'https://www.html5rocks.com/tutorials/video/basics/Chrome_ImF.webm',
    vid2: 'https://res.cloudinary.com/grountish/video/upload/v1607989129/acd_wj1h23.mp4',
    duration: '',
    video: 1,
    nextChapter: false,
    showVid: true,
  }),
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
    this.$refs.video.addEventListener('loadedmetadata', () => {
      this.duration = this.$refs.video.duration * 400 + 'px'
    })
  },
  methods: {
    handleScroll(event) {
      window.requestAnimationFrame(() => {
        this.$refs.video.currentTime = event.target.scrollingElement.scrollTop / 400
        if (this.video === 1 && event.target.scrollingElement.scrollTop > 5400) {
          this.vid = 'https://res.cloudinary.com/grountish/video/upload/v1607989129/acd_wj1h23.mp4'
          window.scrollTo(0, 0)
          this.video = 2
        }
        if (this.video === 2 && event.target.scrollingElement.scrollTop > 5402) {
          this.vid =
            'https://res.cloudinary.com/grountish/video/upload/v1607990207/final_5fd7fb2506299100a1f0974f_204210_pb9tyt.mp4'
          window.scrollTo(0, 0)
          this.video = 3
        }
        if (this.video === 3 && event.target.scrollingElement.scrollTop > 5402) {
          this.vid =
            'https://res.cloudinary.com/grountish/video/upload/v1607990207/final_5fd7fb2506299100a1f0974f_204210_pb9tyt.mp4'
          window.scrollTo(0, 0)
          this.video = 4
        }
        if (this.video === 4 && event.target.scrollingElement.scrollTop > 4400) {
          this.showVid=false
          this.nextChapter = true
        }
      })
    },
  },
}
</script>
<style>
.skip {
    left:50%;
    border: 1px solid black;
    top:80%;
}

.cont {
  background-color: black !important;
}

video{
  z-index: -3;
}
</style>