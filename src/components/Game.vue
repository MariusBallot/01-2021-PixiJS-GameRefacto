<template>
  <div class="game">
    <div class="container" ref="container"></div>
  </div>
</template>

<script>
import MainGame from "../classes/MainGame";
export default {
  name: "Game",
  mounted() {
    MainGame.init(this.$refs.container);
  }
};
</script>

<style scoped lang="stylus"></style>
