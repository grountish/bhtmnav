<template>
  <div class="main text-center flex flex-col items-center justify-center">
    <img src="~/assets/BTMlogo.png" alt="" />
    <p>
      This is an interactive experience about the lives and needs of healthcare workers from around the world. This
      experience contains sound. Use keyboard and Mouse to navigate.
    </p>
    <nuxt-link to="/intro">Start your journey</nuxt-link>
  </div>
</template>

<script>
export default {
  middleware({ redirect }) {
    return redirect('/countries/zimbabwe/chapterone')
  },
}
</script>
