<template>
  <div class="scarlet-body ml3 mr3 relative">
    <div class="scarlet-new-announcement">
      <h2>{{ $t('ui.label.news') }}</h2>
      <div class="scarlet-new-announcement__movie">
        <Trailer :borderless="true" url="https://www.youtube.com/embed/5btbnaw-cao" />
      </div>

      <p>{{ $t('ui.desc.pr2Dev') }}</p>

      <div class="flex scarlet-new-announcement__buttons justify-center items-center">
        <a
          href="https://twitter.com/PhantomRoseGame"
          class="flex-auto button button--sub flex items-center justify-center app-scarlet__bottom-twitter"
          ><img src="@/assets/twitter.png"
        /></a>

        <a
          href="https://discord.gg/phantomrose"
          class="flex-auto button button--sub flex items-center justify-center app-scarlet__bottom-twitter"
          ><img src="@/assets/discord.png"
        /></a>
      </div>
    </div>

    <div class="scarlet-border"></div>
    <div class="scarlet-body__intro-img-container relative">
      <div class="scarlet-body__intro-img-wrapper">
        <img src="/screens/key2.jpg" />
      </div>
      <p class="scarlet-body__about">
        {{ $t('ui.desc.game') }}
      </p>
    </div>
    <ScarletScreens />
  </div>
</template>
<script>
import ScarletScreens from './ScarletScreens'
import Trailer from '../Trailer.vue'
export default {
  name: '',
  data: () => ({}),

  components: {
    ScarletScreens,
    Trailer,
  },
}
</script>
<style lang="scss" scoped>
.scarlet-body {
  // box-sizing: content-box;
}
.scarlet-border {
  margin-top: 0;
}

.scarlet-body__about {
  font-size: $font-size--xl;
  position: absolute;
  bottom: 0;
  z-index: 1;
  padding: 0 1rem;
  max-width: 52rem;
}

.scarlet-body__intro-img-container {
  width: 100%;
  min-height: 28rem;
  overflow: hidden;
  border-radius: 2rem;

  img {
    width: 120%;
    // left: 50%;
    // transform: translateX(-50%);
    // position: absolute;
    // top: 0;
    margin-left: -8%;

    // margin-top: -20%;
  }
}

.scarlet-new-announcement {
  background: rgb(0, 10, 78);
  text-align: center;
  // padding: 1rem 3rem;
  margin-bottom: 4rem;

  h2 {
    padding: 3rem 3rem 0;
  }

  .scarlet-new-announcement__movie {
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

.scarlet-body__intro-img-wrapper {
  position: relative;
  &:after {
    width: 100%;
    height: 80%;
    display: block;
    content: '';
    position: absolute;
    bottom: 0;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, #000 90%);
  }
}

.scarlet-body__details {
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
  max-width: 15rem;

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

  @media screen and (max-width: $breakpoint-sm) {
    height: 5rem;
  }

  &:hover {
    filter: brightness(1.5);
  }
}

.scarlet-new-announcement__buttons {
  padding-bottom: 1.5rem;
  background: #001880;
}
</style>
