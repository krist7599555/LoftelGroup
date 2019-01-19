<template lang="pug">
section.section.hero.is-danger(style='min-height: calc(100vh - 55px); background-size: cover; background-image: url(http://www.hotel-r.net/im/hotel/asia/th/loftel-22-hostel-3.jpg)')
  .box#wellcome
    .title Wellcome
    br
    .subtitle Comfortable and affordable we are a cute hotel nestled in the middle of Sala Daeng Road in the desirable Downtown Silom district of Bangkok.
    br
    router-link(to='/hotel/mail')
      button#bookNow.button.is-light.is-outlined Book now
</template>

<style lang="scss" scoped>
#wellcome {
  background-color: #161616ee;
  color: white;
  max-width: 600px;
  margin: 45px;
  position: absolute;
  right: 0px;
  padding: 50px;
  @media screen and (max-width: 800px) {
    margin: 25px;
  }
  animation-name: opacityKeyFrame;
  animation-duration: 0.6s;
}
#bookNow {
  padding: 0.3rem 70px 0.3rem 0.7rem;
  font-size: 1.3rem;
  font-weight: bold;
}
</style>
