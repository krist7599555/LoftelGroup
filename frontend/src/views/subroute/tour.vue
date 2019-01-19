<template lang="pug">
section.section.hero.is-danger(style='min-height: calc(100vh - 55px); background-size: cover; background-image: url(http://www.hotel-r.net/im/hotel/asia/th/loftel-22-hostel-3.jpg);     background-color: white; background-blend-mode: luminosity;')
  .is-flex(style='flex-wrap: wrap; justify-content: center; padding-top: 4rem')
    template(v-for='{img, name, message} in rooms')
      .is-inline.card-wrapper
        Card(:name='name' :image='typeof img == "number" ? require(`../../assets/hotel/Loftel22/${img}.jpg`) : img')
          strong.has-text-black {{name}} #[br]
          span(v-html='message')
 

</template>

<script lang="ts">
import Vue from "vue";
import Card from "./card.vue";
export default Vue.extend({
  components: { Card },
  data() {
    return {
      rooms: [
        {
          img:
            "https://d27k8xmh3cuzik.cloudfront.net/wp-content/uploads/2017/02/Thailand-girl.jpg",
          name: "LOF22FOOD",
          message: "ทริปเดินทางท่องเที่ยว 1 วัน"
        },
        {
          img:
            "https://d27k8xmh3cuzik.cloudfront.net/wp-content/uploads/2017/02/Thailand-girl.jpg",
          name: "LOF22FOOD",
          message: "ทริปเดินทางท่องเที่ยว 1 วัน"
        },
        {
          img:
            "https://d27k8xmh3cuzik.cloudfront.net/wp-content/uploads/2017/02/Thailand-girl.jpg",
          name: "LOF22FOOD",
          message: "ทริปเดินทางท่องเที่ยว 1 วัน"
        },
        {
          img:
            "https://d27k8xmh3cuzik.cloudfront.net/wp-content/uploads/2017/02/Thailand-girl.jpg",
          name: "LOF22FOOD",
          message: "ทริปเดินทางท่องเที่ยว 1 วัน"
        }
      ]
    };
  }
});
</script>

<style lang="scss" scoped>
.card-wrapper {
  margin: 10px;
  max-width: 300px;
  animation-name: flipKeyFrame;
  animation-duration: 0.6s;
}
</style>
