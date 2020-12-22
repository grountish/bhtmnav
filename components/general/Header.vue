<template>
  <nav v-if="showNav" class="">
    <ul class="flex fixed top-0 inset-x-0 p-6">
      <li class="flex-1 mr-2">
        <nuxt-link class="" to="/"><img src="~/assets/BTMLogoBlack.svg" alt="" /></nuxt-link>
      </li>
      <li class="flex-1 ml-auto">
        <img :src="imgSound" class="sound ml-auto" alt="" @click="switchSound" />
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
    }
  },
  mounted() {
    window.addEventListener('mousemove', (e) => {
      this.$route.path.indexOf('chapter') === -1 ? (this.showChapNav = false) : (this.showChapNav = true)
      e.y < 55 ? (this.showNav = true) : (this.showNav = false)
    })
  },
  methods: {
    switchSound() {
      this.sound = !this.sound
      this.sound ? (this.imgSound = soundImg) : (this.imgSound = noSound)
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
