<template>
  <div class="intro relative">
    <!-- <transition name="introBg" appear> -->

    <div class="absolute intro__bg">
      <img
        src="../assets/intro_bg.jpg"
        class="intro__bg-img"
        :style="{ transform: 'translateY(' + bgOffsetY + '%)' }"
      />

      <div class="intro__char absolute">
        <img src="../assets/intro_char.png" class="intro__char-img block" />
      </div>
    </div>

    <!-- </transition> -->

    <div class="intro__content clearfix flex flex-column" :style="{ transform: 'translateY(' + -bgOffsetY + '%)' }">
      <div class="sm-col sm-col-12 flex items-center relative flex-auto flex-column justify-center center">
        <img src="../assets/logo.png" alt="Phantom Rose" class="intro__logo block" />

        <div class="intro__text" :style="{ transform: 'translateY(' + bgOffsetY + '%)' }">
          <div class="intro__tagline caps">roguelike deckbuilding card game</div>

          <a
            href="https://store.steampowered.com/app/1054550/Phantom_Rose"
            class="button button--primary button--steam"
          >
            View on STEAM Store
          </a>

          <div class="flex justify-center absolute intro__sub-buttons">
            <a href="https://twitter.com/PhantomRoseGame" class="button button--sub flex items-center justify-center">
              <img src="../assets/twitter.png" />
            </a>

            <a
              href="https://steamcommunity.com/app/1054550/allnews/"
              class="button button--sub flex items-center justify-center"
            >
              <img src="../assets/announcements.png" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  data: () => ({
    bgOffsetY: 0,
  }),

  created() {
    window.addEventListener('scroll', this.handleScroll)
  },

  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
  },

  methods: {
    handleScroll() {
      let variable = 2000
      let offset = (-window.scrollY / variable) * 100
      if (offset < -25) this.bgOffsetY = offset
      else {
        variable = 8000
        this.bgOffsetY = offset
      }
      // this.bgOffsetY = offset
    },
  },
}
</script>

<style lang="scss" scoped>
.intro {
  // max-height: 70rem;
  width: 100%;
}
.intro__header {
  width: 100%;
  top: 0;
  left: 0;
  z-index: 2;
}

.intro__header-border {
  width: 100%;
  height: 0.4rem;
  background: url('../assets/fx-cardglowshadow.png') no-repeat;
  background-size: 100% 100%;
  top: 50%;
  transform: translateY(-50%);
}

.intro__bg {
  left: 50%;
  top: -18%;
  transform: translateX(-50%);
  width: 150%;
  // height: 80vw;
  height: 180%;
  overflow: hidden;

  &:after {
    display: block;
    position: absolute;
    bottom: 0;
    width: 100%;
    content: '';
    left: 0;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 2%, rgba(0, 0, 0, 1) 100%);
    height: 40%;

    @media screen and (max-width: $breakpoint-md) {
      background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 2%, rgba(0, 0, 0, 1) 60%);
    }
  }
}

.intro__bg-img {
  position: relative;
  width: 100%;
  top: -5rem;
  opacity: 0.8;
  animation: bgFadeIn 2000ms ease;
}

.intro__char {
  // top: 120%;
  top: 1%;
  max-width: 260rem;
  width: 100%;
  height: auto;
  left: 50%;
  transform: translateX(-50%) scale(1);
  transform-origin: top;
}

.intro__char-img {
  width: 100%;
  height: auto;
  opacity: 0;
  animation: charFadeIn 2000ms cubic-bezier(0.215, 0.61, 0.355, 1) forwards;
  animation-delay: 800ms;
}

.intro__content {
  margin-bottom: 28%;
  position: relative;
}

.intro__logo-wrap {
  padding: 0 3rem;
  background: $hh-black;
  margin: 2rem auto;
  width: 25%;
  position: relative;
}

.intro__logo {
  width: 55%;
  height: auto;
  margin-top: 28%;
  filter: drop-shadow(0 0 1rem rgba($hh-white, 0.5));
  opacity: 0;

  animation: fadeIn 2000ms ease forwards;
  animation-delay: 1000ms;

  @media screen and (max-width: $breakpoint-md) {
    width: 70%;
  }
}
.intro__text {
  margin-top: 5%;
  animation: fadeIn 1000ms ease forwards;
  animation-delay: 1500ms;
  opacity: 0;
}
.intro__tagline {
  // font-size: $font-size--l;
  position: relative;
  // top: -5rem;
  // font-style: italic;
  // opacity: 0.4;
  text-shadow: 0 0 2rem rgba(#000, 1);

  font-weight: $font-weight--black;
  margin-bottom: 1rem;

  @media screen and (max-width: $breakpoint-sm) {
    font-size: $font-size--m;
  }
}

.button--steam {
  background: url('../assets/steam-logo.png') no-repeat 1rem center $hh-red;
  background-size: auto 65%;
  padding-left: 5rem;
  color: #fff;
  box-shadow: 0 0.8rem 1.2rem 0 rgba(#000, 0.5);

  &:before,
  &:after {
    border-color: $hh-red;
  }

  &:hover {
    filter: drop-shadow(0 0 0.4rem rgba($hh-red--light, 0.7));
    background-color: $hh-red--light;

    &:before,
    &:after {
      border-color: $hh-red--light;
    }
  }
}

.button--sub {
  &:before {
    border-top: 2rem solid transparent !important;
    border-bottom: 2rem solid transparent !important;
    border-right: 1.4rem solid #222;
    left: -1.4rem;
  }

  &:after {
    border-top: 2rem solid transparent !important;
    border-bottom: 2rem solid transparent !important;
    border-left: 1.4rem solid #222;
    right: -1.4rem;
  }

  margin: 0 2.2rem;
  display: flex;
  padding: 0;
  background: #222;
  width: 8rem;
  height: 4rem;
  // border-radius: 2rem;

  img {
    height: 60%;
    width: auto;
    display: block;
  }

  @media screen and (max-width: $breakpoint-sm) {
    height: 3rem;

    &:before {
      border-top: 1.5rem solid transparent !important;
      border-bottom: 1.5rem solid transparent !important;
      border-right: 1.4rem solid #222;
      left: -1.4rem;
    }

    &:after {
      border-top: 1.5rem solid transparent !important;
      border-bottom: 1.5rem solid transparent !important;
      border-left: 1.4rem solid #222;
      right: -1.4rem;
    }
  }

  &:hover {
    filter: brightness(1.5);
  }
}

.intro__tag1 {
  color: $hh-red--dark;
}

.intro__tag2 {
  color: $hh-red;
}

.intro__tag3 {
  color: $hh-grey--lighter;
}

.intro__tag4 {
  // color: $hh-grey--lightest;
}

.introBg-enter {
}

.introBg-enter-to {
}

.introBg-enter-active {
}

@keyframes charFadeIn {
  0% {
    opacity: 0;
    transform: translate3d(-0.5%, 0.5%, 0);
  }

  60% {
    opacity: 1;
  }

  100% {
    opacity: 0.8;
    transform: translate3d(0, 0, 0);
  }
}

@keyframes bgFadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 0.8;
  }
}

.intro__sub-buttons {
  transform: translateX(-50%);
  left: 50%;
  margin-top: 1.5rem;
}
</style>
