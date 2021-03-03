<template lang="pug">
  .container
    slot(name="body") Algo anduve mal
</template>

<style scoped>
  .container {
    padding: 20px;
    min-height: 40vh;
  }
</style>