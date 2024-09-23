<template>
  <div class="__audio-player">
    <video-player :src="link" audioOnlyMode controls :volume="0.6" />
  </div>
</template>

<script setup>
import { VideoPlayer } from "@videojs-player/vue";
import "video.js/dist/video-js.css";

const props = defineProps({
  link: String,
});
</script>

<style>
.__audio-player .video-js {
  background-color: transparent;
  width: 100%;
}

.__audio-player .vjs-control-bar {
  background: transparent !important;
}

.__audio-player .video-js .vjs-volume-panel {
  position: relative;
  left: 7px;
}

/* Icones play pause return*/
.__audio-player .video-js .vjs-play-control[title="Play"] .vjs-icon-placeholder:before {
  content: "";
  width: 50px;
  height: 50px;
  display: block;
  background-image: url("/images/icon_play.svg");
  background-size: 17px 19px;
  background-repeat: no-repeat;
  border: 3px solid #fff;
  border-radius: 15px;
  background-position: center;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}

.__audio-player .video-js .vjs-play-control[title="Pause"] .vjs-icon-placeholder:before {
  width: 50px;
  height: 50px;
  border: 3px solid #fff;
  border-radius: 15px;
  background-position: center;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  padding-top: 7px;
}

/* barra tempo */
.__audio-player .video-js .vjs-progress-holder {
  height: 26px;
  border-radius: 20px;
  background: transparent;
  border: 3px solid #fff;
}

.__audio-player .video-js .vjs-progress-holder .vjs-load-progress {
  background: #ffffff3c !important;
}


.__audio-player .video-js .vjs-progress-holder .vjs-load-progress div {
  background: transparent !important;
}



.__audio-player .video-js .vjs-progress-holder .vjs-play-progress {
  border-radius: 20px;
}

.__audio-player .video-js .vjs-play-progress:before {
  content: "";
  width: 15px;
  height: 15px;
  border-radius: 50%;
  top: 50%;
  transform: translateY(-50%) scale(1.7);
  background: #f5821f;
  border: 2px solid #fff;
  right: -7px;
}

/*tempo*/
.__audio-player .video-js .vjs-remaining-time.vjs-time-control {
  justify-content: center;
}

.__audio-player .video-js .vjs-remaining-time.vjs-time-control {
  border: 3px solid #fff;
  width: 50px;
  height: 50px;
  border-radius: 15px;
  position: relative;
  top: -10px;
  display: flex;
  align-items: center;
}

.__audio-player .video-js .vjs-remaining-time.vjs-time-control span {
  color: #000;
  font-size: 13px;
  font-weight: 700;
}
</style>

