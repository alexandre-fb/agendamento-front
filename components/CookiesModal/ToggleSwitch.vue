<template>
    <label class="switch">
      <input type="checkbox" :checked="checked" :disabled="disabled" @input="onUpdate">
      <span></span>
    </label>
  </template>
  
  <script>
  export default {
    name: "ToggleSwitch",
    props: {
      checked: Boolean,
      disabled: Boolean
    },
    methods: {
      onUpdate(e) {
        this.$emit("updated", e.target.checked);
        console.log('event', e)
      }
    }
  };
  </script>
  
  <style lang="css" scoped>
  .switch input {
    display: none;
  }
  
  .switch input + span {
    width: 48px;
    height: 28px;
    border-radius: 14px;
    transition: all 0.3s ease;
    display: block;
    position: relative;
    background: #ff4651;
    box-shadow: 0 8px 16px -1px rgba(255, 70, 81, 0.2);
    cursor: pointer;
  }
  
  .switch input + span:before,
  .switch input + span:after {
    content: "";
    box-sizing: border-box;
    display: block;
    position: absolute;
    transition: all 0.3s ease;
  }
  
  .switch input + span:before {
    top: 5px;
    left: 5px;
    width: 18px;
    height: 18px;
    border-radius: 9px;
    border: 5px solid #fff;
  }
  
  .switch input + span:after {
    top: 5px;
    left: 32px;
    width: 6px;
    height: 18px;
    border-radius: 40%;
    transform-origin: 50% 50%;
    background: #fff;
    opacity: 0;
  }
  
  .switch input:active + span {
    transform: scale(0.92);
  }
  
  .switch input:checked + span {
    background: #48ea8b;
    box-shadow: 0 8px 16px -1px rgba(72, 234, 139, 0.2);
  }
  
  .switch input:disabled + span {
    opacity: 0.5;
    cursor: default;
  }
  
  .switch input:checked + span:before {
    width: 0px;
    border-radius: 3px;
    margin-left: 27px;
    border-width: 3px;
    background: #fff;
  }
  
  .switch input:checked + span:after {
    animation: blobChecked 0.35s linear forwards 0.2s;
  }
  
  .switch input:not(:checked) + span:before {
    animation: blob 0.85s linear forwards 0.2s;
  }
  
  @keyframes blob {
    0%, 100% {
      transform: scale(1);
    }
  
    30% {
      transform: scale(1.12, 0.94);
    }
  
    60% {
      transform: scale(0.96, 1.06);
    }
  }
  
  @keyframes blobChecked {
    0% {
      opacity: 1;
      transform: scaleX(1);
    }
  
    30% {
      transform: scaleX(1.44);
    }
  
    70% {
      transform: scaleX(1.18);
    }
  
    50%, 99% {
      transform: scaleX(1);
      opacity: 1;
    }
  
    100% {
      transform: scaleX(1);
      opacity: 0;
    }
  }
  
  </style>
  