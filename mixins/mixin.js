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
    overSideNav: true,
    opacityPercent: 100
  }),

  mounted() {
    if (window.matchMedia('(max-width: 800px)').matches) {
      this.stepImageSource = mobilePhoto
    }
    window.addEventListener('scroll', this.handleScroll)
    window.addEventListener('mousemove', e => {
      this.x = e.x - 850
      this.y = e.y + 400
      this.direc = `translate(${this.x}px, ${this.y}px)`
      e.x > window.innerWidth - window.innerWidth / 15 ? (this.overSideNav = false) : (this.overSideNav = true)
    })
  },
  methods: {
    handleScroll(event) {
      let sc = event.target.scrollingElement.scrollTop
      let scrollSensitivity = 251
      let opacityPercent =250 - (sc % scrollSensitivity) 
      this.opacityPercent = `${opacityPercent}%`
      if (sc < scrollSensitivity) {
        this.$store.commit('stepNavigation', 0)
      } else if (sc < scrollSensitivity * 2 && sc > scrollSensitivity) {
        this.$store.commit('stepNavigation', 1)
      } else if (sc < scrollSensitivity * 3 && sc > scrollSensitivity * 2) {
        this.$store.commit('stepNavigation', 2)
      } else if (sc > scrollSensitivity * 3) {
        this.$store.commit('stepNavigation', 3)
      }
    },
    goNextChapt() {
      this.$store.commit('increment')
      this.$router.push(`/countries/zimbabwe/${this.nextChapterRoute}`)
    },
    handleStep(step) {
      let videos = [a1, a2, a3, a4]
      this.video = step
      this.stepImageSource = videos[step]
    //   window.scrollTo(0, 0)
    }
  }
}
