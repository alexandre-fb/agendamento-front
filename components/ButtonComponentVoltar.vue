<template>
    <div class="">
      <div class="flex gap-[10px] align-center justify-start">
        <NuxtLink :to="link" class="h-[50px] flex justify-center items-center border-[3px] border-primary px-6 rounded-15 cursor-pointer">
          <component :is="icon" />
        </NuxtLink>
  
        <NuxtLink :to="link" class="h-[50px] flex justify-center items-center border-[3px] border-primary px-6 rounded-15 cursor-pointer">
          <p class="font-bold text-base text-primary-text">{{ text }}</p>
        </NuxtLink>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "ButtonComponentVoltar",
    props: {
      icon: {
        type: Object,
      },
      text: {
        type: String,
      },
      link: {
        type: String,
      }
    },
  };
  </script>
  
  <style>
  
  </style>
  