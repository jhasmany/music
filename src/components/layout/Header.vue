<template lang="pug">
    div
      section.header
        h1 Platzi Music
        h2 Canciones
        //- pm-player
      svg(xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 60")
        path(fill="#1E5371" fill-opacity="1" d="M0,0L120,5.3C240,11,480,21,720,21.3C960,21,1200,11,1320,5.3L1440,0L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z")
</template>
<script>
  import PmPlayer from '../Player'

  export default {
    components: { PmPlayer }
  }
</script>
<style scoped>

.header{
  width: calc(100% - 32px);
  text-align: center;
  background: linear-gradient(90deg, #1C3643 1.4%, #1E5371 101.52%);
  padding: 16px;
}

.header h1, .header h2 {
  margin: 0;
  color: #ffffff;
}
/* .wave {
    position: absolute;
    bottom: 0;
    width: 100%;
} */

@media screen and (max-width:900px) {
  .header{
    width: calc(70% - 32px);
  }
  svg{
     width: calc(70% - 32px);
  }
}
@media screen and (max-width:500px) {
  .header{
    width: calc(40% - 32px);
  }
  svg{
     width: calc(40% - 32px);
  }
}
</style>