<template>
  <div class="app-sapphire relative flex justify-center" v-if="windowHeight">
    <div class="col col-12 relative flex flex-column items-center">
      <!-- <div class="app-sapphire__decor"></div> -->

      <div class="clearfix wide">
        <transition appear name="fadeDelayed">
          <SapphireVideo :style="descStyle" />
        </transition>

        <div class="col col-12 relative app-sapphire__content">
          <div class="app-sapphire__desc flex flex-column items-center" :style="descStyle">
            <div class="px3 app-sapphire__desc-content flex flex-column items-center sm-col-10 lg-col-7">
              <img src="@/assets/sapphire/main_logo.png" class="sapphire-logo" />

              <div class="localized-name sub-text">
                {{ $t('ui.label.gameNameSaph') }}
              </div>

              <h2 class="h2 h2--sapphire-desc center" v-html="$t('ui.desc.shortDescSaph')"></h2>

              <h2
                class="h2 h2--sapphire-desc h2--sapphire-desc--unformatted"
                v-html="$t('ui.desc.shortDescUnformatted')"
              ></h2>

              <div class="app-sapphire__cta col-12 sm-col-10 lg-col-7">
                <h3 class="center mt2 mb3">{{ $t('ui.label.playNow') }}</h3>
                <div class="cta-border mb2"></div>
                <div class="flex flex-wrap items-center justify-center pt3">
                  <a :href="iosLink" class="mb3">
                    <img :src="appstoreIcon" class="app-sapphire__appstore-icon" />
                  </a>
                  <a :href="andLink" class="mb3">
                    <img :src="appstoreIconAndroid" class="app-sapphire__appstore-icon ml2" />
                  </a>
                  <a :href="steamLink" class="mb3">
                    <img src="/steam.png" class="app-sapphire__appstore-icon ml2" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <SapphireBody />

      <div class="sm-col-10 lg-col-7 col-11 flex flex-column items-center justify-center mb4 mt4">
        <div class="app-sapphire__cta col-12 sm-col-10 lg-col-7">
          <h3 class="center mt2 mb3">{{ $t('ui.label.playNow') }}</h3>
          <div class="cta-border mb2"></div>
          <div class="flex flex-wrap items-center justify-center pt3">
            <a :href="iosLink" class="mb3">
              <img :src="appstoreIcon" class="app-sapphire__appstore-icon" />
            </a>
            <a :href="andLink" class="mb3">
              <img :src="appstoreIconAndroid" class="app-sapphire__appstore-icon ml2" />
            </a>
            <a :href="steamLink" class="mb3">
              <img src="/steam.png" class="app-sapphire__appstore-icon ml2" />
            </a>
          </div>
        </div>

        <div class="flex justify-center col-12 sm-col-10 lg-col-7 mt4">
          <a
            href="https://twitter.com/PhantomRoseGame"
            class="flex-auto button button--sub flex items-center justify-center app-scarlet__bottom-twitter"
          >
            <img src="@/assets/twitter.png" />
          </a>

          <a
            href="https://discord.gg/phantomrose"
            class="flex-auto button button--sub flex items-center justify-center app-scarlet__bottom-twitter"
          >
            <img src="@/assets/discord.png" />
          </a>

          <a
            href="https://youtube.com/makaroll"
            class="flex-auto button button--sub button--yt flex items-center justify-center app-scarlet__bottom-twitter"
          >
            <img src="@/assets/yt.png" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SapphireVideo from '@/components/sapphireComps/SapphireVideo'
import SapphireBody from '@/components/sapphireComps/SapphireBody'
export default {
  data: () => ({
    windowHeight: 0,
    topBarHeight: 0,
  }),

  mounted() {
    this.$nextTick(() => {
      this.onResize()
    })
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

    iosLink() {
      return 'https://apps.apple.com/app/id6502919566'
    },

    andLink() {
      return 'https://play.google.com/store/apps/details?id=com.phantomrosegame.phantomRose2'
    },

    steamLink() {
      return 'https://store.steampowered.com/app/1964200/Phantom_Rose_2_Sapphire'
    },
  },

  methods: {
    onResize() {
      this.topBarHeight = document.getElementsByClassName('header')[0].offsetHeight
      this.windowHeight = window.innerHeight
    },
  },

  components: {
    SapphireVideo,
    SapphireBody,
  },
}
</script>

<style lang="scss" scoped>
.app-sapphire {
  // height: 80rem; // temp
}

.app-sapphire__decor {
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

.app-sapphire__desc {
  // background: rgba(0, 0, 0, 0.8);
  margin: 0rem auto 0;
  padding: 20vh 0 0;
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
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 20%, #000 80%);
  }
}

.app-sapphire__desc-content {
  z-index: 1;
  position: relative;
  margin-bottom: 3rem;
  height: 100%;
}

.h2--sapphire-desc {
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

.sapphire-logo {
  width: 100%;
  display: block;
  margin: 0 auto 4rem;
  filter: drop-shadow(0 0 0.4rem #000) drop-shadow(0 0 0.4rem #000);

  @media screen and (min-width: $breakpoint-sm) {
    filter: none;
    width: 60%;
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

  &:before,
  &:after {
    display: none;
    content: none;
  }

  img {
    height: 50%;
    width: auto;
    display: block;
  }

  @media screen and (max-width: $breakpoint-sm) {
    height: 5rem;
  }

  &:hover {
    filter: brightness(1.5);
  }
}

.app-sapphire__bottom-cta {
  margin-bottom: 5rem;
  display: flex;
  @media screen and (max-width: $breakpoint-sm) {
    display: block;
    .app-sapphire__bottom-twitter {
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

.app-sapphire__appstore-icon {
  height: 5rem;
  display: block;
}

.app-sapphire__cta {
  background: rgb(0, 10, 78);
  margin-top: 4rem;
  padding: 1rem 2rem;
  border: 0.1rem solid #5291d9;

  &-opt {
    font-size: $font-size--xl + 0.2rem;
    padding: 1rem 0;
    height: 6rem;
  }
}

.cta-border {
  width: 100%;
  height: 0.2rem;
  background: #fff;
  opacity: 0.2;
  margin: 1rem 0;
}

.app-sapphire__cta-steam {
  display: block;
  background: url('assets/steam-logo.png') no-repeat 1rem center rgb(11, 13, 242);
  background-size: 3rem;
  padding: 1rem;
  padding-left: 5rem;
  font-size: $font-size--xl;
  font-weight: bold;
  border-radius: 0.6rem;
  transition: filter 200ms ease;

  &:hover {
    filter: brightness(130%);
  }
}

.wide {
  width: 100%;
}

.app-scarlet__bottom-twitter {
  max-width: 100% !important;
  margin-right: 1rem;
  &:last-child {
    margin-right: 0;
  }

  &:nth-child(1) {
    background: #72c1f9;

    img {
      height: 55%;
    }
  }

  &:nth-child(2) {
    background: #8385fc;
  }

  &:nth-child(3) {
    background: #f55959;
  }
}

.button--yt img {
  height: 75%;
}
</style>
