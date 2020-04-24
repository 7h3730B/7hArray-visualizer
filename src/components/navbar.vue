// TODO: Add Algorithms
<template>
  <v-card flat color="transparent">
    <v-app-bar dense>
      <v-toolbar-title>7hArray-Visualizer</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn id="bggray" :disabled="disabled" rounded @click="newArray()"
        >new Array</v-btn
      >
      <v-btn id="sort" :disabled="disabled" rounded @click="sort">Sort</v-btn>
      <v-menu bottom offset-y="true">
        <template v-slot:activator="{ on }">
          <v-btn :disabled="disabled" id="sort" rounded v-on="on"
            >Algorithms</v-btn
          >
        </template>

        <v-list>
          <v-list-item-group v-model="currentAlgo"></v-list-item-group>
          <v-list-item
            v-for="(algo, index) in algos"
            :key="index"
            @click="currentAlgo = index"
          >
            <v-list-item-title v-if="currentAlgo == index" id="selected">{{
              algo.name
            }}</v-list-item-title>
            <v-list-item-title v-else>{{ algo.name }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <v-spacer></v-spacer>
    </v-app-bar>
    <v-row>
      <p id="arrayLength">Array Length:</p>
      <v-col cols="12">
        <v-slider
          :disabled="disabled"
          v-model="getvalue"
          thumb-label
          :min="min"
          :max="max"
        >
          <template v-slot:prepend>
            <p>{{ min }}</p>
          </template>
          <template v-slot:append>
            <p>{{ max }}</p>
          </template>
        </v-slider>
      </v-col>
      <p id="dely">Delay:</p>
      <v-col cols="12">
        <v-slider v-model="gdelay" thumb-label min="0" max="400">
          <template v-slot:prepend>
            <p>0</p>
          </template>
          <template v-slot:append>
            <p>400</p>
          </template>
        </v-slider>
      </v-col>
    </v-row>
  </v-card>
</template>

<style lang="css" scoped>
#selected {
  color: rgb(180, 0, 80);
}

#arrayLength {
  margin-left: 1rem;
  margin-top: 1rem;
}

p {
  margin-left: 1rem;
  margin-right: 1rem;
}

#bggray {
  background-color: gray;
}

#sort {
  margin-left: 1rem;
  background-color: gray;
}
</style>

<script>
import functions from "../functions";
import args from "../sortingalgs";

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
    return {
      value: this.startValue,
      disabled: false,
      algos: args.algs,
      currentAlgo: 1
    };
  },
  methods: {
    async sort() {
      this.disabled = true;
      await args.algs[this.currentAlgo].func(functions.array).then(() => {
        this.finsih();
      });
    },
    newArray() {
      this.getvalue = this.value;
    },
    async finsih() {
      for (let j = 0; j < functions.array.length; j++) {
        functions.states[j] = -1;
        functions.states[j - 1] = -1;
        functions.states[j - 2] = -1;
        functions.states[j - 3] = -1;
        functions.states[j - 4] = -1;
        functions.draw();
        await new Promise(resolve => setTimeout(resolve, functions.delay));
        functions.states[j] = 0;
        functions.states[j - 1] = 0;
        functions.states[j - 2] = 0;
        functions.states[j - 3] = 0;
        functions.states[j - 4] = 0;
        functions.draw();
      }
      this.disabled = false;
    }
  },
  computed: {
    gdelay: {
      get: function() {
        return functions.delay;
      },
      set: function(newValue) {
        functions.delay = newValue;
      }
    },
    getvalue: {
      get: function() {
        return this.value;
      },
      set: function(newValue) {
        this.value = newValue;

        let a = [];

        a = [...Array(this.value)].map(() =>
          Math.floor(Math.random() * this.max)
        );

        // for (let i = 0; i < a.length; i++) a[i] = i;
        // let tmp;
        // let current;
        // let top = a.length;
        // if (top)
        //   while (--top) {
        //     current = Math.floor(Math.random() * (top + 1));
        //     tmp = a[current];
        //     a[current] = a[top];
        //     a[top] = tmp;
        //   }
        // TODO: Render array new
        functions.states = [...Array(a.length)].map(() => 0);
        functions.array = a;
        functions.draw();
      }
    }
  }
};
</script>
