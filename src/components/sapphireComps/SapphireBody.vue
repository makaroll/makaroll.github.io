<template>
  <div class="sapphire-body ml3 mr3 sm-col-10 lg-col-7 relative">
    <div class="flex flex-column items-center">
      <div class="sapphire-body__intro-img-container relative">
        <div class="sapphire-body__intro-img-wrapper">
          <Trailer :borderless="true" :url="videoUrl" />
        </div>
        <p class="sapphire-body__about">
          {{ $t('ui.desc.gameSaph') }}
        </p>
      </div>
    </div>

    <SapphireScreens />
  </div>
</template>
<script>
import SapphireScreens from './SapphireScreens'
import Trailer from '../Trailer.vue'
export default {
  name: '',
  data: () => ({}),

  computed: {
    videoUrl() {
      let defaultPath = 'https://www.youtube.com/embed/ubttcWii_sc'

      if (this.$lang === 'ko') defaultPath = 'https://www.youtube.com/embed/r6pnJA1XB3w'
      if (this.$lang === 'jp') defaultPath = 'https://www.youtube.com/embed/0ydiSL4iJFk'

      return defaultPath
    },
  },

  components: {
    SapphireScreens,
    Trailer,
  },
}
</script>
<style lang="scss">
.sapphire-body {
  // box-sizing: content-box;
  margin-top: 2rem;
}
.sapphire-border {
  margin-top: 0;
}

.sapphire-body__about {
  font-size: $font-size--xl;
  z-index: 1;
  // padding: 0 1rem;
  max-width: 70rem;

  @media screen and (min-width: $breakpoint-sm) {
    font-size: $font-size--xl + 0.4rem;
    margin-bottom: 8rem;
  }
}

.sapphire-body__intro-img-container {
  width: 100%;
  min-height: 28rem;
  overflow: hidden;
  margin-top: 4rem;
  // border-radius: 2rem;
  // background: rgb(3, 8, 65);

  img {
    width: 120%;
    // left: 50%;
    // transform: translateX(-50%);
    // position: absolute;
    // top: 0;
    margin-left: -8%;

    // margin-top: -20%;
  }

  @media screen and (min-width: $breakpoint-sm) {
    margin-top: 10rem;
  }
}

.sapphire-new-announcement {
  background: rgb(0, 10, 78);
  text-align: center;
  // padding: 1rem 3rem;
  margin-bottom: 4rem;

  h2 {
    padding: 3rem 3rem 0;
  }

  .sapphire-new-announcement__movie {
    padding: 0 3rem 1.5rem;

    @media screen and (max-width: $breakpoint-md) {
      padding: 0 1rem 0rem;
    }
  }

  p {
    font-size: $font-size--xl;
    padding: 2rem 3rem;
    background: rgb(0, 24, 128);
    opacity: 1;
    margin-bottom: 0;
  }
}

.sapphire-body__intro-img-wrapper {
  position: relative;
  // &:after {
  //   width: 100%;
  //   height: 80%;
  //   display: block;
  //   content: '';
  //   position: absolute;
  //   bottom: 0;
  //   background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, #000 90%);
  // }
}

.sapphire-body__details {
  margin-bottom: 6rem;
}

.button--sub {
  // margin: 0 2.2rem;
  margin: 0 1rem 1rem;
  display: flex;
  padding: 0;
  background: #2232b9;
  // width: 8rem;
  height: 5rem;
  border-radius: 0.9rem;
  max-width: 50%;

  &:before,
  &:after {
    display: none;
    content: none;
  }

  img {
    height: 50%;
    width: auto;
    display: block;
    opacity: 0.8;
  }

  @media screen and (min-width: $breakpoint-sm) {
    height: 5rem;
    max-width: 50% !important;
  }

  &:hover {
    filter: brightness(1.5);
  }
}

.sapphire-new-announcement__buttons {
  padding-bottom: 1.5rem;
  background: #001880;
}
</style>
