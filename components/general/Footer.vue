<template>
  <nav v-if="showNav" class="">
    <ul class="flex justify-between fixed bottom-0 inset-x-0 p-6">
      <li>
        <button v-show="chapter !== 1" @click="navChapter(-1)"><img src="~/assets/chapter-arrow.svg" alt="" /></button>
      </li>
      <li>
        <div
          v-if="showChapNav"
          class="bg-pink-100 rounded-3xl border border-solid border-red-500 flex flex-row mx-5 px-6 py-2 flex-1 justify-around"
        >
          <h1 class="text-red-600 text-bold my-auto mx-4 text-xl">CHAPTER {{ this.$store.state.counter + 1}}</h1>
          <button v-show="chapter !== 3" @click="navChapter(+1)"><img src="~/assets/r-arrow.svg" alt="" /></button>
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
      showNav: false,
      sound: true,
      imgSound: soundImg,
      showChapNav: false,
      chapter: 1,
      chap: this.$store.state.counter,
    }
  },
  mounted() {
    window.addEventListener('mousemove', (e) => {
      this.$route.path.indexOf('chapter') === -1 ? (this.showChapNav = false) : (this.showChapNav = true)
      e.y > 500 ? (this.showNav = true) : (this.showNav = false)
    })
  },
  methods: {
    switchSound() {
      this.sound = !this.sound
      this.sound ? (this.imgSound = soundImg) : (this.imgSound = noSound)
    },
    navChapter(sum) {
      this.chapter = this.chapter + sum
      console.log(this.chapter)
      if(sum === +1){
        switch (this.chapter) {
          case 1:
            this.$store.commit('increment')
            this.$router.push('/countries/zimbabwe/chapterone')
            break
          case 2:
            this.$store.commit('increment')
  
            this.$router.push('/countries/zimbabwe/chaptertwo')
            break
          case 3:
            this.$store.commit('increment')
            this.$router.push('/countries/zimbabwe/chapterthree')
            break
  
          default:
            this.$router.push('/countries/zimbabwe/chapterone')
            break
        }
      }
       if(sum === -1){
        switch (this.chapter) {
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
nav {
  z-index: 3;
}
.sound {
  max-width: 18px;
}
</style>
