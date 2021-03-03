<template lang="pug">
  .container
    .play(v-if="track")
      p
        img(:src="track.album.images[0].url")
      p
        strong {{ track.name }} 
        small {{ track.duration_ms | ms-to-mm }}
      pm-player
    .detalle
      ul
        li
          strong Album:
          span  {{ track.album.album_type}}
        li
          strong Artista:
          span  {{ track.artists[0].name }}
        li
          strong Canción:
          span {{ track.name }} 
        li
          strong Número de Disco:
          span  {{ track.disc_number }}
        li
          strong Duración:
          span  {{ track.duration_ms | ms-to-mm }}
        li
          strong Url Externo:
          span  {{ track.external_urls }}
        li
          strong Href:
          span  {{ track.href }}
        li
          strong Popularidad:
          span  {{ track.popularity }}
        li
          strong Tipo:
          span  {{ track.track }}

</template>

<script>
  import { mapState } from 'vuex'
  import PmPlayer from '../components/Player'
  export default {
    components: { PmPlayer },
    data () {
      return {
        track2: []
      }
    },

    computed: { ...mapState(['track']) 
  }
  }
</script>

<style scoped>
  .container{
    flex-direction: row;
    width: 100%;
    display: flex;
  }
  .play{
    width: 30%;
    padding: 16px;

    text-align: center;

  }
  .detalle{
    width: 70%;
    padding: 16px;
  }

  .detalle ul li{
    margin-bottom: 16px;
  }
  img {
    width: 250px;
    border-radius: 8px;
  }

  
@media screen and (max-width:900px) {
  .container{
    flex-direction: column;
  }
}
@media screen and (max-width:500px) {
  .container{
    flex-direction: column;
  }
}
</style>