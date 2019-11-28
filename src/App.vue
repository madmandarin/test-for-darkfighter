<template>
  <div id="app">
    <Navigation />
    <div class="wrapper">
      <Header />
      <router-view/>
    </div>
  </div>
</template>

<script>
import Navigation from './components/Navigation.vue';
import Header from './components/Header.vue';

export default {
  components: {
    Header,
    Navigation,
  },
};
</script>

<style lang="scss">
  body, * {
    margin: 0;
    padding: 0;
    text-decoration: none;
    font-family: sans-serif;
    box-sizing: border-box;
    color: inherit;
    transition: all 300ms;
  }
</style>

<style lang="scss" scoped>
  #app {
    display: flex;

    .wrapper {
      width: calc(100vw - 180px);
      max-width: 1024px;
      margin: 0 auto;
    }
  }
</style>
