<template>
  <div class="faq flex justify-center">
    <div class="faq__card col col-12 sm-col-10 md-col-8 lg-col-6">
      <div v-if="loading" class="faq__state flex justify-center items-center">
        <span class="faq__spinner"></span>
      </div>

      <div v-else-if="error" class="faq__state flex flex-column justify-center items-center">
        <p class="faq__error-icon">⚠</p>
        <p class="faq__error-text">{{ error }}</p>
      </div>

      <vue-simple-markdown v-else :source="source"></vue-simple-markdown>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Faq',
  data: () => ({
    source: '',
    loading: true,
    error: null,
  }),

  created() {
    const { folder, file } = this.$route.params
    this.$axios
      .get(`/faq/${folder}/${file}.md`)
      .then((res) => {
        this.source = res.data
        this.loading = false
      })
      .catch(() => {
        this.error = 'Could not load this help article.'
        this.loading = false
      })
  },
}
</script>

<style lang="scss">
.faq {
  min-height: 100vh;
  padding: 3rem 1.5rem;
  background: #111;
  font-size: 2rem;
}

.faq__card {
  background: #1a1a1a;
  border-radius: 1rem;
  padding: 2.5rem 2.5rem 3rem;
}

.faq__state {
  min-height: 20rem;
}

.faq__error-icon {
  font-size: 4rem;
  margin: 0 0 1rem;
  opacity: 0.6;
}

.faq__error-text {
  font-size: 1.6rem;
  opacity: 0.6;
  margin: 0;
}

@keyframes faq-spin {
  to {
    transform: rotate(360deg);
  }
}

.faq__spinner {
  display: block;
  width: 3.6rem;
  height: 3.6rem;
  border: 0.3rem solid rgba(255, 255, 255, 0.15);
  border-top-color: rgba(255, 255, 255, 0.7);
  border-radius: 50%;
  animation: faq-spin 0.8s linear infinite;
}
</style>
