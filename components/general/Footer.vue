<template>
  <nav v-if="this.$store.state.video === 3" class="">
    <ul class="flex justify-between fixed bottom-0 inset-x-0 p-6 my-2">
      <li>
        <div
          v-show="this.$store.state.counter !== 1"
          @click="navChapter(-1)"
          @mouseover="chapterHover"
          @mouseleave="chapterUnhover"
          class="bg-pink-100 rounded-3xl border border-solid border-red-200 flex flex-row mx-5 px-3 py-2 flex-1 cursor-pointer justify-around"
        >
          <button><img src="~/assets/left-arrow.svg" class="right-arrow" alt="asd" /></button>
          <h1 v-if="showChapNav" class="text-red-600 text-bold my-auto mx-4 text-xl">
            CHAPTER {{ this.$store.state.counter - 1 }}
          </h1>
        </div>
      </li>
      <li>
        <div
          v-show="this.$store.state.counter !== 3"
          @click="navChapter(+1)"
          @mouseover="chapterHover"
          @mouseleave="chapterUnhover"
          class="bg-pink-100 rounded-3xl border border-solid border-red-200 flex flex-row mx-5 px-3 py-2 flex-1 cursor-pointer justify-around"
        >
          <h1 v-if="showChapNav" class="text-red-600 text-bold my-auto mx-4 text-xl">
            CHAPTER {{ this.$store.state.counter + 1 }}
          </h1>
          <button><img src="~/assets/r-arrow.svg" class="w-2 lg:w-4" alt="asd" /></button>
        </div>
      </li>
    </ul>
  </nav>
</template>

<script>
import soundImg from '~/assets/sound.svg'
import noSound from '~/assets/no-sound.svg'
export default {
  name: 'Header',
  data() {
    return {
      showNav: true,
      sound: true,
      imgSound: soundImg,
      showChapNav: false,
      chapter: 1,
      chap: this.$store.state.counter,
    }
  },
  mounted() {
    // window.addEventListener('mousemove', (e) => {
    //   this.$route.path.indexOf('chapter') === -1 ? (this.showChapNav = false) : (this.showChapNav = true)
    //    e.y > 500 ? this.showChapNav = true : this.showChapNav = false
    // })
    window.addEventListener('scroll', this.handleScroll)

    this.$route.path.indexOf('one') !== -1 && this.$store.commit('one')
    this.$route.path.indexOf('two') !== -1 && this.$store.commit('two')
    this.$route.path.indexOf('three') !== -1 && this.$store.commit('three')
  },
  methods: {
    switchSound() {
      this.sound = !this.sound
      this.sound ? (this.imgSound = soundImg) : (this.imgSound = noSound)
    },
    chapterHover() {
      this.showChapNav = true
    },
    chapterUnhover() {
      this.showChapNav = false
    },
    handleScroll(event) {
      let sc = event.target.scrollingElement.scrollTop

      if (sc > 60) {
        this.showNav = false
      } else {
        this.showNav = true
      }
    },
    navChapter(sum) {
      this.chapter = this.chapter + sum
      console.log(this.chapter)
      if (sum === +1) {
        switch (this.$store.state.counter) {
          case 1:
            this.$store.commit('increment')
            this.$router.push('/countries/zimbabwe/chaptertwo')
            break
          case 2:
            this.$store.commit('increment')
            this.$router.push('/countries/zimbabwe/chapterthree')
            break
          case 3:
            this.$store.commit('increment')
            this.$router.push('/countries/zimbabwe/chapterthree')
            break

          default:
            this.$router.push('/countries/zimbabwe/chapterone')
            break
        }
      } else if (sum === -1) {
        switch (this.$store.state.counter) {
          case 1:
            this.$store.commit('decrement')
            this.$router.push('/countries/zimbabwe/chapterone')
            break
          case 2:
            this.$store.commit('decrement')

            this.$router.push('/countries/zimbabwe/chapterone')
            break
          case 3:
            this.$store.commit('decrement')
            this.$router.push('/countries/zimbabwe/chaptertwo')
            break

          default:
            this.$router.push('/countries/zimbabwe/chapterone')
            break
        }
      }
    },
  },
}
</script>

<style scoped>
.right-arrow {
  width: 13px;
}
nav {
  z-index: 3;
}
.sound {
  max-width: 18px;
}
</style>
