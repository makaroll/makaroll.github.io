<template>
  <div class="asterika-upsell">
    <a href="https://store.steampowered.com/app/3690850">
      <img src="@/assets/asterika/asterika-rectangle.jpg" class="asterika-upsell__logo" />
    </a>
    <p>{{ $t('ui.desc.asterikaWishlist') }}</p>
    <div class="asterika-upsell__cta">
      <a href="https://store.steampowered.com/app/3690850" class="button">{{ $t('asterika.label.comingSoon') }}</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AsterikaUpsell',
}
</script>

<style lang="scss">
.asterika-upsell {
  padding-bottom: 2rem;
  img {
    width: 100%;
    display: block;
    margin-bottom: 2rem;
  }
}

.asterika-upsell__cta {
  // text-align: center;
  display: flex;
  justify-content: center;
  // padding: 2rem 0;
  // border: 1px solid #10af4f;
  margin: 0 1rem;
}

.asterika-upsell__cta .button {
  background: #10af4f;
  color: #fff;
  border-radius: 0.8rem;
  font-size: $font-size--l + 0.2rem;
  display: block;
  height: auto;
  line-height: 1.5;
  padding: 1.8rem 0.5rem;
  width: 100%;
  margin: 0;
}
</style>
