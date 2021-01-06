<template>
  <div :class="[video === 3 && overSideNav ? 'curs' : '', 'conte']" >
    <img :src="stepImageSource" class="stepImg" alt="st" />
    <img v-if="video === 3 && overSideNav" src="~/assets/Cursor.svg" :style="{ transform: direc }" @click="goNextChapt" class="absolute cursor" alt="a" />
  </div>
</template>

<script>
import a1 from '~/assets/a1.jpg'
import a2 from '~/assets/a2.jpg'
import a3 from '~/assets/a3.jpg'
import a4 from '~/assets/a4.jpg'
import {mixin} from '~/mixins/mixin';
export default {
  mixins:[mixin],
  data: ()=>({
    nextChapterRoute:'chapterone'
  }),
  computed: {
    stepImg() {
      switch (this.$store.state.video) {
        case 0:
          return a1
          break
        case 1:
          return a2
          break
        case 2:
          return a3
          break
        case 3:
          return a4
          break

        default:
          return a3
          break
      }
    },
  },
}
</script>