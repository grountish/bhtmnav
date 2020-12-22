<template>
  <nav v-if="showNav" class="">
    <ul class="flex fixed top-0 inset-x-0 p-6">
      <li class="flex-1 mr-2">
        <nuxt-link class="" to="/"><img src="~/assets/BTMLogoBlack.svg" alt=""></nuxt-link>
      </li>
      <div v-if="showChapNav" class="bg-pink-100 rounded-2xl flex flex-row mx-5 flex-1 justify-around">
        <button v-if="chapter !== 1" @click="navChapter(-1)"><img src="~/assets/l-arrow.svg" alt=""></button>
        <img src="~/assets/chapter-navigation-icon.svg" alt="">
        <h1 class="text-red-600 text-bold my-auto text-xl">CHAPTER NAME</h1>
        <button v-if="chapter !== 3" @click="navChapter(+1)"><img src="~/assets/r-arrow.svg" alt=""></button>
      </div>
      <li class="flex-1 ml-auto">
        <img :src="imgSound" class="sound ml-auto" alt="" @click="switchSound">
      </li>
    </ul>
  </nav>
</template>

<script>
import soundImg from '~/assets/sound.svg'
import noSound from '~/assets/no-sound.svg'
export default {
  name: 'Header',
  data(){
    return{
      showNav:false,
      sound: true,
      imgSound:soundImg,
      showChapNav:false,
      chapter:1
    }
  },
  mounted() {
    
    window.addEventListener('mousemove', (e)=>{
      this.$route.path.indexOf('chapter') === -1 ? this.showChapNav = false : this.showChapNav = true
       e.y < 55 ? this.showNav = true : this.showNav = false
    })
  },
  methods:{
    switchSound(){
      this.sound = !this.sound
      this.sound?this.imgSound=soundImg:this.imgSound=noSound
    },
    navChapter(sum){
      this.chapter = this.chapter + sum
      console.log(this.chapter)
      switch (this.chapter) {
        case 1:
          this.$router.push('/countries/zimbawe/chapterone')
          break;
        case 2:
          this.$router.push('/countries/zimbawe/chaptertwo')
          break;
        case 3:
          this.$router.push('/countries/zimbawe/chapterthree')
          break;
      
        default:
          this.$router.push('/countries/zimbawe/chapterone')
          break;
      }
    }
  }
}
</script>

<style lang="postcss" scoped>
.nuxt-link-exact-active {
  @apply text-accent-100 bg-accent bg-opacity-20;
  &:hover {
    @apply text-white bg-accent-600;
  }
}
.light-mode {
  & .nuxt-link-exact-active {
    @apply text-accent-600;
    &:hover {
      @apply text-white;
    }
  }
}
nav {
  z-index: 3;
}
.sound{
  max-width: 18px;
}
</style>
