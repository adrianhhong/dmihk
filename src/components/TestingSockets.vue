<template>
  <div>
    <h1>no SHOT buckO! {{ data }}</h1>
  </div>
</template>

<script>
import io from "socket.io-client";

export default {
  data() {
    return {
      data: "sample"
    };
  },
  sockets: {
    connect() {
      console.log("socket connected");
    },
    customEmit(val) {
      this.data = val;
      console.log(
        'this method was fired by the socket server. eg: io.emit("customEmit", data)'
      );
    }
  },
  methods: {
    clickButton() {
      // this.$socket.client is `socket.io-client` instance
      this.$socket.client.emit("emit_method", "no SHOT");
    }
  },
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
