import Vue from "vue";
import App from "./App.vue";
import "~/app.css";
import "~/core/chart.ts";

new Vue({
  el: "#app",
  render: (h) => h(App),
});
