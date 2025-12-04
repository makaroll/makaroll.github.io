<template lang="html">
  <div class="app-scarlet relative flex justify-center" v-if="windowHeight">
    <div class="col col-12 sm-col-10 lg-col-7 relative">
      <!-- <div class="app-scarlet__decor"></div> -->
      <div class="clearfix">
        <div class="col col-12 sm-col-6 relative">
          <transition appear name="fadeDelayed">
            <ScarletVideo :style="descStyle" />
          </transition>
        </div>
        <div class="col col-12 sm-col-6 relative app-scarlet__content">
          <div class="app-scarlet__desc flex flex-column" :style="descStyle">
            <div class="px3 app-scarlet__desc-content">
              <img src="@/assets/scarlet/main-logo.png" class="scarlet-logo" />
              <div class="localized-name sub-text">
                {{ $t('ui.label.gameName') }}
              </div>
              <h2 class="h2 h2--scarlet-desc" v-html="$t('ui.desc.shortDesc')"></h2>
              <h2
                class="h2 h2--scarlet-desc h2--scarlet-desc--unformatted"
                v-html="$t('ui.desc.shortDescUnformatted')"
              ></h2>
              <div class="app-scarlet__cta flex items-center">
                <a href="https://apps.apple.com/app/id1502851569">
                  <img :src="appstoreIcon" class="app-scarlet__appstore-icon" />
                </a>
                <a href="https://play.google.com/store/apps/details?id=com.phantomrosegame.phantomRoseScarlett">
                  <img :src="appstoreIconAndroid" class="app-scarlet__appstore-icon ml2" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ScarletBody />
      <div class="app-scarlet__bottom-cta px3 justify-center">
        <div class="flex justify-center">
          <a href="https://apps.apple.com/app/id1502851569">
            <img :src="appstoreIcon" class="app-scarlet__appstore-icon" />
          </a>
          <a href="https://play.google.com/store/apps/details?id=com.phantomrosegame.phantomRoseScarlett">
            <img :src="appstoreIconAndroid" class="app-scarlet__appstore-icon ml2" />
          </a>
        </div>
        <a
          href="https://twitter.com/PhantomRoseGame"
          class="flex-auto button button--sub flex items-center justify-center app-scarlet__bottom-twitter"
          ><img src="@/assets/twitter.png"
        /></a>
      </div>
    </div>
  </div>
</template>

<script>
import ScarletVideo from '@/components/scarletComps/ScarletVideo'
import ScarletBody from '@/components/scarletComps/ScarletBody'
export default {
  data: () => ({
    windowHeight: 0,
    topBarHeight: 0,
  }),

  mounted() {
    this.$nextTick(() => {
      this.onResize()
    })

    window.addEventListener('resize', this.onResize)
  },

  computed: {
    descStyle() {
      return {
        height: this.windowHeight - this.topBarHeight + 'px',
      }
    },

    appstoreIcon() {
      let defaultPath = '/appStore_en.png'

      if (this.$lang === 'ko') defaultPath = '/appStore_ko.png'
      if (this.$lang === 'jp') defaultPath = '/appStore_jp.png'

      return defaultPath
    },

    appstoreIconAndroid() {
      let defaultPath = '/playstore_en.png'

      if (this.$lang === 'ko') defaultPath = '/playstore_ko.png'
      if (this.$lang === 'jp') defaultPath = '/playstore_jp.png'

      return defaultPath
    },
  },

  methods: {
    onResize() {
      this.topBarHeight = document.getElementsByClassName('header')[0].offsetHeight
      this.windowHeight = window.innerHeight
    },
  },

  components: {
    ScarletVideo,
    ScarletBody,
  },
}
</script>

<style lang="scss" scoped>
.app-scarlet {
  // height: 80rem; // temp
}

.app-scarlet__decor {
  width: 32rem;
  height: 32rem;
  display: none;
  position: absolute;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
  z-index: -1;

  &:before {
    position: absolute;
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    background: $hh-red--dark;
    transform: rotate(45deg);
  }

  @media screen and (min-width: $breakpoint-sm) {
    display: block;
  }
}

.app-scarlet__desc {
  // background: rgba(0, 0, 0, 0.8);
  margin: 0rem auto 0;
  padding: 0 0rem 2vh;
  justify-content: flex-end;

  &:after {
    width: 100%;
    height: 50vh;
    display: block;
    content: '';
    position: absolute;
    bottom: 0;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, #000 90%);
  }

  @media screen and (min-width: $breakpoint-sm) {
    // display: none;
    justify-content: center;
  }
}

.app-scarlet__desc-content {
  z-index: 1;
  position: relative;
}

.h2--scarlet-desc {
  margin-top: 1rem;
  margin-bottom: 1rem;
  // text-shadow: 0 0 0.5rem #000;
  &--unformatted {
    display: none;
  }

  @media screen and (min-width: $breakpoint-sm) and (max-width: $breakpoint-md) {
    display: none;

    &--unformatted {
      display: block;
    }
  }
}

.scarlet-logo {
  width: 100%;
  display: block;
  margin: 0 auto 4rem;
  filter: drop-shadow(0 0 0.4rem #000) drop-shadow(0 0 0.4rem #000);

  @media screen and (min-width: $breakpoint-sm) {
    filter: none;
  }
}

.button--sub {
  // margin: 0 2.2rem;
  margin: 0;
  display: flex;
  padding: 0;
  background: #262d69;
  // width: 8rem;
  height: 5rem;
  border-radius: 0.9rem;
  max-width: 5.5rem;
  margin-left: 1rem;

  &:before,
  &:after {
    display: none;
    content: none;
  }

  img {
    height: 50%;
    width: auto;
    display: block;
    opacity: 0.5;
  }

  @media screen and (max-width: $breakpoint-sm) {
    height: 5rem;
  }

  &:hover {
    filter: brightness(1.5);
  }
}

.app-scarlet__bottom-cta {
  margin-bottom: 5rem;
  display: flex;
  @media screen and (max-width: $breakpoint-sm) {
    display: block;
    .app-scarlet__bottom-twitter {
      margin: 2rem 2rem;
      // width: 50%;
      max-width: 100% !important;
    }
  }
}

.fadeDelayed-enter-active,
.fadeDelayed-leave-active {
  transition: opacity 500ms ease;
}

.fadeDelayed-enter-active {
  transition-delay: 300ms;
}

.fadeDelayed-enter,
.fadeDelayed-leave-to {
  opacity: 0;
}

.app-scarlet__appstore-icon {
  height: 5rem;
  display: block;
}

.app-scarlet__cta {
  margin-top: 1.5rem;
}
</style>
