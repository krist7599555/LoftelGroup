<template lang="pug">
  section.section.hero.is-white(style='min-height: calc(100vh - 55px); background-size: cover; background-image: url(http://www.hotel-r.net/im/hotel/asia/th/loftel-22-hostel-3.jpg)')
    div(align='center')
      .box
        .content(align='left')
          .title Contact us
          form
            b-field(label='Email')
              b-input(type='email')
            b-field(label='Phone')
              b-input(type='tel')
            b-field(label='Title')
              b-input(type='text')
            b-field(label='Message')
              b-input(type='textarea')
            b-field
              button.button.is-danger(type='submit') submit
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({});
</script>

<style lang="scss" scoped>
.box {
  max-width: 700px;
}
</style>
