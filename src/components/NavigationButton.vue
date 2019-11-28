<template>
 <router-link
      v-if="route.meta.inMenu"
      class="button"
      :to="route.path">
   <poll-icon class="icon" v-if="route.meta.icon === 'poll'"/>
   <account-icon class="icon" v-if="route.meta.icon === 'account'"/>
   <cancel-icon class="icon" v-if="route.meta.icon === 'cancel'"/>
   <phone-icon class="icon" v-if="route.meta.icon === 'phone'"/>
   <span>{{ route.meta.ruName }}</span>
 </router-link>
</template>

<script>
import PollIcon from 'vue-material-design-icons/Poll.vue';
import AccountIcon from 'vue-material-design-icons/Account.vue';
import CancelIcon from 'vue-material-design-icons/Cancel.vue';
import PhoneIcon from 'vue-material-design-icons/Phone.vue';


export default {
  name: 'NavigationButton',
  props: ['route'],
  components: {
    PollIcon,
    AccountIcon,
    CancelIcon,
    PhoneIcon,
  },
};
</script>

<style lang="scss" scoped>
  .button {
    width: 150px;
    height: 115px;
    border: 2px solid transparent;
    border-radius: 7px;
    text-align: center;
    font-size: 16px;
    display: flex;
    padding-top: 15px;
    flex-direction: column;
    margin: 0 auto 10px;
    transition: all 300ms;


    .icon {
      font-size: 48px;
      margin-bottom: 10px;
    }

    &:hover {
      border-color: #dbf28b;
      color: #93bc02;
    }
    &.router-link-active {
      background: #f7f7f7;
      border-color: #f7f7f7;
      color: #000;
      font-weight: bold;
    }
  }
</style>
