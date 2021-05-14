<template>
  <div :class="[this.$store.state.video === 3 && overSideNav ? 'curs' : '', 'conte']">
    <img :src="stepImg" class="stepImg fixed inset-0" alt="st" :style="{opacity: opacityPercent }" />
    <img
      v-if="this.$store.state.video === 3 && overSideNav"
      src="~/assets/Cursor.svg"
      :style="{ transform: direc}"
      @click="goNextChapt"
      class="absolute cursor"
      alt="a"
    />
  </div>
</template>

<script>
import a1 from '~/assets/a1.jpg'
import a2 from '~/assets/a2.jpg'
import a3 from '~/assets/a3.jpg'
import a4 from '~/assets/a4.jpg'
import { mixin } from '~/mixins/mixin'
export default {
  mixins: [mixin],
  data: () => ({
    nextChapterRoute: 'chaptertwo',
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
<style >
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
  height: 240vh;
  width: 100vw;
}
.stepImg{
  z-index: -10 !important;
}
</style>