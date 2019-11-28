<template>
  <div class="header">
    <div class="main">
      <cus-input class="search" icon="search" placeholder="Поиск по системе"/>
      <user-info
        img="https://img.tsn.ua/cached/1533895987/tsn-ec97a3c0a2ace5bfabc1ed73666af320/thumbs/768x768/5b/28/42060f7aca16ed8e5ac0cffdf1e4285b.jpg"
        name="Alexander K."
        role="Администратор"
      />
    </div>
    <bread-crumbs route="route"/>
  </div>
</template>

<script>
import CusInput from './CusInput.vue';
import UserInfo from './UserInfo.vue';
import BreadCrumbs from './BreadCrumbs.vue';

export default {
  name: 'Header',
  components: {
    BreadCrumbs,
    UserInfo,
    CusInput,
  },
};
</script>

<style lang="scss" scoped>
  .header {
    .main {
      margin-top: 30px;
      display: flex;
      justify-content: space-between;

      .search {
        width: 620px;
        margin-top:5px;
      }
    }
  }
</style>
