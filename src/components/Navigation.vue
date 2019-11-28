<template>
  <div class="navigation">
    <div class="logo"></div>
    <div class="main">
      <navigation-button v-for="(route, index) in this.$router.options.routes"
                         v-bind:key="'route-'+index"
                         :route="route" />
    </div>
    <div class="help">
      ?
    </div>
  </div>
</template>

<script>
import NavigationButton from './NavigationButton.vue';

export default {
  name: 'Navigation',
  components: { NavigationButton },
};
</script>

<style lang="scss" scoped>
  .navigation {
    width: 175px;
    margin-right: 4px;
    border-right: 1px solid #ededed;
    height: 100vh;
    padding-top: 25px;
    position: relative;

    .logo {
      width: 60px;
      height: 60px;
      margin: 0 auto 25px;
      background-color: #e62101;
      border-radius: 100%;
    }
    .main {
      margin-top: 50px;
    }
    .help {
      position: absolute;
      bottom: 35px;
      left: 0;
      right: 0;
      margin: 0 auto;
      width: 45px;
      height: 45px;
      border-radius: 100%;
      border: 2px solid black;
      color: #06a326;
      font-size: 36px;
      text-align: center;
      user-select: none;
    }
  }
</style>
