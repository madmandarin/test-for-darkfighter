<template>
  <div class="wrapper">
    <div class="menu">
      <router-link
        v-for="(item, index) in this.$router.options.routes[1].children"
        :to="'/polls/'+item.path"
        class="button"
        v-bind:key="'pollsNav-'+index">
          {{ item.meta.ruName }}
      </router-link>
    </div>
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PollsNavigation',
};
</script>

<style lang="scss" scoped>
  .wrapper {
    width: 100%;
    height: 100%;
    margin-top: 40px;
    .menu {
      border-bottom: 1px solid #c1e837;
      display: flex;
      .button {
        padding: 0 40px;
        line-height: 50px;
        color: #007017;
        &.router-link-exact-active {
          border-bottom: 3px solid #c1e837;
          color: black;
          font-weight: bold;
        }
      }
    }
    .content {
      box-shadow: 0 14px 28px rgba(0,0,0,0.10), 0 10px 10px rgba(0,0,0,0.11);
    }
  }
</style>
