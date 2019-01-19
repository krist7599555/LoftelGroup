<template lang="pug">
section.section(style='min-height: calc(100vh - 55px); background-size: cover; background-color: #f3f3f3;')
  div(align='center')
    h1.title(style='color: #363636') Contact Us
  br
  br
  div(align='center')
    .columns(style='color: #363636; max-width: 800px')
      .column.is-5
        .content(align='left')
          p.
            952 charoenkrung taladnoi sampantawong, <br/> 
            10100 Bangkok, Thailand
          p.
            Contact us directly by phone or email
          ul
            li: strong email@gmail.com
            li: strong +66 (0)99 999 9999
          p.
            Are you looking for a career in Bangkok's thriving hospitality Industry? Send us an email with your resume attached to:
          p: strong.
            email@hotel.com
      .column
        fogure.image
          img(src='https://lphostelworld.imgix.net/propertyimages/8/85646/40.jpg')

</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  components: {},
  data() {
    return {};
  }
});
</script>

<style lang="scss" scoped>
.card-wrapper {
  margin: 10px;
  max-width: 270px;
}
</style>
