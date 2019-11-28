<template>
  <div class="input">
    <input
      type="text"
      :placeholder="placeholder"
    >
    <magnify-icon class="icon" v-if="icon"/>
  </div>
</template>

<script>
import MagnifyIcon from 'vue-material-design-icons/Magnify.vue';

export default {
  name: 'CusInput',
  components: {
    MagnifyIcon,
  },
  props: ['placeholder', 'icon'],
};
</script>

<style lang="scss" scoped>
  .input {
    position: relative;

    input {
      font-size: 18px;
      border-radius: 8px;
      border: 1px solid #e3e3e3;
      width: 100%;
      height: 50px;
      padding: 18px 16px;
      outline:none;
    }
    .icon {
      font-size: 24px;
      position: absolute;
      right: 18px;
      top: 10px;
      color: #e3e3e3;
    }
  }
</style>
