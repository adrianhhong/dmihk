<template>
  <div>
    <TestingSockets></TestingSockets>
  </div>
</template>

<script>
// @ is an alias to /src
import TestingSockets from "@/components/TestingSockets.vue";

export default {
  name: "Home",
  components: {
    TestingSockets
  }
};
</script>
