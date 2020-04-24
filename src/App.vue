<template>
  <v-app id="app">
    <navbar :min="min" :max="max" :startValue="startValue" />
    <v-container>
      <canvas id="arrayCanvas" :width="width" :height="max"></canvas>
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
    return { width: window.innerWidth - 300, min: 1, max: 690, startValue: 50 };
  }
};
</script>

<style lang="css" scoped>
canvas {
  margin: 0 auto;
  display: block;
}
</style>
