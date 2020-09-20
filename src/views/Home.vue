<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <ListenSockets></ListenSockets>
    <TestingSockets></TestingSockets>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import ListenSockets from "@/components/ListenSockets.vue";
import TestingSockets from "@/components/TestingSockets.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
    ListenSockets,
    TestingSockets
  }
};
</script>
