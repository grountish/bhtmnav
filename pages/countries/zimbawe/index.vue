<template>
  <div ref="input" class="overflow-hidden" :style="{ height: duration }">
    <video
      ref="video"
      :class="['fixed inset-0 w-full h-full -z-10', 'object-cover']"
      :src="vid"
      muted
      loop
      playsinline
    />
  </div>
</template>

<script>
export default {
  data: () => ({
    vid: 'https://www.html5rocks.com/tutorials/video/basics/Chrome_ImF.webm',
    vid2: 'https://res.cloudinary.com/grountish/video/upload/v1607989129/acd_wj1h23.mp4',
    duration: '',
    video: 1,
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
        }
      })
    },
  },
}
</script>
