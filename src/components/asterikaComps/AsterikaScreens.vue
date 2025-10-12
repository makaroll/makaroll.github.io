<template>
  <div class="asterika-screens relative">
    <!-- Using Sapphire's gallery structure and images as placeholders -->
    <div
      class="asterika-screens__gallery mxn2 clearfix relative"
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
        class="asterika-screens__img-content mb3 px2 col col-6 md-col-6 lg-col-4"
        v-for="image in placeholderImages"
        :key="image.src"
      >
        <div class="asterika-screens__img">
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
  name: 'AsterikaScreens',
  data: () => ({
    // Using Sapphire's images as placeholders
    placeholderImages: [
      {
        src: process.env.BASE_URL + 'screens/asterika/1.jpg',
        title: 'screenshot 1',
      },
      {
        src: process.env.BASE_URL + 'screens/asterika/2.jpg',
        title: 'screenshot 2',
      },
      {
        src: process.env.BASE_URL + 'screens/asterika/3.jpg',
        title: 'screenshot 3',
      },
      {
        src: process.env.BASE_URL + 'screens/asterika/4.jpg',
        title: 'screenshot 4',
      },
      {
        src: process.env.BASE_URL + 'screens/asterika/5.jpg',
        title: 'screenshot 5',
      },
      {
        src: process.env.BASE_URL + 'screens/asterika/6.jpg',
        title: 'screenshot 6',
      },
      // Add more placeholders from SapphireScreens if desired
    ],
  }),
}
</script>

<style lang="scss" scoped>
/* Styles adapted from SapphireScreens.vue */
.asterika-screens {
  margin-top: 3rem;
  margin-bottom: 2rem;
  padding: 0 1rem;
  @media screen and (min-width: $breakpoint-sm) {
    padding: 4rem;
  }
}

.asterika-screens__img-content {
  /* Inherits col sizing */
}

.asterika-screens__img {
  width: 100%;
  height: 0;
  background: rgba($aste-blue, 0.1); /* Use Asterika color */
  padding-bottom: 56.25%; /* 16:9 aspect ratio */
  overflow: hidden;
  transition: all 200ms ease;
  position: relative;
  border-radius: 4px; /* Optional rounded corners */
  border: 1px solid rgba($aste-blue, 0.2);

  img {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    transition: transform 0.3s ease;
  }

  &:hover {
    cursor: pointer;
    border-color: $aste-magenta; /* Magenta accent on hover */
    box-shadow: 0 0 1rem rgba($aste-magenta, 0.3);
    img {
      transform: scale(1.05);
    }
  }
}
</style>
