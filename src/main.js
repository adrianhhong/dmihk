import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

// import VueSocketIOExt from 'vue-socket.io-extended';
import VueSocketIO from 'vue-socket.io';
import io from 'socket.io-client';

const socket = io('http://localhost:3000');

const app = createApp(App);
app.use(store);
app.use(router);
app.mount('#app');
// app.use(VueSocketIOExt, socket, { store }); // Installing the VueSocketIOExt plugin
app.use(VueSocketIO, socket, store); // Installing the VueSocketIOExt plugin
