<template>
  <v-app id="app">
    <navbar :min="min" :max="max" :startValue="startValue" />
    <page :width="max"/>
  </v-app>
</template>

<script>
import navbar from "./components/navbar.vue";
import page from "./components/page.vue";

export default {
  name: "App",
  components: {
    page,
    navbar
  },
  data() {
    return { min: 1, max: 900, startValue: 200 };
  }
};
</script>

<style>
</style>
