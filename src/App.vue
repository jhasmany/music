<template lang="pug">
  #app
    PmHeader
    router-view
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import PmHeader from './components/layout/Header';

Vue.use(VueAxios, axios)

export default {
  name: 'app',
  components: { 
    PmHeader,
    //PmFooter 
  },

  data () {
    return {
      searchQuery: '',
      tracks: [],
      isLoading: false
    }
  }
}
</script>

<style>

#app {
  font-family: 'Lato', sans-serif;
  width: 1024px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

}
</style>
