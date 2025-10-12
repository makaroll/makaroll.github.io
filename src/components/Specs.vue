<template>
  <div class="specs relative clearfix">
    <div class="specs__content relative sm-col sm-col-12 md-col-6 lg-col-6">
      <h2 class="caps">Information</h2>
      <div class="specs__sheet">
        <div class="mb4">
          <div class="mb4">
            <h3 class="mb1">When is the release date?</h3>
            August 7th @ 7PM PDT, 2019
          </div>

          <div class="mb4">
            <h3 class="mb1">Which platform?</h3>
            Windows & macOS
          </div>
        </div>
      </div>
    </div>

    <div class="specs__content relative sm-col sm-col-12 md-col-6 lg-col-6">
      <h2 class="caps">Developer Message</h2>
      <div class="specs__sheet specs__sheet--message">
        I'm makaroll, the solo developer and artist for Phantom Rose. In early 2018, I wanted to take on a personal
        challenge to create something using the skills and experience I've learned working as a professional UI
        designer. Regardless of how the game is received, it has been and I hope it will continue to be an incredible
        journey for me. For those that’s been looking forward to the game, I hope it can live up to your expectations.
        For those that’s considering the game, I hope it can be something to look forward to. Thank you and enjoy!
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: '',
  data: () => ({}),
}
</script>
<style lang="scss" scoped>
.specs {
  max-width: 120rem;
  margin: 0 auto;
}

.specs__sheet {
  font-size: $font-size--xl;

  h3 {
    font-size: $font-size--l;
  }
}

.specs__sheet--message {
  font-size: 1.8rem;
}
</style>
