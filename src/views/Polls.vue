<template>
  <div class="home">
    <polls-navigation>
      <router-view/>
    </polls-navigation>
  </div>
</template>

<script>
import PollsNavigation from '../components/PollsNavigation.vue';

export default {
  name: 'Polls',
  components: { PollsNavigation },
};
</script>
