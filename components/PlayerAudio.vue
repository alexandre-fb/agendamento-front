<template>
  <div>
    <vue-player
      audio
      :sources="audioSources"
    />
  </div>
</template>

<script setup>
import VuePlayer from "@iomariani/vue-player";
import "@iomariani/vue-player/dist/vue-player.css";

const audioSources = ref({
  "audio/mp3":
    "https://www.bensound.com/bensound-music/bensound-littleplanet.mp3",
});
</script>
