<template>
  <div id="privacy" class="privacy-policy col sm-col sm-col-12 md-col-6 lg-col-4 mb4">
    <div class="pl2 pr2">
      <vue-simple-markdown :source="source"></vue-simple-markdown>
      <div class="scarlet-border"></div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['showPrivacy'],
  data: () => ({
    source: '',
  }),

  created() {
    // Load privacy policy markdown based on current language
    this.$axios.get('/privacy/privacy-' + this.$lang + '.md').then((msg) => {
      this.source = msg.data
    })
  },

  mounted() {
    //do something after mounting vue instance
    window.scrollTo(0, 0)
  },
}
</script>
<style lang="scss"></style>
