import Vue from "vue";
import App from "./App.vue";
import EventDemo from "./EventDemo";
import CopyDemo from "./CopyDemo";
import Contextmenu from "../";

Vue.use(Contextmenu);

const routes = {
   "/": App,
   "/event-demo": EventDemo,
   "/copy-demo": CopyDemo
}

new Vue({
   el: '#app',
   data: {
      currentRoute: window.location.pathname
   },
   computed: {
      ViewComponent() {
         return routes[this.currentRoute] || App
      }
   },
   render(h) { return h(this.ViewComponent) }
})