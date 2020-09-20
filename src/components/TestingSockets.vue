<template>
  <div>
    <h1>no SHOT buckO!</h1>
  </div>
</template>

<script>
export default {
  sockets: {
    connect() {
      console.log("socket connected");
    },
    customEmit() {
      console.log(
        'this method was fired by the socket server. eg: io.emit("customEmit", data)'
      );
    },
  },
  methods: {
    clickButton() {
      // this.$socket.client is `socket.io-client` instance
      this.$socket.client.emit("emit_method", "no SHOT");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
