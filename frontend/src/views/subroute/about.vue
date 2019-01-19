<template lang="pug">
section.section.hero.is-danger(style='min-height: calc(100vh - 55px); background-size: cover; background-image: url(http://www.hotel-r.net/im/hotel/asia/th/loftel-22-hostel-3.jpg)')
  .box#wellcome
    .columns
      .column.is-8
        figure.image
          img(src="https://scontent.fbkk4-3.fna.fbcdn.net/v/t31.0-8/1396900_267445413380828_1707206008_o.jpg?_nc_cat=106&_nc_eui2=AeGJiuZ5SMSbvLpCXSpGVKVDOf2Z0cBvRP69iUwEk3afnwLv53ybaua5SGf1NWuzNzyDUJL1A_n5qGTM2iLlJXcHqMjTYFGR-n7Erztz6bnjqQ&_nc_ht=scontent.fbkk4-3.fna&oh=53d1e9624f649847a5690bfa8ca618ca&oe=5CC69D7B")
      .column
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
  color: #ffffff;
  max-width: 1200px;
  margin: 25px;
  position: absolute;
  right: 0px;
  padding: 50px;
  @media screen and (max-width: 800px) {
    margin: 15px;
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
