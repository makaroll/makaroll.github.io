<template>
  <div id="app" class="relative flex flex-column">
    <header class="header flex caps items-center pl2 pr2 clearfix justify-center">
      <div class="col col-12 sm-col-10 lg-col-7 flex items-center tall">
        <router-link :to="{ name: 'top' }" class="header__img-container"
          ><img src="@/assets/logo-icon.png" class="header__img"
        /></router-link>

        <div
          class="header__menu flex items-center header__menu--asterika"
          @click="
            () => {
              menuSelect('asterika')
            }
          "
          :class="{ 'header__menu--selected': selected === 'asterika' || selected === 'top' }"
        >
          Asterika
        </div>

        <div
          class="header__menu flex items-center header__menu--saph"
          @click="
            () => {
              menuSelect('sapphire')
            }
          "
          :class="{
            'header__menu--selected': selected === 'sapphire',
          }"
        >
          Sapphire
        </div>

        <div
          class="header__menu flex items-center"
          @click="
            () => {
              menuSelect('scarlet')
            }
          "
          :class="{ 'header__menu--selected': selected === 'scarlet' }"
        >
          Scarlet
        </div>
        <div
          class="header__menu header__menu--music flex items-center"
          @click="
            () => {
              menuSelect('music')
            }
          "
          :class="{ 'header__menu--selected': selected === 'music' }"
        >
          Music
        </div>
      </div>
    </header>
    <div class="app__content flex-auto">
      <transition name="fade" mode="out-in">
        <router-view></router-view>
        <!-- <AppSteam v-if="selected === 'steam'" class="pl2 pr2" />
        <AppScarlet v-if="selected === 'scarlet'" /> -->
      </transition>
    </div>
    <Footer class="app__footer relative" :class="{ 'app__footer--no-bg': selected === 'updates' }" />
  </div>
</template>

<script>
// import AppSteam from './AppSteam.vue'
// import AppScarlet from './AppScarlet.vue'

import Footer from './components/Footer.vue'

export default {
  name: 'app',
  data: () => ({
    selected: 'scarlet',
  }),

  metaInfo() {
    let title = this.$t('ui.label.pageTitle')
    // let desc = { meta: { name: 'description', content: this.$t('ui.desc.pageTitle') } }
    return { title: title }
  },

  created() {
    this.selected = this.$route.name
  },

  methods: {
    menuSelect(type) {
      if (type === 'sapphire') this.$router.push('/sapphire')
      if (type === 'scarlet') this.$router.push('scarlet')
      if (type === 'music') this.$router.push('music')
      if (type === 'asterika') this.$router.push('/')
      this.selected = type
    },
  },

  watch: {
    $route(val) {
      if (val) this.selected = this.$route.name
    },
  },

  components: {
    Footer,
    // AppSteam,
    // AppScarlet,
  },
}
</script>

<style lang="scss">
@charset "utf-8";
@import '~basscss/css/basscss';
* {
  -webkit-overflow-scrolling: touch;
  box-sizing: border-box;
}

html {
  font-size: 62.5%;
  height: 100%;
  --space-1: 0.5rem;
  --space-2: 1rem;
  --space-3: 2rem;
  --space-4: 4rem;
}
body {
  font-size: 1.6rem;
  background: $hh-black;
  color: $hh-white;
  margin: 0;
  width: 100%;
  height: 100%;
  // background: url(assets/cover.jpg) no-repeat center bottom $hh-black;
  // background-size: 100% auto;
}

#app {
  font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  min-width: 32rem;
}

.app__content {
  overflow: hidden;
  position: relative;
  @media screen and (max-width: $breakpoint-sm) {
    // padding: 0 1rem;
  }
}

.sub-text {
  color: $hh-grey--lightest;
  letter-spacing: 0;
}

a {
  text-transform: none;
  text-decoration: none;
  color: inherit;
}

h1 {
  font-size: 2.4rem;
  text-transform: uppercase;
}

$button-height: 4.8rem;
.button {
  text-decoration: none;
  color: #000;
  display: inline-block;
  height: $button-height;
  margin: 0 2.5rem;
  background: #f0e9e0;
  line-height: $button-height;
  position: relative;
  font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif;
  font-weight: $font-weight--black;
  font-size: $font-size--xl;
  letter-spacing: 0.1rem;
  text-transform: uppercase;
  transition: all 200ms ease;
  padding: 0 1.5rem;
  text-align: center;

  @media screen and (max-width: $breakpoint-sm) {
    font-size: $font-size--l;
  }
}

.button:before,
.button:after {
  display: block;
  content: '';
  position: absolute;
  top: 0;
  transition: all 200ms ease;
}

.button:before {
  border-top: $button-height / 2 solid transparent !important;
  border-bottom: $button-height / 2 solid transparent !important;
  border-right: 1.8rem solid #f0e9e0;
  left: -1.8rem;
}

.button:after {
  border-top: $button-height / 2 solid transparent !important;
  border-bottom: $button-height / 2 solid transparent !important;
  border-left: 1.8rem solid #f0e9e0;
  right: -1.8rem;
}

.button--s {
  font-size: $font-size--l;
  height: 4rem;
  line-height: 4rem;

  &:before,
  &:after {
    border-top: 2rem solid transparent !important;
    border-bottom: 2rem solid transparent !important;
  }
}

.button:hover {
  filter: drop-shadow(0 0 0.4rem rgba(255, 255, 255, 0.7));
}

.button:active {
  letter-spacing: 0;
}

h2,
.h2 {
  font-weight: 300;
  font-size: $font-size--xxl;
}

.tall {
  height: 100%;
}

.caps {
  letter-spacing: 0.2rem;
}

p {
  font-size: $font-size--l;
  opacity: 0.8;
  line-height: 1.5;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

header {
  height: 4.8rem;
  background: #000;
  font-weight: $font-weight--black;
}

.header__img-container {
  display: block;
  height: 60%;
  margin: 0 1rem 0 0.5rem;
}

.header__img {
  height: 100%;
  // margin: 0 1rem 0 0.5rem;
}

.header__menu {
  opacity: 0.5;
  height: 100%;
  border-bottom: 0.3rem solid rgb(90, 92, 107);

  cursor: pointer;

  &--selected {
    opacity: 1;
    border-bottom: 0.3rem solid $hh-red;
  }

  &--asterika.header__menu--selected {
    border-bottom: 0.3rem solid $aste-purple;
  }

  &--saph.header__menu--selected {
    border-bottom: 0.3rem solid $hh-blue;
  }

  &--music.header__menu--selected {
    border-bottom: 0.3rem solid $hh-purple;
  }

  background: rgb(25, 27, 52);
  margin: 0 0.4rem 0 0;
  padding: 0.4rem 1rem;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 300ms ease;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.scarlet-border {
  border-top: 0.2rem solid $hh-red;
  margin-top: 4rem;
  margin-bottom: 4rem;
  // margin-top: 2rem;
}
</style>
