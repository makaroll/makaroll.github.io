<template>
  <div class="app-asterika relative flex justify-center" v-if="windowHeight">
    <div class="col col-12 relative flex flex-column items-center">
      <!-- Decor element if needed -->

      <div class="clearfix wide">
        <transition appear name="fadeDelayed">
          <!-- Placeholder Component for Background Video -->
          <AsterikaVideo :style="descStyle" />
        </transition>

        <div class="col col-12 relative app-asterika__content">
          <div class="app-asterika__desc flex flex-column items-center" :style="descStyle">
            <div class="px3 app-asterika__desc-content flex flex-column items-center sm-col-10 lg-col-7">
              <!-- Placeholder Logo -->
              <img src="@/assets/asterika/main-logo.png" class="asterika-logo" />

              <!-- Placeholder i18n Key -->
              <div class="localized-name">
                {{ $t('asterika.label.gameName') }}
              </div>

              <!-- Placeholder i18n Key -->
              <h2 class="h2 h2--asterika-desc center" v-html="$t('asterika.desc.shortDesc')"></h2>

              <h2
                class="h2 h2--asterika-desc h2--asterika-desc--unformatted"
                v-html="$t('asterika.desc.shortDescUnformatted')"
              ></h2>

              <!-- === CTA Section: Adapt for Asterika === -->
              <div class="app-asterika__cta col-12 sm-col-10 lg-col-7">
                <!-- Example: Maybe a Steam wishlist link or pre-order -->
                <h3 class="center mt2 mb3">{{ $t('asterika.label.comingSoon') }}</h3>
                <!-- Placeholder Text -->
                <div class="cta-border mb2"></div>
                <div class="flex flex-wrap items-center justify-center pt3">
                  <!-- Add relevant links for Asterika here -->
                  <!-- Example Placeholder: -->
                  <a :href="steamLink" class="mb3 flex items-center justify-center">
                    <img src="/steam.png" class="app-asterika__appstore-icon ml2" />
                  </a>
                </div>
              </div>
              <!-- === End CTA Section === -->
            </div>
          </div>
        </div>
      </div>

      <!-- Placeholder Component for Main Content (Long Desc, Trailer, Gallery) -->
      <AsterikaBody />

      <!-- === Bottom Section: Adapt for Asterika === -->
      <div class="sm-col-10 lg-col-7 col-11 flex flex-column items-center justify-center mb4 mt4">
        <!-- Optional: Repeat CTA or add other info -->
        <!-- === CTA Section: Adapt for Asterika === -->
        <div class="app-asterika__cta col-12 sm-col-10 lg-col-7">
          <!-- Example: Maybe a Steam wishlist link or pre-order -->
          <h3 class="center mt2 mb3">{{ $t('asterika.label.comingSoon') }}</h3>
          <!-- Placeholder Text -->
          <div class="cta-border mb2"></div>
          <div class="flex flex-wrap items-center justify-center pt3">
            <!-- Add relevant links for Asterika here -->
            <!-- Example Placeholder: -->
            <a :href="steamLink" class="mb3 flex items-center justify-center">
              <img src="/steam.png" class="app-asterika__appstore-icon ml2" />
            </a>
          </div>
        </div>
        <!-- Social Links (Keep if relevant) -->
        <div class="flex justify-center col-12 sm-col-10 lg-col-7 mt4 social-links">
          <a
            href="https://twitter.com/PhantomRoseGame"
            class="flex-auto button button--sub flex items-center justify-center"
          >
            <img src="@/assets/twitter.png" />
          </a>
          <a
            href="https://discord.gg/phantomrose"
            class="flex-auto button button--sub flex items-center justify-center"
          >
            <img src="@/assets/discord.png" />
          </a>
          <a
            href="https://youtube.com/makaroll"
            class="flex-auto button button--sub button--yt flex items-center justify-center"
          >
            <img src="@/assets/yt.png" />
          </a>
        </div>

        <!-- Legal Links -->
        <div class="legal-links mt4">
          <div class="privacy-link">
            <router-link to="/privacyAsterika" class="privacy-link-text">
              {{ $t('ui.label.privacyPolicy') }}
            </router-link>
          </div>
          <div class="tos-link">
            <router-link to="/tosAsterika" class="tos-link-text">
              {{ $t('ui.label.termsOfService') }}
            </router-link>
          </div>
        </div>
      </div>
      <!-- === End Bottom Section === -->
    </div>
  </div>
</template>

<script>
// Placeholder Imports - Need to create these components
import AsterikaVideo from '@/components/asterikaComps/AsterikaVideo'
import AsterikaBody from '@/components/asterikaComps/AsterikaBody'

export default {
  // Data, Computed, Methods copied from AppSapphire, adjust as needed
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
        // Keep height calculation or adjust if Asterika design differs
        height: this.windowHeight - this.topBarHeight + 'px',
      }
    },
    steamLink() {
      return 'https://store.steampowered.com/app/3690850/Asterika_Phantom_Rose_Refrain'
    },
    // Remove appstore/steam computed props unless needed for Asterika
  },
  methods: {
    onResize() {
      // Ensure 'header' class exists or adjust selector
      const headerElement = document.getElementsByClassName('header')[0]
      if (headerElement) {
        this.topBarHeight = headerElement.offsetHeight
      } else {
        this.topBarHeight = 0 // Default if header not found
        console.warn("Header element with class 'header' not found for height calculation.")
      }
      this.windowHeight = window.innerHeight
    },
  },
  components: {
    AsterikaVideo,
    AsterikaBody,
  },
}
</script>

