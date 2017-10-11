<template>
  <svg
    :style="{width: `${size}px`, height: `${size}px`}"
    class="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"><circle class="checkmark__circle" cx="26" cy="26" r="25" fill="none"/><path class="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/></svg>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      size: {
        default () {
          return 56
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '~assets/shared.scss';

  $curve: cubic-bezier(0.650, 0.000, 0.450, 1.000);

  .checkmark__circle {
    stroke-dasharray: 166;
    stroke-dashoffset: 166;
    stroke-width: 2;
    stroke-miterlimit: 10;
    stroke: $secondary;
    fill: none;
    animation: stroke .6s $curve forwards;
  }

  .checkmark {
    width: 56px;
    height: 56px;
    border-radius: 50%;
    display: block;
    stroke-width: 2;
    stroke: $secondary;
    stroke-miterlimit: 10;
    margin: 0 auto;
    box-shadow: inset 0px 0px 0px $secondary;
    animation: scale .3s ease-in-out .9s both;
  }

  .checkmark__check {
    transform-origin: 50% 50%;
    stroke-dasharray: 48;
    stroke-dashoffset: 48;
    animation: stroke .3s $curve .8s forwards;
  }

  @keyframes stroke {
    100% {
      stroke-dashoffset: 0;
    }
  }

  @keyframes scale {
    0%, 100% {
      transform: none;
    }
    50% {
      transform: scale3d(1.1, 1.1, 1);
    }
  }
</style>
