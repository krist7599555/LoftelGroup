<template lang="pug">
div.has-navbar-fixed-bottom
  div(align='center' style='margin-top: 10px; min-height: 30px').is-hidden-desktop
    img#absLogo(src='../assets/loftel22.png' style='height: 120px; width: 140px; z-index: 100000')
  nav.navbar.is-white(role='navigation', aria-label='main navigation')
    .navbar-brand
      a.navbar-item(href='/')
        div(style='width: 250px')
        div.is-hidden-touch
          img(src='../assets/loftel22.png' style='position: absolute;top: 20px; left: 30px; min-height: 140px;min-width: 200px;')
        //- img(src='https://bulma.io/images/bulma-logo.png', width='112', height='28')
      a.navbar-burger.burger(role='button', aria-label='menu', aria-expanded='false', data-target='navbarBasicExample'  @click='open = !open')
        span(aria-hidden='true')
        span(aria-hidden='true')
        span(aria-hidden='true')
    .navbar-menu(:class='open ? "is-active" : ""')
      .navbar-end
        .navbar-item
        router-link.navbar-item(to='/hotel/about') About
        router-link.navbar-item(to='/hotel/room') Room
        router-link.navbar-item(to='/hotel/course') Course / Tour
        //- router-link.navbar-item(to='/hotel/course') Course
        //- router-link.navbar-item(to='/hotel/tour') Tour
        router-link.navbar-item(to='/hotel/gallery') Gallery
        router-link.navbar-item(to='/hotel/contact') Contact Us
        .navbar-item
          router-link(to='/hotel/mail')
            .button.is-danger Book Now
  
  router-view

  nav.navbar.is-danger.is-fixed-bottom(role='navigation' style='padding: 0 30px')
    .navbar-menu
      .navbar-start
        a.navbar-item(href='https://www.facebook.com') #[b-icon(icon='facebook' pack='fab')] #[label facebook]
        a.navbar-item(href='https://www.instagram.com') #[b-icon(icon='instagram' pack='fab')] #[label instagram]
        a.navbar-item(href='https://line.me') #[b-icon(icon='line' pack='fab')] #[label line]
      .navbar-end
        a.navbar-item(href='tel:0999999999') #[b-icon(icon='phone' pack='fas' custom-class='fa-rotate-90')] #[label +66 (0)99 999 9999]
        a.navbar-item(href='mailto:ggg@gmail.com') #[b-icon(icon='envelope' pack='fas')] #[label email@gmail.com]
    .is-hidden-desktop(align='center')
      .mobile-navbar
        a.navbar-item(href='https://www.facebook.com') #[b-icon(icon='facebook' pack='fab')]
        a.navbar-item(href='https://www.instagram.com') #[b-icon(icon='instagram' pack='fab')]
        a.navbar-item(href='https://line.me') #[b-icon(icon='line' pack='fab')]
        a.navbar-item(href='tel:0999999999m') #[b-icon(icon='phone' pack='fas' custom-class='fa-rotate-90')]
        a.navbar-item(href='mailto:ggg@gmail.com') #[b-icon(icon='envelope' pack='fas')]
</template>

<script lang="js">
import Vue from 'vue'
export default {
  data() {
    return {
      open: false
    }
  }
}
</script>

<style lang="scss" scoped>
#absLogo {
  height: 120px;
  width: 140px;
  z-index: 100;
  position: absolute;
  padding: 10px;
  top: 0;
  left: calc(50vw - 70px);
  margin-top: 10px;
}

.navbar-item .icon + label {
  margin-left: 5px;
}
.mobile-navbar {
  display: flex;
  justify-content: space-between;
  max-width: 400px;
  .navbar-item {
    display: inline;
    .icon {
      color: white;
      margin-top: 7px;
    }
  }
}

a.navbar-item:hover {
  @media screen and (min-width: 1088px) {
    transform: scale(1.05);
    transition-duration: 0.3s;
  }
}
</style>
