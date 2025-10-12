<template>
  <div class="app-music tall flex-auto flex justify-center">
    <div class="col col-12 sm-col-10 lg-col-7 px2">
      <div class="app-music__content mt2 mb2">
        <div class="app-music__header">
          <template v-if="!type">
            <h1>{{ $t('ui.label.oriSoundtrack') }}</h1>
            <hr />
          </template>

          <div class="flex justify-between app-music__album-wrap relative wide" v-if="!type || type == 'sapphire'">
            <div class="app-music__album-art">
              <img src="@/assets/pr2-album.jpg" />
            </div>
            <div class="app-music__album-title flex justify-end items-center flex-wrap">
              <a
                href="https://open.spotify.com/album/6f5tzyhDXYtTTlanldjrJF?si=qb8Vl5KcQJaYOrYr9rqYzQ"
                class="app-music__button flex flex-column justify-end"
              >
                <img src="@/assets/spotifyM.png" />
                Spotify</a
              >
              <a
                href="https://music.apple.com/album/phantom-rose-2-sapphire/1774747754"
                class="app-music__button flex flex-column justify-end"
              >
                <img src="@/assets/appleM.png" />
                Apple
              </a>
              <a
                href="https://music.youtube.com/playlist?list=OLAK5uy_mobXs8d6i-ou6XRwrm0VoZbjJQPyi40S8&si=QCT1KE2Kqot0O-ou"
                class="app-music__button flex flex-column justify-end"
              >
                <img src="@/assets/youtubeM.png" />
                YouTube</a
              >
              <a
                href="https://music.amazon.com/albums/B0DK9SKVVM?marketplaceId=ATVPDKIKX0DER&ref=dm_sh_YDz9fBoaPbfOHeKSNGbizcpbo"
                class="app-music__button flex flex-column justify-end"
              >
                <img src="@/assets/amazonM.png" />
                Amazon
              </a>
            </div>
          </div>

          <div
            class="flex justify-between app-music__album-wrap app-music__album-wrap--red my3 relative wide"
            v-if="!type || type == 'scarlet'"
          >
            <div class="app-music__album-art">
              <img src="@/assets/pr1-album.jpg" />
            </div>
            <div class="app-music__album-title flex justify-end items-center flex-wrap">
              <a
                href="https://open.spotify.com/album/2zDNLnXRBXz0Z7LiDxPqrg?si=EGaeN5KoTxueHQjNkKxQMw"
                class="app-music__button flex flex-column justify-end"
              >
                <img src="@/assets/spotifyM.png" />
                Spotify</a
              >
              <a
                href="https://music.apple.com/album/phantom-rose-scarlet-original-soundtrack/1770560082"
                class="app-music__button flex flex-column justify-end"
              >
                <img src="@/assets/appleM.png" />
                Apple
              </a>
              <a
                href="https://music.youtube.com/playlist?list=OLAK5uy_n9f1YXhMEJCIpWOSEQvJ5kOXzQghDghlE&si=zemJ2HDsp5w_n2VS"
                class="app-music__button flex flex-column justify-end"
              >
                <img src="@/assets/youtubeM.png" />
                YouTube</a
              >
              <a
                href="https://music.amazon.com/albums/B0DHYJCZMB?marketplaceId=ATVPDKIKX0DER&ref=dm_sh_DF11heAG7qtyUjfo9d3SfbK86"
                class="app-music__button flex flex-column justify-end"
              >
                <img src="@/assets/amazonM.png" />
                Amazon
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['type'],
}
</script>
<style lang="scss">
.app-music__content {
  background: #111;
  padding: 1rem 1.5rem 1rem;
  border-radius: 1rem;
  // border: solid 0.3rem #592121;

  hr {
    margin-bottom: 2.8rem;
    border-color: $hh-blue--light;
  }
}

.app-music__album-wrap {
  background: #242843;
  padding: 3rem;

  &--red {
    background: #432425;
  }

  @media screen and (max-width: $breakpoint-md) {
    padding: 0;
    flex-wrap: wrap;
  }
}

.app-music__header {
  text-align: left;
}

.app-music__album-art {
  width: 46%;

  img {
    width: 100%;
    border: 0.8rem solid #fff;
    display: block;
  }

  @media screen and (max-width: $breakpoint-md) {
    width: 100%;

    img {
      border: none;
    }
  }
}

.app-music__album-title {
  width: 47%;

  @media screen and (max-width: $breakpoint-md) {
    // position: absolute;
    bottom: 0;
    width: 100%;
    background: #242843;
    height: 15rem;
    left: 0;
    justify-content: center;
    padding: 0.5rem 0;

    .app-music__album-wrap--red & {
      background: #432425;
    }
  }
}

.app-music__button {
  width: 46%;

  padding: 1.5rem 2rem;
  background: blue;
  font-size: $font-size--xl;
  font-weight: $font-weight--black;
  border-radius: 1rem;
  text-align: center;
  color: #fff;
  margin: 2%;

  img {
    display: block;
    margin: 0 auto 1rem;
    width: 70%;
  }

  opacity: 0.9;

  &:nth-child(1) {
    background: #358c1e;
  }

  &:nth-child(2) {
    background: #c13664;
  }

  &:nth-child(3) {
    background: #c13637;
  }

  &:nth-child(4) {
    background: #3681c1;
  }

  &:hover {
    opacity: 1;
  }

  @media screen and (max-width: $breakpoint-md) {
    bottom: 0;
    width: 45%;
    background: black;
    height: 35%;
    flex-direction: row;
    padding: 0.5rem 1.5rem;
    align-items: center;
    justify-content: center;
    margin: 1% 2%;

    img {
      width: auto;
      height: 90%;
      margin: 0;
      margin-right: 1rem;
    }
  }
}
</style>
