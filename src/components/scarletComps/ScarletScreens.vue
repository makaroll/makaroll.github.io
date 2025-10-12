<template>
  <div class="scarlet-screens relative">
    <div
      class="scarlet-screens__gallery mxn2 clearfix relative"
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
        class="scarlet-screens__img-content mb3 px2 col col-6 md-col-6 lg-col-4"
        v-for="image in images"
        :key="image.src"
      >
        <div class="scarlet-screens__img">
          <img :src="image.src" :alt="image.title" />
        </div>
      </div>
    </div>

    <div
      class="scarlet-screens__gallery scarlet-screens__gallery--key mxn2 clearfix relative"
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
        class="scarlet-screens__img-content mb3 px2 col col-6 md-col-6 lg-col-4"
        v-for="image in images2"
        :key="image.src"
      >
        <div class="scarlet-screens__img" :class="{ 'scarlet-screens__img--landscape': image.landscape }">
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
        src: process.env.BASE_URL + 'screens/scarlets1.jpg',
        title: 'screenshot 1',
      },
      {
        src: process.env.BASE_URL + 'screens/scarlets2.jpg',
        title: 'screenshot 2',
      },
      {
        src: process.env.BASE_URL + 'screens/scarlets3.jpg',
        title: 'screenshot 3',
      },
      {
        src: process.env.BASE_URL + 'screens/scarlets4.jpg',
        title: 'screenshot 4',
      },
      {
        src: process.env.BASE_URL + 'screens/scarlets5.jpg',
        title: 'screenshot 5',
      },
      {
        src: process.env.BASE_URL + 'screens/scarlets6.jpg',
        title: 'screenshot 6',
      },
    ],

    images2: [
      {
        src: process.env.BASE_URL + 'screens/key1scarlet.png',
        title: 'boxart',
      },
      {
        src: process.env.BASE_URL + 'screens/key2.jpg',
        title: 'key2',
        landscape: true,
      },
      {
        src: process.env.BASE_URL + 'screens/key3.jpg',
        title: 'key3',
      },
    ],
  }),
}
</script>
<style lang="scss" scoped>
.scarlet-screens {
  // padding: 0 1rem;
  margin-top: 3rem;
  margin-bottom: 2rem;
}
.scarlet-screens__img-content {
}
.scarlet-screens__img {
  width: 100%;
  height: 0;
  background: red;
  padding-bottom: 56.25%;
  overflow: hidden;
  transition: all 200ms ease;
  position: relative;
  img {
    width: 100%;
    margin-top: -15%;
    position: absolute;
  }

  &:hover {
    border-color: $hh-white;
    box-shadow: 0 0 2rem rgba($hh-white, 0.3);
  }
}

.scarlet-screens__gallery--key {
  .scarlet-screens__img {
    &--landscape img {
      margin-top: 0;
      width: auto;
      height: 100%;
    }
  }
}
</style>
