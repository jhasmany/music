<template lang="pug">
  .content
    .audio(v-if="track")
      audio(controls, :src="track.preview_url")
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: { ...mapState(['track']) 
  }
}
</script>

<style scoped>
  img {
    width: 124px;
    border-radius: 50%;
  }
  audio{
    margin: 0;
    padding: 0;
    width: 168px !important;
    height: 48px !important;
  }
</style>