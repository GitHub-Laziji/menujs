import Vue from 'vue'
import App from './App.vue'
import Contextmenu from "../"
Vue.use(Contextmenu);
new Vue({
   render: h => h(App),
}).$mount('#app')