<style lang="scss" scoped>
/* Base styles adapted from AppSapphire.vue */
/* Apply Asterika color palette ($aste-*) */

.app-asterika {
  background-color: $aste-purple--dark; /* Bright base */
  // color: $aste-grey-dark;
}

.wide {
  /* From Sapphire */
  width: 100%;
}

.localized-name {
  font-size: 1.6rem;
  opacity: 0.75;
}

/* Description Section Styling */
.app-asterika__desc {
  padding: 20vh 0 0; /* Adjust padding as needed */
  justify-content: flex-end; /* Or 'center' like Sapphire's media query? */
  background: linear-gradient(
    to bottom,
    rgba(#0b0b36, 0.4) 40%,
    $aste-purple--dark 72%
  ); /* Fade to solid bright background */

  @media screen and (min-width: $breakpoint-sm) {
    justify-content: center; /* Center content on larger screens */
    background: linear-gradient(to bottom, rgba(#0b0b36, 0.4) 30%, $aste-purple--dark 72%);
  }

  @media screen and (max-width: $breakpoint-sm) {
    background: linear-gradient(to bottom, rgba(#0b0b36, 0.4) 20%, $aste-purple--dark 62%);
  }

  @media screen and (max-width: $breakpoint-md) {
    background: linear-gradient(to bottom, rgba(#0b0b36, 0.4) 20%, $aste-purple--dark 52%);
  }
}

.app-asterika__desc-content {
  z-index: 1;
  position: relative;
  margin-bottom: 3rem;
  height: 100%;
}

/* Heading Styling */
.h2--asterika-desc {
  color: $aste-white; /* Purple headings */
  margin-top: 8rem;
  margin-bottom: 4rem;
  font-weight: 300; /* Example: slightly bolder for bright theme */
  font-size: 2.4rem;

  line-height: 1.5;

  &--unformatted {
    /* Keep for consistency if needed */
    display: none;
  }
  @media screen and (max-width: $breakpoint-md) {
    display: none;
    &--unformatted {
      text-align: center;
      display: block;
    }
  }
}

/* Logo Styling */
.asterika-logo {
  width: 80%; /* Adjust size */
  max-width: 700px; /* Example max size */
  display: block;
  margin: 0 auto 3rem; /* Adjust spacing */
  /* No filter needed on bright background? */
  @media screen and (min-width: $breakpoint-sm) {
    width: 70%; /* Adjust for larger screens */
  }

  @media screen and (max-width: $breakpoint-sm) {
    width: 90%;
  }
}

/* CTA Section Styling */
.app-asterika__cta {
  background: rgba($aste-blue, 0.2); /* Subtle blue background */
  margin-top: 4rem;
  padding: 1.5rem 2rem;
  border: 1px solid $aste-blue; /* Blue border */
  border-radius: 8px; /* Optional rounded corners */

  h3 {
    color: $aste-white; /* Purple heading for CTA */
  }
}

.cta-border {
  /* Separator line */
  width: 100%;
  height: 1px; /* Thinner line */
  background: $aste-blue; /* Blue separator */
  opacity: 0.8;
  margin: 1rem 0;
}

/* Example Button Style (if needed) */
.button--steam {
  /* Adapt for specific CTAs */
  background-color: $aste-blue;
  color: $aste-white;
  padding: 0.8rem 1.5rem;
  border-radius: 5px;
  font-weight: bold;
  text-align: center;
  &:hover {
    background-color: darken($aste-blue, 10%);
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

/* Social Links Styling */
.social-links .button--sub {
  margin: 0 0.5rem; /* Adjust spacing */
  padding: 0;
  height: 4.5rem; /* Adjust size */
  width: 4.5rem; /* Make square */
  // border-radius: 50%; /* Circular buttons */
  max-width: none;
  border: 1px solid transparent; /* Base border */

  img {
    height: 55%; /* Adjust icon size */
    width: auto;
    display: block;
    opacity: 0.9;
  }

  &:hover {
    filter: brightness(1.1);
    // border-color: $aste-magenta; /* Magenta accent border on hover */
  }

  /* Specific background colors */
  &:nth-child(1) {
    background: #72c1f9;
  } /* Twitter Blue */
  &:nth-child(2) {
    background: #8385fc;
  } /* Discord Purple */
  &:nth-child(3) {
    background: #f55959;
  } /* YouTube Red */

  &.button--yt img {
    height: 65%;
  } /* Adjust YT icon size */
}

/* Fade Transition (Keep from Sapphire) */
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

/* Sub-text style */
.sub-text {
  color: lighten($aste-grey-dark, 20%); /* Lighter grey */
}

.app-asterika__appstore-icon {
  width: 50%;

  @media screen and (max-width: $breakpoint-md) {
    width: 60%;
  }

  @media screen and (min-width: $breakpoint-lg) {
    width: 45%;
  }
}

/* Legal Links Styling */
.legal-links {
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
}

.privacy-link,
.tos-link {
  text-align: center;
}

.privacy-link-text,
.tos-link-text {
  color: $aste-white;
  opacity: 0.7;
  font-size: 1.8rem;
  text-decoration: none;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 1;
    text-decoration: underline;
  }
}

@media screen and (max-width: $breakpoint-sm) {
  .legal-links {
    flex-direction: column;
    gap: 1rem;
  }
}
</style>
