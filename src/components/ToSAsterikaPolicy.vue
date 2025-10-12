<template>
  <div id="tos" class="tos-policy col sm-col sm-col-12 md-col-6 lg-col-4 mb4">
    <div class="pl2 pr2">
      <vue-simple-markdown :source="source"></vue-simple-markdown>
      <div class="scarlet-border"></div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['showToS'],
  data: () => ({
    source: '',
  }),

  created() {
    // Load asterika terms of service markdown based on current language
    this.$axios.get('/tos/tos-asterika-' + this.$lang + '.md').then((msg) => {
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
