<template>
  <div class="sapphire-screens relative">
    <div
      class="sapphire-screens__gallery mxn2 clearfix relative"
      v-viewer="{
        navbar: false,
        title: false,
        zoomable: false,
        rotatable: false,
        scalable: false,
        movable: false,
        toolbar: { reset: 0, prev: 1, next: 1 },
      }"
    >
      <div
        class="sapphire-screens__img-content mb3 px2 col col-6 md-col-6 lg-col-4"
        v-for="image in images"
        :key="image.src"
      >
        <div class="sapphire-screens__img">
          <img :src="image.src" :alt="image.title" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import 'viewerjs/dist/viewer.css'
import Viewer from 'v-viewer'
import Vue from 'vue'
Vue.use(Viewer)

export default {
  name: '',
  data: () => ({
    publicPath: process.env.BASE_URL,
    images: [
      {
        src: process.env.BASE_URL + 'screens/sapphire/1.jpg',
        title: 'screenshot 1',
      },
      {
        src: process.env.BASE_URL + 'screens/sapphire/2.jpg',
        title: 'screenshot 2',
      },
      {
        src: process.env.BASE_URL + 'screens/sapphire/3.jpg',
        title: 'screenshot 3',
      },
      {
        src: process.env.BASE_URL + 'screens/sapphire/4.jpg',
        title: 'screenshot 4',
      },
      {
        src: process.env.BASE_URL + 'screens/sapphire/5.jpg',
        title: 'screenshot 5',
      },
      {
        src: process.env.BASE_URL + 'screens/sapphire/6.jpg',
        title: 'screenshot 6',
      },
      {
        src: process.env.BASE_URL + 'screens/sapphire/7.jpg',
        title: 'screenshot 7',
      },
      {
        src: process.env.BASE_URL + 'screens/sapphire/8.jpg',
        title: 'screenshot 8',
      },
      {
        src: process.env.BASE_URL + 'screens/sapphire/9.jpg',
        title: 'screenshot 9',
      },

      {
        src: process.env.BASE_URL + 'screens/sapphire/key1sapphire.jpg',
        title: 'boxart',
      },
      {
        src: process.env.BASE_URL + 'screens/sapphire/key2sapphire.jpg',
        title: 'boxart2',
      },
      {
        src: process.env.BASE_URL + 'screens/sapphire/10.jpg',
        title: 'key',
        landscape: true,
      },
      {
        src: process.env.BASE_URL + 'screens/sapphire/11.jpg',
        title: 'key2',
      },
      {
        src: process.env.BASE_URL + 'screens/sapphire/logo.png',
        title: 'logo',
      },
    ],
  }),
}
</script>
<style lang="scss" scoped>
.sapphire-screens {
  // padding: 0 1rem;
  margin-top: 3rem;
  margin-bottom: 2rem;
}
.sapphire-screens__img-content {
}
.sapphire-screens__img {
  width: 100%;
  height: 0;
  background: rgba(rgb(17, 0, 214), 0.2);

  padding-bottom: 56.25%;
  overflow: hidden;
  transition: all 200ms ease;
  position: relative;
  img {
    width: 100%;
    // margin-top: -15%;
    position: absolute;
  }

  &:hover {
    border-color: $hh-white;
    box-shadow: 0 0 2rem rgba($hh-white, 0.3);
  }

  img[alt='logo'] {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0.9);
  }
}

.sapphire-screens__gallery--key {
  .sapphire-screens__img {
    &--landscape img {
      margin-top: 0;
      width: auto;
      height: 100%;
    }
  }
}
</style>
