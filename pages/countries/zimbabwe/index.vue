<template>
  <div class="flex flex-row w-full">
    <div class="w-1/3 h-screen">
      <nuxt-link to="/countries/zimbabwe/chapterone"><h1>chapter1</h1></nuxt-link>
    </div>
    <div class="w-1/3 h-screen">
      <nuxt-link to="/countries/zimbabwe/chaptertwo"><h1>chapter2</h1></nuxt-link>
    </div>
    <div class="w-1/3 h-screen">
      <nuxt-link to="/countries/zimbabwe/chapterthree"><h1>chapter3</h1></nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
    middleware ({ redirect }) {
    return redirect('/countries/zimbabwe/chapterone')
  },
}
</script>

<style>
</style>