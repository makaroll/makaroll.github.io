<template>
  <div class="screens relative">
    <!-- <div class="screens__cover absolute">
      <img src="../assets/cover.jpg">
    </div> -->
    <h2 class="caps">Screenshots</h2>
    <div
      class="screens__gallery mxn2 clearfix relative"
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
        class="screens__img-content mb3 px2 sm-col sm-col-12 md-col-6 lg-col-4"
        v-for="image in images"
        :key="image.src"
      >
        <div class="screens__img">
          <img :src="image.src" :alt="image.title" />
        </div>
      </div>
    </div>

    <h2 class="caps">Key Art</h2>
    <div
      class="screens__gallery mxn2 clearfix relative"
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
        class="screens__img-content mb3 px2 sm-col sm-col-12 md-col-6 lg-col-4"
        v-for="image in images2"
        :key="image.src"
      >
        <div class="screens__img" :class="{ 'screens__img--landscape': image.landscape }">
          <img :src="image.src" :alt="image.title" />
        </div>
      </div>
    </div>

    <!-- <div class="flex justify-center">
      <a href="https://twitter.com/phantomrosegame" class="button mr4">Twitter</a>
      <a href="https://phantomrosegame.tumblr.com" class="button ml4">Devlog</a>
    </div> -->
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
        src: process.env.BASE_URL + 'screens/s1.png',
        title: 'screenshot 1',
      },
      {
        src: process.env.BASE_URL + 'screens/s2.png',
        title: 'screenshot 2',
      },
      {
        src: process.env.BASE_URL + 'screens/s3.png',
        title: 'screenshot 3',
      },
      {
        src: process.env.BASE_URL + 'screens/s9.png',
        title: 'screenshot 4',
      },
      {
        src: process.env.BASE_URL + 'screens/s5.png',
        title: 'screenshot 5',
      },
      {
        src: process.env.BASE_URL + 'screens/s6.png',
        title: 'screenshot 6',
      },
    ],

    images2: [
      {
        src: process.env.BASE_URL + 'screens/key1.jpg',
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

  components: {},
}
</script>
<style lang="scss" scoped>
.screens {
}
.screens__img {
  // background: red;

  padding-top: 56.25%;
  height: 0;
  position: relative;
  overflow: hidden;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.5);
  transition: all 200ms ease;
  // cursor: pointer;

  img {
    width: 100%;
    top: 20%;
    transform: translateY(-20%);
    position: absolute;
    cursor: pointer;
  }

  &--landscape img {
    width: auto;
    height: 100%;
  }

  &:hover {
    border-color: $hh-white;
    box-shadow: 0 0 2rem rgba($hh-white, 0.3);
  }
}

.screens__cover {
  bottom: 0;
}
</style>
