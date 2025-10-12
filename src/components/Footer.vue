<template>
  <footer class="flex flex-column items-center">
    <img src="../assets/studio-logo.png" alt="Studio Maka" class="studio-logo" />
    <div class="footer-body mb4 ml2 mr2">
      <!-- <p class="strong caps">about</p> -->
      <p class="center">One-man game studio of makaroll.</p>
      <p class="center">
        Twitter:
        <a href="https://twitter.com/makaroll410">@makaroll410</a>&nbsp;&nbsp; &middot; &nbsp;&nbsp;Email:
        studiomakadev&nbsp;[at]&nbsp;gmail.com&nbsp;&nbsp; &middot; &nbsp;&nbsp;
      </p>
    </div>
  </footer>
</template>
<script>
export default {
  name: '',
  data: () => ({
    showPrivacy: false,
  }),

  created() {
    //do something after creating vue instance
    if (location.hash === '#privacy') {
      this.showPrivacy = true
    }
  },

  mounted() {
    if (this.showPrivacy) {
      var elmnt = document.getElementById('privacy')
      elmnt.scrollIntoView()
    }
  },

  methods: {
    togglePrivacy() {
      this.showPrivacy = !this.showPrivacy
    },
  },
}
</script>
<style lang="scss">
footer a {
  text-decoration: none;
  color: #bd294d;
}

footer {
  width: 100%;
  /* height: 40rem; */
  background: #111;

  &.app__footer--no-bg {
    background: none;
  }
}

.studio-logo {
  width: 18rem;
  height: auto;
  margin: 3rem auto 2.8rem;
  display: block;
  opacity: 0.5;
}

.footer-body {
  max-width: 56rem;
  color: #888;
}

.footer-body p {
  margin: 0;
}
</style>
