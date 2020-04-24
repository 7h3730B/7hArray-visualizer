<template>
  <v-app id="app">
    <navbar :min="min" :max="max" :startValue="startValue" />
    <v-container>
      <canvas id="arrayCanvas" width="1400" height="900"></canvas>
    </v-container>
  </v-app>
</template>

<script>
import navbar from "./components/navbar.vue";

export default {
  name: "App",
  components: {
    navbar
  },
  data() {
    return { min: 1, max: 900, startValue: 200 };
  }
};
</script>

  <style lang="css" scoped>
canvas {
  margin: 0 auto;
  margin-bottom: 1rem;
  display: block;
}
</style>
