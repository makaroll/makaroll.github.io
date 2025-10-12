<template>
  <div class="social relative">
    <!-- <div class="social__decor-bg"></div> -->
    <div class="social-buttons justify-center items-center">
      <div class="m2 flex justify-center">
        <a href="https://store.steampowered.com/app/1054550/Phantom_Rose" class="button button--s button--social"
          >STEAM</a
        >
      </div>
      <div class="m2 flex justify-center">
        <a href="https://twitter.com/phantomrosegame" class="button button--s button--social">Twitter</a>
      </div>
      <div class="m2 flex justify-center">
        <a href="https://phantomrosegame.tumblr.com" class="button button--s button--social">Devlog</a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: '',
  data: () => ({}),
}
</script>
<style lang="scss" scoped>
.social {
}
.social__decor-bg {
  height: 60rem;
  background: url(../assets/social_bg.png) center -5rem no-repeat $hh-red--dark;
  background-size: 80%;
  position: absolute;
  top: 0;
  width: 150%;
  left: 50%;
  transform: translateX(-50%);
  // width: 150%;
  // clip-path: polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%);
  // transform: translate3d(-50%, 5%, 0) rotate(-6deg);
  clip-path: polygon(0 30%, 100% 0%, 100% 70%, 0% 100%);
}

.button--social {
  min-width: 12rem;

  @media screen and (max-width: $breakpoint-sm) {
    width: 85%;
    margin-top: 1rem;
  }
}

.social-buttons {
  display: flex;

  &:before,
  &:after {
    content: '';
    display: block;
    width: 100%;
    height: 0.2rem;
    background: $hh-white;
    margin: 0 2rem;
    opacity: 0.2;
  }

  &:before {
    margin-left: 0;
  }

  &:after {
    margin-right: 0;
  }

  @media screen and (max-width: $breakpoint-sm) {
    display: block;

    &:before,
    &:after {
      content: none;
    }
  }
}
</style>
