// TODO: Add Algorithms
<template>
  <v-card flat color="transparent">
    <v-app-bar dense>
      <v-toolbar-title>7hArray-Visualizer</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-slider
        id="slid"
        class="navbar-items"
        v-model="getvalue"
        :min="min"
        :max="max"
        label="Array Length:"
      ></v-slider>
      <p class="navbar-items">Moin</p>
    </v-app-bar>
  </v-card>
</template>

<style lang="css" scoped>
.navbar-items {
  display: inline-block;
  margin: 0;
  padding-left: 2rem;
}
</style>
<script>
import functions from "../functions";

export default {
  props: {
    min: {
      type: Number
    },
    max: {
      type: Number
    },
    startValue: {
      type: Number
    }
  },
  data() {
    return { value: this.startValue };
  },
  computed: {
    getvalue: {
      get: function() {
        return this.value;
      },
      set: function(newValue) {
        this.value = newValue;
        console.log(this.value);

        let a = [];
        for (let i = 0; i < this.value; i++) a[i] = i;
        let tmp;
        let current;
        let top = a.length;
        if (top)
          while (--top) {
            current = Math.floor(Math.random() * (top + 1));
            tmp = a[current];
            a[current] = a[top];
            a[top] = tmp;
          }
        // TODO: Render array new
        functions.array = a;
        functions.draw();
      }
    }
  }
};
</script>
