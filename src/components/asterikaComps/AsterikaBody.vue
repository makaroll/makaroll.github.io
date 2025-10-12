<template>
  <div class="asterika-body ml3 mr3 sm-col-10 lg-col-7 relative">
    <div class="flex flex-column items-center">
      <div class="asterika-body__intro-container relative">
        <!-- Trailer using Sapphire's structure and placeholder ID -->
        <div class="asterika-body__trailer-wrapper">
          <Trailer :borderless="true" :url="placeholderVideoUrl" />
        </div>
        <!-- Long Description Placeholder -->
        <p class="asterika-body__about" v-html="$t('asterika.desc.longDesc')"></p>
      </div>
    </div>

    <!-- Gallery using Sapphire's structure (SapphireScreens) as placeholder reference -->
    <!-- We will create AsterikaScreens later or adapt SapphireScreens -->

    <!-- Placeholder Title -->
    <AsterikaScreens />
    <!-- Using SapphireScreens temporarily as placeholder structure -->
  </div>
</template>

<script>
// Using SapphireScreens temporarily for structure placeholder
// Import the new AsterikaScreens component
import AsterikaScreens from './AsterikaScreens'
// Using shared Trailer component
import Trailer from '../Trailer.vue'

export default {
  name: 'AsterikaBody',
  data: () => ({}),

  computed: {
    // Using Sapphire's video URLs as placeholders
    placeholderVideoUrl() {
      let defaultPath = 'https://www.youtube.com/embed/r1CZaYOGB68' // Sapphire EN

      if (this.$lang === 'ko') defaultPath = 'https://www.youtube.com/embed/r1CZaYOGB68' // Sapphire KO
      if (this.$lang === 'jp') defaultPath = 'https://www.youtube.com/embed/r1CZaYOGB68' // Sapphire JP

      return defaultPath
    },
  },

  components: {
    AsterikaScreens,
    Trailer,
  },
}
</script>

<style lang="scss" scoped>
/* Styles adapted from SapphireBody.vue */
.asterika-body {
  margin-top: 2rem;
  width: 100%; /* Ensure it takes width within parent */
}

.asterika-body__about {
  font-size: $font-size--xl; /* Adjust as needed */
  z-index: 1;
  max-width: 70rem; /* Limit width */
  margin: 2rem auto 4rem; /* Center and add spacing */
  line-height: 1.6;
  color: rgba($aste-white, 0.9);
  padding: 0 1rem;
  @media screen and (min-width: $breakpoint-sm) {
    font-size: $font-size--xl + 0.2rem; /* Slightly larger on desktop */
    margin-bottom: 6rem;
  }
}

.asterika-body__intro-container {
  width: 100%;
  overflow: hidden;
  margin-top: 4rem;

  @media screen and (min-width: $breakpoint-sm) {
    margin-top: 8rem; /* More top margin on desktop */
  }
}

.asterika-body__trailer-wrapper {
  position: relative;
  /* Add padding/max-width if needed */
  max-width: 800px; /* Example max-width */
  margin: 0 auto;
  overflow: hidden; /* For border-radius */
}
</style>
