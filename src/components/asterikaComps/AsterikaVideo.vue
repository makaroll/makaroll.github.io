<template lang="html">
  <div class="asterika-video flex">
    <!-- Using Sapphire's video as placeholder -->
    <div class="asterika-video__player asterika-video__player--full">
      <video src="/apppreview-asterika.mp4" autoplay muted playsinline loop />
    </div>
  </div>
</template>

<script>
export default {
  name: 'AsterikaVideo',
}
</script>

<style lang="scss" scoped>
/* Styles adapted from SapphireVideo.vue */
.asterika-video {
  width: 100%;
  position: absolute;
  overflow: hidden;
  top: 0;
  left: 0;
  height: 100%;
  z-index: 0;
  top: -0.5%;

  @media screen and (max-width: $breakpoint-sm) {
    transform: scale(3);

    transform-origin: top;
  }
}

.asterika-video__player {
  z-index: -1; // Keep behind content

  &--full {
    display: block;
    position: absolute;
    width: 100%;
    height: 0;
    padding-bottom: 100%; // Maintain aspect ratio for background
    opacity: 0.6; // Adjust opacity for bright theme if needed
    top: 0;
    overflow: hidden;

    @media screen and (min-width: $breakpoint-sm) {
      opacity: 0.5; // Adjust opacity
    }

    // Adjust gradient to fade to Asterika's background ($aste-white)
    &:after {
      width: 100%;
      height: 100vh; // Or adjust height
      display: block;
      content: '';
      position: absolute;
      bottom: 0;
      // Example: Fade out more subtly or to a different color
      // background: linear-gradient(to bottom, rgba($aste-white, 0) 80%, $aste-white 100%);
    }

    video {
      width: 100%;
      position: absolute;
      top: 0;
      // Consider filter: brightness(1.1) contrast(0.9); etc. to match bright theme
    }
  }
}
</style>
