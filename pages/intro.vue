<template>
  <div>
    <video
      ref="video"
      :class="['fixed inset-0 w-full h-full -z-10', 'object-cover']"
      :src="vid"
      muted
      loop
      playsinline
      autoplay
    />
    <nuxt-link class="skip fixed top-3/4 text-2x1 text-red-500 p-6 border border-black bg-white-100" to="/countries"
      ><h1>skip intro</h1></nuxt-link
    >
  </div>
</template>
<script>
export default {
  data: () => ({
    vid: 'https://res.cloudinary.com/grountish/video/upload/v1607989129/acd_wj1h23.mp4',
  }),
  middleware({ redirect }) {
    return redirect('/countries/zimbabwe/chapterone')
  },
}
</script>
<style>
.skip {
  left: 46%;
  border: 1px solid black;
  top: 80%;
}
</style>