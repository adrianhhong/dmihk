import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import VueSocketIOExt from 'vue-socket.io-extended';
import io from 'socket.io-client';
 
const socket = io('http://localhost:3000');

createApp(App)
  .use(store)
  .use(router)
  .mount("#app")
  .use(VueSocketIOExt, socket, { store }); // Installing the VueSocketIOExt plugin