<template lang="pug">
section.section.hero.is-danger(style='min-height: calc(100vh - 55px); background-size: cover; background-image: url(http://www.hotel-r.net/im/hotel/asia/th/loftel-22-hostel-3.jpg)')
  div(align='center')
    .columns.box#wellcome.is-paddingless.is-marginless.is-clipped
      .column.is-1#goback.is-marginless.is-paddingless
        router-link(to='/hotel/room')
          .is-flex(style='color: white; justify-content: center; vertical-align: middle; height: 100%; align-items: center;')
            b-field
              b-icon(icon='angle-left' pack='fas')
              span back
      .column#contentLR(align='left')
        .columns
          .column
            .content
              .title Room {{name}}
              span(v-html='html1')
              hr
              .columns
                .column
                  span(v-html='html2')
                .column
                  span(v-html='html3')
          .column.is-5
            div(align='center' @click='modelIt')
              img(:src='thumbnails[focusImg]' style='max-height: 310px; width: auto')
            .field(style='overflow: scroll')
              .is-flex
                template(v-for='(im, idx) in thumbnails')
                  img.thumbnail(:src='im' @click='focusImg = idx')
            b-field
              router-link(to='/hotel/mail')
                button.button.is-fullwidth.is-danger book
</template>

<script lang="ts">
import Vue from "vue";
import axios from "axios";
import * as _ from "lodash";
export default Vue.extend({
  computed: {
    name() {
      return this.$route.params.name;
    }
  },
  mounted() {
    axios
      .get("http://127.0.0.1:8000/content/" + this.name)
      .then(res => res.data)
      .then(({ name, html1, html2, html3 }) => {
        this.html1 = html1;
        this.html2 = html2;
        this.html3 = html3;
      });
  },
  data() {
    return {
      html1: "",
      html2: "",
      html3: "",
      focusImg: 0,
      thumbnails: _.range(19, 23).map(num =>
        require(`../../assets/hotel/Loftel22/${num}.jpg`)
      )
    };
  },
  methods: {
    modelIt() {
      this.$modal.open(
        `<p class="image ">
              <img src="${this.thumbnails[this.focusImg]}">
          </p>`
      );
    }
  }
});
</script>

<style lang="scss" scoped>
#wellcome {
  background-color: #161616ee;
  color: white;
  max-width: 1200px;
  margin: 25px;
  margin-left: 0;
  // position: absolute;
  right: 0px;
  padding: 50px;
  @media screen and (max-width: 800px) {
    margin: 25px;
  }
  animation-name: opacityKeyFrame;
  animation-duration: 0.6s;
}
#goback {
  background-color: #00000099;
  opacity: 0.6;
  &:hover {
    opacity: 1;
  }
}
#contentLR {
  padding: 40px;
  @media screen and (max-width: 800px) {
    padding: 25px;
  }
}
.thumbnail {
  height: 100px;
  width: auto;
  cursor: pointer;
  &:not(:last-child) {
    margin-right: 10px;
  }
}
</style>
