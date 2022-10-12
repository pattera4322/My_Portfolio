<script setup>
import { ref, onBeforeMount } from "vue";
const musicOn = ref(true);
const musicPause = "musicpause";
const musicPlay = "musicplay";
const audio = new Audio("public/song.mp3");
const playMusic = (musicOn) => (musicOn == true ? audio.pause() : audio.play());
const play = "public/play.png";
const pause = "public/pause.png";
</script>

<template>
  <div class="body">
    <div v-if="$route.path == '/'">
      <img src="ELsa2.png" class="elsa center" />
      <router-link :to="{ name: 'Play' }">
        <div class="playImg">
          <img src="PlayGame.png" width="100" height="100" />
        </div>
      </router-link>
    </div>
    <div
      :class="musicOn == true ? musicPause : musicPlay"
      @click="
        playMusic(!musicOn),
          musicOn == true ? (musicOn = false) : (musicOn = true)
      "
    >
      <img :src="musicOn == true ? play : pause" class="music" />
    </div>
      <router-view> </router-view>
  </div>

</template>

<style scoped>
.playImg {
  height: 85px;
  width: inherit;
  padding-top: 220px;
  bottom: 0;
}

.music {
  width: 80px;
  height: 80px;
  position: fixed;
  bottom: 0;
  right: 0;
  margin: 10px;
  z-index: 999;
}
.body {
  text-align: center;
  background-image: radial-gradient(at 1% 17%, #f3d1f4, transparent 50%),
    radial-gradient(at 80% 10%, #f5fcc1, transparent 50%),
    radial-gradient(at 90% 90%, #bae5e5, transparent 50%),
    radial-gradient(at 14% 91%, #98d6ea, transparent 50%);
  /* background-attachment: fixed; */
  position: sticky;
  height: 100vh;
  overflow: auto;
}
.elsa {
  width: 1200px;
  height: 550px;
  animation-name: elsamove;
  animation-duration: 4s;
  animation-iteration-count: infinite;
  position: relative;
}

@keyframes elsamove {
  0% {
    bottom: 0px;
    top: 0px;
  }
  50% {
    bottom: 150px;
    top: 150px;
  }
  100% {
    bottom: 0px;
    top: 0px;
  }
}
</style>
