<template lang="html">
  <div class="scarlet-video flex">
    <div class="scarlet-video__player scarlet-video__player--phone absolute">
      <transition name="fade" appear>
        <video src="/apppreview.mp4" autoplay muted playsinline loop />
      </transition>
      <img src="@/assets/scarlet/ipx2.png" class="absolute scarlet-video__phone-frame" />
    </div>
    <div class="scarlet-video__player scarlet-video__player--full">
      <video src="/apppreview.mp4" autoplay muted playsinline loop />
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.scarlet-video {
  width: 100%;
  position: absolute;
  overflow: hidden;
  top: 0;

  @media screen and (min-width: $breakpoint-sm) {
    position: relative;
    justify-content: center;
  }
}

.scarlet-video__player {
  z-index: -1;

  &--phone {
    display: none;
  }

  &--full {
    display: block;
    position: absolute;
    width: 100%;
    height: 0;
    padding-bottom: 160%;
    opacity: 0.8;
    top: 0;
    overflow: hidden;

    &:after {
      width: 100%;
      height: 30vh;
      display: block;
      content: '';
      position: absolute;
      bottom: 0;
      background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, #000 100%);
    }

    video {
      width: 100%;
      position: absolute;
      top: 0;
      transform: translateY(-11%);
    }
  }
  @media screen and (min-width: $breakpoint-sm) {
    // background: red;
    &--full {
      display: none;
    }

    &--phone {
      display: block;
    }

    video {
      width: 84%;
      top: 0%;
      left: 50%;
      transform: translate3d(-49%, 0%, 0);
      position: relative;
    }
  }
}
.scarlet-video__player--phone {
  top: 50%;
  transform: translateY(-50%);
}
.scarlet-video__phone-frame {
  width: 130%;
  // height: 110%;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -49%, 0);
}
</style>
