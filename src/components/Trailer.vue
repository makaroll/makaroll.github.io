<template>
  <div class="trailer">
    <div class="trailer__content clearfix">
      <!-- mx-auto sm-col-12 md-col-8 lg-col-6" -->
      <div class="video-wrapper" :class="{ 'video-wrapper--borderless': borderless }">
        <div class="video">
          <iframe
            class="video__embed"
            :src="url ? url : 'https://www.youtube.com/embed/y3hiAN8M9Bg'"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            scrolling="no"
            allowfullscreen
          ></iframe>
        </div>
        <!-- <div class="video-label absolute ">WATCH</div> -->
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: '',
  props: ['url', 'borderless'],
  data: () => ({}),
}
</script>
<style lang="scss" scoped>
.trailer__content {
}

.video-wrapper {
  // width: 100%;
  position: relative;
  background: black;

  &:before {
    display: block;
    content: '';
    width: 14rem;
    height: 2rem;
    background: url(../assets/trailer-border.png) no-repeat;
    position: absolute;
    bottom: -1.2rem;
    left: 0rem;
  }

  // &:after {
  //   display: block;
  //   content: '';
  //   width: 100%;
  //   position: absolute;
  //   top: 50%;
  //   left: 50%;
  //   transform: translate3d(-50%, -50%, 0);
  //   height: 100%;
  //   // background: red;
  //   box-shadow: 0 0 0.6rem rgba($hh-white, 0.5);
  //   border: solid rgba($hh-white, 1) 0.3rem;
  //   padding: 1.5rem;
  //   // filter: drop-shadow(0 0 2rem rgba($hh-white, 1));
  //
  // }

  border-bottom: solid rgba($hh-white, 1) 0.3rem;
  padding-bottom: 3rem;

  &--borderless {
    border: none;
    padding: 0;
  }

  &--borderless:before {
    display: none;
  }
}

.video-label {
  bottom: -2.6rem;
  left: 50%;
  transform: translateX(-50%);
  background: #000;
  z-index: 9;
  padding: 0 1rem;
  font-weight: $font-weight--black;
  letter-spacing: 0.2rem;
  font-size: $font-size--m;
}

.video {
  position: relative;
  overflow: hidden;
  height: 0;
  padding-bottom: 56.25%;
  // padding: 2rem;
  // border: 0.2rem solid $hh-white;
}

.video__embed {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

/* Adding pseudo element to iframe parent */
.video:after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: block;
}

/* Adding hover effect to pseudo element */
.video:hover:after {
  // content: none;
  transition: all 0 linear;
  transition-delay: 150ms;
  height: 0;
}

@media (hover: none) {
  .video:after {
    content: none;
  }
}
</style>
