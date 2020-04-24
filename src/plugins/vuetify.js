import Vue from "vue";
import Vuetify from "vuetify/lib";
import de from "vuetify/es5/locale/de";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    dark: true
  },
  lang: {
    locales: {
      de
    },
    current: "de"
  }
});
