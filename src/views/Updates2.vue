<template>
  <div class="updates tall flex-auto flex justify-center">
    <div class="col col-12 sm-col-10">
      <div class="updates__follow-container flex justify-center">
        <div class="flex justify-between updates__follow items-center wide">
          <span>{{ this.followText[this.$lang].text }}</span>

          <a
            href="https://twitter.com/PhantomRoseGame"
            class="flex-none button button--sub flex items-center justify-center"
          >
            <img src="@/assets/twitter.png" />
            {{ this.followText[this.$lang].cta }}
          </a>
        </div>
      </div>

      <div class="scarlet-new-announcement">
        <h2>{{ $t('ui.label.news') }}</h2>
        <appMusic :type="'sapphire'" class="wide" />

        <p>{{ $t('ui.desc.musicOut') }}</p>
      </div>

      <div class="updates__content mt2 flex flex-column items-center mb2">
        <div class="flex items-center justify-center mt3 updates__logo-container mb2">
          <img src="@/assets/sapphire/main_logo.png" class="updates__logo" />
        </div>

        <vue-simple-markdown :source="source"></vue-simple-markdown>
      </div>
    </div>
  </div>
</template>

<script>
import appMusic from '@/AppMusic.vue'
export default {
  name: '',
  data: () => ({
    source: '',
    followText: {
      en: {
        text: 'Follow @phantomrosegame on Twitter',
        cta: 'OPEN',
      },

      ko: {
        text: '트위터에서 @phantomrosegame을 팔로우해보세요',
        cta: '열기',
      },

      jp: {
        text: 'Twitterで@phantomrosegameをフォローしてみてください',
        cta: '開ける',
      },
    },
  }),

  created() {
    //do something after creating vue instance
    this.$axios.get('/updates2/1.0.0-' + this.$lang + '.md').then((msg) => {
      this.source = msg.data
    })
  },

  components: {
    appMusic,
  },
}
</script>

<style lang="scss">
.updates__logo-container {
  width: 100%;
}
.updates__logo {
  width: 60%;
  max-width: 30rem;
}

.updates__content {
  background: #111;
  padding: 1rem 2rem 2rem;
  border-radius: 1rem;
  // border: solid 0.3rem #592121;
}

.vue-simple-markdown {
  max-width: 60rem;
  width: 100%;

  img {
    width: 100%;
    display: block;
    margin-bottom: 2rem;
  }

  hr {
    margin-top: 3rem;
    opacity: 0.5;
  }

  ul {
    padding-left: 2rem;

    ul {
      padding-top: 0.5rem;
      padding-left: 1rem;
    }
  }
  li {
    font-size: 1.6rem;
    margin-bottom: 1rem;

    &:first-letter {
      text-transform: uppercase;
    }
  }

  h2:first-child {
    margin-top: 1rem;
  }

  h2 {
    margin-bottom: 0rem;
  }

  h3 {
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

  blockquote {
    background: #222;
    padding: 2rem;
    margin: 0;
    border-left: 0.4rem solid $hh-red--dark;
    margin-top: 1.5rem;
  }
}

.updates__follow-container {
  .button--sub {
    // margin: 0 2.2rem;
    margin: 0;

    display: flex;
    padding: 0 1.5rem;
    background: #2c64b8;
    color: #fff;
    // width: 8rem;
    height: 4.5rem;
    border-radius: 0.9rem;
    font-size: 1.6rem;

    margin-left: 2rem;
    max-width: 20rem;
    min-width: 11rem;

    &:before,
    &:after {
      display: none;
      content: none;
    }

    img {
      height: 45%;
      width: auto;
      display: block;
      opacity: 0.8;
      margin-right: 0.6rem;
    }

    // @media screen and (max-width: $breakpoint-sm) {
    //   height: 5rem;
    // }

    &:hover {
      filter: brightness(1.5);
    }
  }
}

.updates__follow {
  padding: 1rem 1.5rem;
  max-width: 60rem;
  font-weight: bold;
}

.updates__follow-container {
  background: rgb(0, 10, 78);
  width: 100%;
  margin-top: 1rem;
  margin-bottom: 1rem;
  border-radius: 0.8rem;
}

.scarlet-new-announcement {
  background: $hh-blue--dark;
  text-align: center;
  border-radius: 1rem;
  // padding: 1rem 3rem;
  margin-bottom: 4rem;

  h2 {
    padding: 3rem 3rem 0;
  }

  .scarlet-new-announcement__movie {
    padding: 0 3rem 1.5rem;

    @media screen and (max-width: $breakpoint-md) {
      padding: 0;
    }
  }

  p {
    font-size: $font-size--xl;
    padding: 1.5rem 1.5rem 2rem;

    opacity: 1;
    margin-bottom: 0;
    margin-top: 0;
  }
}

.app-sapphire__cta {
  background: rgb(0, 10, 78);
  margin-top: 1rem;
  padding: 1rem 2rem;

  &-opt {
    font-size: $font-size--xl + 0.2rem;
    padding: 1rem 0;
    height: 6rem;
  }
}

.app-sapphire__cta-steam {
  display: block;
  background: url('../assets/steam-logo.png') no-repeat 1.5rem center rgb(11, 13, 242);
  background-size: 3rem;
  padding: 1rem 1.5rem;
  padding-left: 6rem;
  font-size: $font-size--xl + 0.2rem;
  font-weight: bold;
  border-radius: 0.6rem;
  transition: filter 200ms ease;

  &:hover {
    filter: brightness(130%);
  }
}

.cta-border {
  width: 100%;
  height: 0.2rem;
  background: #fff;
  opacity: 0.2;
  margin: 1rem 0;
}
</style>
