<template>
  <div class="__video-player max-w-[978px] h-full">
    <video-player :src="link" controls :volume="0.6" />
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
.__video-player .video-js {
  width: 100%;
  height: 100%;
}

/* Barra de controle do player */
.__video-player .vjs-has-started .vjs-control-bar {
  height: 50px;
  background: #fff;
  bottom: -50px;
}

/* Icone PLAY */
.__video-player .video-js .vjs-play-control[title="Play"] .vjs-icon-placeholder:before {
  content: "";
  width: 50px;
  height: 50px;
  display: block;
  background-image: url("/images/icon-play-video.svg");
  background-size: 17px 19px;
  background-repeat: no-repeat;
  background-position: center;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}

.__video-player .video-js .vjs-play-control[title="Pause"] .vjs-icon-placeholder:before {
  width: 50px;
  height: 50px;
  color: #000;
  border-radius: 15px;
  background-position: center;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  padding-top: 10px;
  box-shadow: none;
}

.__video-player .video-js .vjs-play-control[title="Replay"] .vjs-icon-placeholder:before {
  width: 50px;
  height: 50px;
  color: #000;
  border-radius: 15px;
  background-position: center;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  padding-top: 10px;
  box-shadow: none;
}

/* Icon Volume */
.__video-player .video-js .vjs-mute-control.vjs-vol-0 .vjs-icon-placeholder:before,
.__video-player .video-js .vjs-mute-control.vjs-vol-2 .vjs-icon-placeholder:before {
  width: 50px;
  height: 50px;
  color: #000;
  border-radius: 15px;
  background-position: center;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  padding-top: 10px;
  box-shadow: none;
}

/*Barra volume*/
.__video-player .video-js .vjs-volume-panel .vjs-volume-control.vjs-volume-horizontal {
  height: 100%;
  top: 8px;
}

.__video-player .vjs-volume-bar.vjs-slider-horizontal {
  background: #b3b3b3;
}

.__video-player .vjs-volume-bar.vjs-slider-horizontal .vjs-volume-level {
  background: black;
}

/*Barra de carregamento*/ 
.__video-player .vjs-slider-horizontal .vjs-volume-level:before {
  top: 0;
  color: black;
}

.__video-player .video-js .vjs-big-play-button {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin-top: 0;
  margin-left: 0;
  border: 3px solid white;
  background: #f5821f;
}

.__video-player .video-js .vjs-progress-holder .vjs-play-progress {
  background: red;
}

.__video-player .video-js .vjs-play-progress:before {
  top: 0;
  color: red;
}

.__video-player .video-js .vjs-progress-holder .vjs-load-progress div {
  background: #b3b3b3;
}

/*Tempo do video*/
.__video-player .video-js .vjs-time-control {
  color: #000;
  top: 9px;
}

/*Ajustes do tamanho da tela*/


.__video-player .video-js .vjs-picture-in-picture-control{ 
  display: none;
}

/*Botão full-screen*/
.__video-player .vjs-icon-fullscreen-enter:before, .video-js .vjs-fullscreen-control .vjs-icon-placeholder:before  {
  color: #000;
  padding-top: 9px;
}
</style>
