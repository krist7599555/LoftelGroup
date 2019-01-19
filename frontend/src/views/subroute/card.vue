<template lang="pug">
.card(style='max-width: 400px; min-width: 300px')
  .card-image
    figure.image.is-4by3
      img(:src='image')
  .card-content
    .media
      //- .media-left
        //- figure.image.is-48x48
        //-   img(src='https://bulma.io/images/placeholders/96x96.png', alt='Placeholder image')
      //- .media-content
      //-   p.title.is-4 John Smith
      //-   p.subtitle.is-6 @johnsmith
    .content
      slot
      br
      br
      b-field(expanded)
        router-link(:to='`/hotel/room/${name}`')
          button.button.is-danger.is-fullwidth select
</template>

<script>
export default {
  props: ["name", "image"]
};
</script>
