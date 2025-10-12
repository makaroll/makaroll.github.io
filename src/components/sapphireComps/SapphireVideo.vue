<template lang="html">
  <div class="sapphire-video flex">
    <div class="sapphire-video__player sapphire-video__player--full">
      <video src="/apppreview-saph.mp4" autoplay muted playsinline loop />
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.sapphire-video {
  width: 100%;
  position: absolute;
  overflow: hidden;
  top: 0;
  left: 0;

  @media screen and (min-width: $breakpoint-sm) {
    top: -5%;
  }
}

.sapphire-video__player {
  z-index: -1;

  &--full {
    display: block;
    position: absolute;
    width: 100%;
    height: 0;
    padding-bottom: 100%;
    opacity: 0.9;
    top: 0;
    overflow: hidden;

    @media screen and (min-width: $breakpoint-sm) {
      opacity: 0.7;
    }

    &:after {
      width: 100%;
      height: 100vh;
      display: block;
      content: '';
      position: absolute;
      bottom: 0;
      background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 50%, #000117 100%);
    }

    video {
      width: 100%;
      position: absolute;
      top: 0;
    }
  }
}
.sapphire-video__player--phone {
  top: 50%;
  transform: translateY(-50%);
}
.sapphire-video__phone-frame {
  width: 130%;
  // height: 110%;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -49%, 0);
}
</style>
