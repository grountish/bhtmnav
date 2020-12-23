<template>
  <nav v-if="showNav" class="">
    <ul class="flex justify-between fixed bottom-0 inset-x-0 p-6 my-2">
      <li>
        <button v-show="chapter !== 1" @click="navChapter(-1)"><img src="~/assets/chapter-arrow.svg" alt="" /></button>
      </li>
      <li>
        <div @mouseover="chapterHover" @mouseleave="chapterUnhover" v-show="chapter !== 3" class="bg-pink-100 rounded-3xl border border-solid border-red-200 flex flex-row mx-5 px-3 py-2 flex-1 justify-around">
          <h1 v-if="showChapNav" class="text-red-600 text-bold my-auto mx-4 text-xl">CHAPTER {{chapter + 1}}</h1>
          <button  @click="navChapter(+1)"><img src="~/assets/r-arrow.svg" class="right-arrow" alt="" /></button>
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
    }
  },
  mounted() {
    // window.addEventListener('mousemove', (e) => {
    //   this.$route.path.indexOf('chapter') === -1 ? (this.showChapNav = false) : (this.showChapNav = true)
    //    e.y > 500 ? this.showChapNav = true : this.showChapNav = false
    // })
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
    navChapter(sum) {
      this.chapter = this.chapter + sum
      console.log(this.chapter)
      switch (this.chapter) {
        case 1:
          this.$router.push('/countries/zimbabwe/chapterone')
          break
        case 2:
          this.$router.push('/countries/zimbabwe/chaptertwo')
          break
        case 3:
          this.$router.push('/countries/zimbabwe/chapterthree')
          break

        default:
          this.$router.push('/countries/zimbabwe/chapterone')
          break
      }
    },
  },
}
</script>

<style scoped>
.right-arrow{
  width: 13px;
}
nav {
  z-index: 3;
}
.sound {
  max-width: 18px;
}
</style>
