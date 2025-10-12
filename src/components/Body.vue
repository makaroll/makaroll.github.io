<template>
  <div class="body relative">
    <div class="body__sub-img body__sub-img--1 absolute">
      <img src="../assets/subImg1.png" class="block" alt="" />
    </div>
    <!-- <div class="center caps body__heading relative">Features</div> -->
    <div class="body__desc body__desc--no-bg sm-col-12 md-col-7 lg-col-7 relative">
      <Trailer />
      <!-- <h2 class="caps">About</h2> -->
      <p class="body__about mt3">
        Phantom Rose is a roguelike deckbuilding card game. Play as Reina, a maid in search of her lost master in a
        mansion now ravaged by evil creatures. Build a deck of spell cards to defeat the phantoms and make careful
        decisions while you explore as each death is permanent.
      </p>
    </div>
    <div class="body__content clearfix relative mxn2 items-stretch">
      <div class="body__feature sm-col sm-col-12 md-col-4 px2">
        <div class="body__desc body__desc--1 flex flex-column">
          <img src="../assets/clip1.gif" class="block" />
          <div class="p3 flex flex-column justify-between tall">
            <h3 class="caps m0">Defeat and collect</h3>
            <p class="mt0">
              Collect powerful spell cards and game changing items by defeating phantoms, rescuing other maids in
              distress
            </p>
          </div>
        </div>
      </div>
      <div class="body__feature sm-col sm-col-12 md-col-4 px2">
        <div class="body__desc body__desc--2 flex flex-column">
          <img src="../assets/clip2.gif" class="block" />
          <div class="p3 flex flex-column justify-between tall">
            <h3 class="caps m0">Explore through dangers</h3>
            <p class="mt0">
              Venture through areas of interest, danger, and place of safety to reach and defeat the crown phantoms for
              large rewards
            </p>
          </div>
        </div>
      </div>
      <div class="body__feature sm-col sm-col-12 md-col-4 px2">
        <div class="body__desc body__desc--3 flex flex-column">
          <img src="../assets/clip3.gif" class="block" />
          <div class="p3 flex flex-column justify-between tall">
            <h3 class="caps m0">Build your everchanging deck</h3>
            <p class="mt0">
              Cards you use in battle disappear forever from your deck. Manage and control constantly changing, truly
              dynamic card deck
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Trailer from './Trailer.vue'

export default {
  name: '',
  data: () => ({}),

  components: {
    Trailer,
  },
}
</script>
<style lang="scss" scoped>
.body__heading {
  font-size: $font-size--xxl;
}
.body__content {
  display: flex;

  @media screen and (max-width: $breakpoint-md) {
    display: block;
  }
}

.body__label {
  font-size: $font-size--xl;
  // font-weight: $font-weight--black;
}

.body__feature {
  // background: red;
}

.body__desc {
  height: 100%;
  background: $hh-grey--dark;
  border-radius: 0.4rem;
  overflow: hidden;
  margin-bottom: 2rem;

  &--no-bg {
    background: none;
  }

  p {
    font-size: $font-size--l;
    opacity: 0.6;
    line-height: 1.5;
  }

  .body__about {
    font-size: $font-size--xl;
    margin-bottom: 4rem;

    @media screen and (max-width: $breakpoint-md) {
      font-size: 2rem;
    }
  }

  img {
    width: 100%;
  }
}

.body__sub-img {
  img {
    width: 65rem;
  }
  &:after {
    display: block;
    position: absolute;
    bottom: 0;
    width: 100%;
    content: '';
    left: 0;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%);
    height: 30%;
  }
}

.body__sub-img--1 {
  right: -10rem;
  top: -9rem;
  @media screen and (max-width: $breakpoint-md) {
    display: none;
  }
}
</style>
