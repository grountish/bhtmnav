import a1 from '~/assets/a1.jpg'
import a2 from '~/assets/a2.jpg'
import a3 from '~/assets/a3.jpg'
import a4 from '~/assets/a4.jpg'
import mobilePhoto from '~/assets/mobile-photo.jpg'

export const mixin = {
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
    overSideNav: true
  }),

  mounted() {
    if (window.matchMedia('(max-width: 800px)').matches) {
      this.stepImageSource = mobilePhoto
    }
    window.addEventListener('scroll', this.handleScroll)
    window.addEventListener('mousemove', e => {
      this.x = e.x - 850
      this.y = e.y - 480
      this.direc = `translate(${this.x}px, ${this.y}px)`
      e.x > window.innerWidth - window.innerWidth / 15 ? (this.overSideNav = false) : (this.overSideNav = true)
    })
  },
  methods: {
    handleScroll(event) {
      let sc = event.target.scrollingElement.scrollTop
      if (sc < 20) {
          this.$store.commit('stepNavigation', 0)
      } else if (sc < 40 && sc > 20) {
          this.$store.commit('stepNavigation', 1)
      } else if (sc < 60 && sc > 40) {
          this.$store.commit('stepNavigation', 2)
      } else if (sc > 60) {
          this.$store.commit('stepNavigation', 3)
      }
    },
    goNextChapt() {
      this.$store.commit('increment')
      this.$router.push(`/countries/zimbabwe/${this.nextChapterRoute}`)
    },
    handleStep(step) {
    //   this.$store.commit('stepNavigation', step)
      let videos = [a1, a2, a3, a4]
      this.video = step
      this.stepImageSource = videos[step]
      window.scrollTo(0, 0)
    }
  }
}
