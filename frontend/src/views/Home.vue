<template lang="pug">
div
  section.section.hero.is-fullheight#patturn
    .columns(style='margin-top: 20px')
      .column
        .content.box
          .title ขอต้อนรับเข้าสู่
          p ขอต้อนรับเข้าสู่โรงแรมในเครือของเรา ที่จะนำพาความสะดวกสบายมาให้ทุการเดินทางที่สำคัญของคุณ
          br
          h5 รายชื่อ
          ul
            li 
              router-link(to='/hotel') Loftel 22 Hostel
            li 
              router-link(to='/hotel') Loftel Station Hostel
            li 
              router-link(to='/hotel') Talakkia Boutique Hotel
            li 
              router-link(to='/hotel') Four Sisters Homestay
          br
          h5 ติดต่อ
          ul
            li: a(href='https://www.facebook.com') #[b-icon(icon='facebook' pack='fab')] #[label facebook]
            li: a(href='https://www.instagram.com') #[b-icon(icon='instagram' pack='fab')] #[label instagram]
            li: a(href='https://line.me') #[b-icon(icon='line' pack='fab')] #[label line]
            li: a(href='tel:0999999999') #[b-icon(icon='phone' pack='fas' custom-class='fa-rotate-90')] #[label +66 (0)99 999 9999]
            li: a(href='mailto:ggg@gmail.com') #[b-icon(icon='envelope' pack='fas')] #[label email@gmail.com]
      .column.is-7
        .home.box(style='position: absolute; background-color: black; overflow: scroll')
          figure.image
            img#map(alt='map', src='../assets/map.jpg', style='opacity: 0.3')
          div(style='width: 100%; height: 100%')
            div(style='position: absolute; top: 43%; left: 67%')
              router-link(to='/hotel2')
                button.button.is-info.is-large(style='max-width: 100%') Roftel station
            div(style='position: absolute; top: 55%; left: 14%')
              router-link(to='/hotel')
                button.button.is-danger.is-large(style='max-width: 100%') Roftel22
            div(style='position: absolute; top: 73%; left: 18%')
              router-link(to='/hotel')
                button.button.is-warning.is-large(style='max-width: 100%') Four Sister
            div(style='position: absolute; top: 62%; left: 22%')
              router-link(to='/hotel')
                button.button.is-white.is-large(style='max-width: 100%') Four Sister
  .hero.is-fullheight(style='background-color: rgb(251, 251, 251)')
    .hero-body
      .columns
        .column.is-5
          figure.image(width='100px')
            img(src='./../assets/loftel22.png' style='width: 100px')
            br
          figure.image
            img(src='./../assets/hotel/Loftel22/18.jpg')
        .column
          .content
            h1 Loftel 22
            p we pround of Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            p we pround of Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            p we pround of Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            p.is-italic ราคา 250+
            router-link(to='/hotel' style='text-decoration: underline;') read more
  .hero.is-fullheight(style='background-image: url(http://www.onceagainhostel.com/images/bg_roomtype.jpg)')
    .hero-body
      .columns
        .column
          .content
            h1 Loftel Station
            p we pround of Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        .column.is-3
          figure.image
            img(src='./../assets/station.gif')
  .hero.is-fullheight(style='background-image: url(http://www.onceagainhostel.com/images/bg_map.jpg); color: white')
    .hero-body
      .columns
        .column.is-3
          figure.image
            img(src='./../assets/hotel/Loftel22/13.jpg')
        .column
          .content
            .is-size-3 Loftel 22
            p we pround of Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

@Component({
  components: {
    HelloWorld
  }
})
// @ts-ignore
export default class Home extends Vue {}
</script>

<style lang="scss" scoped>
@font-face {
  font-family: myFirstFont;
  src: url(https://fonts.gstatic.com/s/ebgaramond/v9/SlGUmQSNjdsmc35JDF1K5GR1SDk_YAPI.woff2);
}
* {
  font-family: myFirstFont !important;
}
#map {
  display: block;
  height: auto;
  width: auto;
  @media screen and (orientation: portrait) {
    max-height: 50vh;
  }
  @media screen and (orientation: landscape) {
    max-width: 50vw;
  }
}
#patturn {
  background-image: url("../assets/pattern-story.jpg");
}
a {
  color: #d13a00;
}
</style>
