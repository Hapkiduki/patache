//import "./assets/main.scss";

import { createApp } from "vue";
import { createPinia } from "pinia";

// Vuetify
import "vuetify/styles";
import { createVuetify, type ThemeDefinition } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

import "./styles/main.scss";
import App from "./App.vue";
import { BrandColors } from "./design-tokens/colors";
//import router from './router'

const patacheTheme: ThemeDefinition = {
  dark: true,
  colors: {
    background: BrandColors.background,
    primary: BrandColors.primary[500],
    secondary: BrandColors.secondary,
  },
};

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: "patacheTheme",
    themes: {
      patacheTheme,
    },
  },
});

const app = createApp(App);

app.use(createPinia());
//app.use(router)
app.use(vuetify);

app.mount("#app");
