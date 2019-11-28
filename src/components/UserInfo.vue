<template>
  <div class="info">
    <img :src="img" :alt="name">
    <div class="text">
      <div class="name">{{name}}</div>
      <div class="role">{{role}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserInfo',
  props: ['img', 'name', 'role'],
};
</script>

<style lang="scss" scoped>
 .info {
   display: flex;
   img {
     border-radius: 100%;
     width: 60px;
     height: 60px;
     margin-right: 8px;
     margin-left: 10px;
   }
   .text {
     padding-top: 6px;
     .name {
       font-weight: bold;
       font-size: 21px;
       white-space: nowrap;
     }
     .role {
       font-weight: light;
       font-size: 14px;
     }
   }
 }
</style>
