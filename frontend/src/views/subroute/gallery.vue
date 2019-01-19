<template lang="pug">
section.section.hero.is-danger(style='min-height: calc(100vh - 55px); background-size: cover; background-color: #f3f3f3;')
  div(align='center')
    h1.title(style='color: #363636') Gallery
  .is-flex(style='flex-wrap: wrap; justify-content: center; padding-top: 4rem')
    template(v-for='i in image')
      .is-inline.card-wrapper
        figure.image(@click='modal(i)')
          img(:src='i')

</template>

<script lang="ts">
import Vue from "vue";
import * as _ from "lodash";
export default Vue.extend({
  components: {},
  data() {
    return {
      image: _.range(1, 25).map(num =>
        require(`../../assets/hotel/Loftel22/${num}.jpg`)
      )
      // [
      //   "https://d1nabgopwop1kh.cloudfront.net/hotel-asset/30000002000586948_wh_27",
      //   "https://www.hostelgalaxy.com/Content/ImagenesUpload/6b618ab0-b369-4c6a-889a-cbe589f35a59_DSC00108.JPG",
      //   "https://media-cdn.tripadvisor.com/media/photo-s/07/a2/4c/1b/loftel-22-bangkok.jpg",
      //   "https://lphostelworld.imgix.net/propertyimages/8/85646/56.jpg",
      //   "http://a.hwstatic.com/propertyimages/8/85646/1.jpg",
      //   "https://ed.files-media.com/static-cache/resize-cache/wk18/ud/gal/dcp/37/108086/_DSF1462.jpg",
      //   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXrBg9ti_LXeiMC63ogNeNuLglA82Ats6s30z_-wnYOdUlxYe7",
      //   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK4t2zcufcHTrp92YisIDC5ChLvLIPFR2t6Mg-qJk6PFjNGpsftA",
      //   "https://pix10.agoda.net/hotelImages/536/536305/536305_16111716250048839467.jpg?s=1024x768",
      //   "https://q-xx.bstatic.com/xdata/images/hotel/840x460/65553428.jpg?k=31dc571dc8132bf517a1d6db95f56490c3f63df491423bfc4cd77cccf496019a&o=",
      //   "https://media.foody.co.th/res/g27/261836/prof/s576x330/foody-upload-api-foody-mobile-2-jpg-180129120622.jpg"
      // ]
    };
  },
  methods: {
    modal(src) {
      this.$modal.open(
        `<p class="image ">
              <img src="${src}">
          </p>`
      );
    }
  }
});
</script>

<style lang="scss" scoped>
.card-wrapper {
  margin: 10px;
  max-width: 270px;
  animation-name: opacityKeyFrame;
  animation-duration: 2s;
}
</style>
