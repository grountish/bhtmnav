<template>
  <div :class="[video === 3 ? 'curs' : '', 'conte']" >
    <div class="stepNav fixed flex flex-col justify-center">
      <div @click="handleStep(0)">
        <img v-if="video === 0" src="~/assets/step-nav-arrows.svg" alt="" />
        <img v-else src="~/assets/navigation-circle.svg" alt="" />
      </div>
      <img src="~/assets/dots.svg" alt="" />
      <div @click="handleStep(1)">
        <img v-if="video === 1" src="~/assets/step-nav-arrows.svg" alt="" />
        <img v-else src="~/assets/navigation-circle.svg" alt="" />
      </div>
      <img src="~/assets/dots.svg" alt="" />
      <div @click="handleStep(2)">
        <img v-if="video === 2" src="~/assets/step-nav-arrows.svg" alt="" />
        <img v-else src="~/assets/navigation-circle.svg" alt="" />
      </div>
      <img src="~/assets/dots.svg" alt="" />
      <div @click="handleStep(3)">
        <img v-if="video === 3" src="~/assets/step-nav-arrows.svg" alt="" />
        <img v-else src="~/assets/navigation-circle.svg" alt="" />
      </div>
    </div>
    <img :src="stepImageSource" class="stepImg" alt="st" />
    <img v-if="video === 3" src="~/assets/Cursor.svg" :style="{ transform: direc }" @click="goNextChapt" class="absolute cursor" alt="a" />
  </div>
</template>

<script>
import a1 from '~/assets/a1.jpg'
import a2 from '~/assets/a2.jpg'
import a3 from '~/assets/a3.jpg'
import a4 from '~/assets/a4.jpg'
export default {
  data: () => ({
    duration: '',
    video: 0,
    nextChapter: false,
    showVid: true,
    stepImageSource: a1,
    myCursor: 'normal',
    x: 1,
    y: 1,
    direc: '',
  }),
  mounted() {
    window.addEventListener('scroll', this.handleScroll)

    window.addEventListener('mousemove', (e) => {
      this.x = e.x - 800
      this.y = e.y - 400
      this.direc = `translate(${this.x}px, ${this.y}px)`
    })
  },
  methods: {
    handleScroll(event) {
      let sc = event.target.scrollingElement.scrollTop
      if (sc < 20) {
        this.stepImageSource = a1
        this.video = 0
      } else if (sc < 40 && sc > 20) {
        this.stepImageSource = a2
        this.video = 1
      } else if (sc < 60 && sc > 40) {
        this.stepImageSource = a3
        this.video = 2
      } else if (sc > 60) {
        this.stepImageSource = a4
        this.video = 3
      }
    },
    goNextChapt(){
      console.log("object");
      this.$router.push('/countries/zimbabwe/chapterthree')
    },
    handleStep(step) {
      let videos = [a1, a2, a3, a4]
      this.video = step
      this.stepImageSource = videos[step]
      window.scrollTo(0, 0)
    },
  },
}
</script>
<style scoped>
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
  right: 3%;
  top: 40%;
  z-index: 3;
}
.cursor {
  position: absolute;
  width: 400px;
  top: 50%;
  left: 50%;

}

.curs {
  cursor: none;
}


.stepNav img {
  margin: auto;
}

.conte {
  height: 110vh;
  width: 100vw;
}
</style>