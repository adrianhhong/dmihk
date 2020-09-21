<template>
  <div>
    <h3 class="text-xs-center mb-3">ENTER A HANDLE</h3>
  </div>
</template>

<script>
import io from "socket.io-client";
//https://medium.com/@msanathkumar/building-a-simple-real-time-chat-application-using-socket-io-express-and-vue-js-d263c08a4c59

export default {
  created() {
    const socket = io("http://localhost:3000");
    console.log(socket.id); // undefined

    socket.on("connect", () => {
      console.log(socket.id); // 'G5p5...'
    });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
