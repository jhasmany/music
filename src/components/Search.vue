<template lang="pug">
  div.container
    div.main
      transition(name="move")
        pm-loader(v-show="isLoading")
      div.buscar-texto
        input(type="text",
        placeholder="Buscar canciones",
        v-model="searchQuery"
        @keyup.enter="search")
        a.button(@click="search") Buscar
        //- a.button(href="#" ) X

      div.cards
        .tracksSearch(v-for="t in tracks")  
          pm-track(:track="t" :tracks="tracks") 

</template>

<script>
import trackService from '../services/track'
import PmTrack from '../components/Track'
import { mapState } from 'vuex'
import PmLoader from '../components/shared/Loader.vue'

export default {
  name: 'app',
  components: { 
    PmTrack,
    PmLoader
    },
  data () {
    return {
      searchQuery: '',
      tracks: [],

      isLoading: false,
      showNotification: false,

      selectedTrack: ''
    }
  },
  created(){
    this.$store.commit('setTrack', null)
  },
  
  computed: { ...mapState(['track']) 
  },

  methods:{
    listar(){
      trackService.search('muchacha').then((response) => {
        this.tracks = response.data.tracks.items
      })
      .catch((e)=>{
        console.log('error' + e);
      })
    },
    search () {
      if(this.track){
        document.getElementById(this.track.id).style.display = 'none';
      }

      if (!this.searchQuery) { return }

      this.isLoading = true
      trackService.search(this.searchQuery).then((response) => {
        this.tracks = response.data.tracks.items
        this.isLoading = false
      })
      .catch((e)=>{
        console.log('error' + e);
        this.isLoading = false
      })
    },

  }
}
</script>

<style>
.container{
  display: flex;
  justify-content: center;
  flex-direction: column;
  background: #f5f9fa;
}
.main{
  width: 90% !important;
  margin-left: auto;
  margin-right: auto;

}

.buscar-texto{
    height: 32px;
    display: flex;
    text-align: center;
    justify-content: center;
    margin: 16px 0;
}

input[type=text] {
  padding: 6px;
  font-size: 17px;
  width:300px;
  
}

input[type=text]:focus
{  outline-color: #719ECE;
}
.button {
  padding: 6px;

  margin-left: 16px;
  background: #98CA3F;
  font-size: 17px;
  border: none;
  cursor: pointer;
}

.cards{
    display: grid;
    grid-template-columns: auto auto auto auto;
}

a{
  text-decoration: none;
  color: #fff;
  padding: 4px;
}

@media screen and (max-width:900px) {

  .container{
    width: 70%;
  }
  .main{
    width: 100% !important;
    margin-left: auto !important;
    margin-right: auto !important;
  }
  .cards{
    display: grid;
    grid-template-columns: auto auto;
  }
}
@media screen and (max-width:500px) {

  .container{
    width: 40%;
  }
  .main{
    width: 100% !important;
    margin-left: auto !important;
    margin-right: auto !important;
  }
  .cards{
    display: grid;
    grid-template-columns: auto;
  }
}

</style>
