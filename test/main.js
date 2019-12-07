import Vue from 'vue'
import App from './App.vue'
import ContextMenu from "../"
Vue.use(ContextMenu);
new Vue({
   render: h => h(App),
}).$mount('#app')