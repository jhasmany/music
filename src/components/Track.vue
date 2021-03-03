<template lang="pug">
  .card
    .content
      img(:src="track.album.images[0].url" alt="Avatar" width="200" heigth="200")
      .description
        h4 {{ track.name }}  
        p.subtitle {{ track.artists[0].name }}
        small {{ track.duration_ms | ms-to-mm }}
      .options
        button(@click="selectTrack" :disabled="!this.track.preview_url") Escuchar
        button(@click="goToTrack(track.id)" :disabled="!this.track.preview_url") Detalle
      div(:id="track.id" style="display: none;")
        pm-player
</template>

<script>
  import PmPlayer from '../components/Player'
  export default {
    components: { PmPlayer },
 
    props: {
      track: { type: Object, required: true },
      tracks: Array
    },

    methods: {
      goToTrack (id) {
        if (!this.track.preview_url) { return }
        this.$store.commit('setTrack', this.track)
        this.$router.push({ name: 'track', params: { id } })
      },

      selectTrack () {
        if (!this.track.preview_url) { return }

        this.tracks.forEach(track => {
          if(track.id === this.track.id){
            document.getElementById(this.track.id).style.display = 'block';
            this.$store.commit('setTrack', this.track)
          } else {
            document.getElementById(track.id).style.display = 'none';
          }
        });
      }
    }
  }
</script>

<style>
.card {
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  width: 216px;
  height: 408px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  color: #4a4a4a;
  margin: 8px;
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

img {
  border-radius: 5px 5px 0 0;
}

.content{
  margin: 8px 8px;
  text-align: center;
}
.description {
  text-align:left;
}

.subtitle{
  color: #4a4a4a;
}

@media screen and (max-width:900px) {
  .card {
    margin-left: auto !important;
    margin-right: auto !important;
    width: 250px;
  }
}
@media screen and (max-width:500px) {
  .card {
      margin-left: auto !important;
      margin-right: auto !important;
      width: 250px;
  }
}
</style>