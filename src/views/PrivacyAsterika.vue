<template>
  <div class="privacy tall flex-auto flex justify-center">
    <vue-simple-markdown :source="source"></vue-simple-markdown>
  </div>
</template>
<script>
export default {
  name: '',
  data: () => ({
    source: '',
  }),

  created() {
    // Load asterika privacy policy markdown based on current language
    this.$axios.get('/privacy/privacy-asterika-' + this.$lang + '.md').then((msg) => {
      this.source = msg.data
    })
  },
}
</script>
<style lang="scss">
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
    border-left: 0.4rem solid #592121;
    margin-top: 1.5rem;
  }
}
</style>
