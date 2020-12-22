<template>
  <div class="flex flex-row w-full" >
    <div class=" w-1/4 h-screen " @mouseover="showInfo = 1"><nuxt-link to="countries/zimbawe/chapterone"> <video class="" src="~/assets/place1.mp4" muted ></video> <div v-if="showInfo === 1"><h1>Zimbabwe</h1><h5>Trish</h5></div> </nuxt-link></div>
    <div class=" w-1/4 h-screen blur" @mouseover="showInfo = 2"><nuxt-link to="zimbawe"><video src="~/assets/place2.mp4" muted ></video> <div v-if="showInfo === 2"> <h1>country</h1><h5>info</h5></div></nuxt-link></div>
    <div class=" w-1/4 h-screen blur" @mouseover="showInfo = 3"><nuxt-link to="zimbawe"><video src="~/assets/place3.mp4" muted ></video> <div v-if="showInfo === 3"> <h1>country</h1><h5>info</h5></div></nuxt-link></div>
    <div class=" w-1/4 h-screen blur" @mouseover="showInfo = 4"><nuxt-link to="zimbawe"><video src="~/assets/place4.mp4" muted ></video> <div v-if="showInfo === 4"> <h1>country</h1><h5>info</h5></div></nuxt-link></div>
  </div>
</template>

<script>
export default {
  data:()=>({
    showInfo:0
  })
}
</script>

<style scoped>
video{
   -webkit-filter: grayscale(100%);
   -moz-filter: grayscale(100%);
   -ms-filter: grayscale(100%);
   -o-filter: grayscale(100%);
   filter: grayscale(100%);
}
video:hover{
   -webkit-filter: grayscale(0%);
   -moz-filter: grayscale(0%);
   -ms-filter: grayscale(0%);
   -o-filter: grayscale(0%);
   filter: grayscale(0%);
}
.blur {
   -webkit-filter: blur(9px);
   -moz-filter: blur(9px);
   -ms-filter: blur(9px);
   -o-filter: blur(9px);
  filter:blur(9px);
}
</style>