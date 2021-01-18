<template>
  <div>
    <Game />
  </div>
</template>

<script>
import Game from "./components/Game.vue";

export default {
  name: "App",
  components: {
    Game
  }
};
</script>

<style lang="stylus">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
