<template>
  <v-container>
    <canvas id="arrayCanvas" :width="width" height="900"></canvas>
  </v-container>
</template>

<style lang="css" scoped>
canvas {
  margin: 0 auto;
  margin-bottom: 1rem;
  display: block;
}
</style>

<script>
export default {
  props: {
    width: {
      type: Number
    }
  }
};
</script>
