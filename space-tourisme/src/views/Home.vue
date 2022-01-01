<template>
  <div class="home">
    <div>
      <h1 class="text-accent ">So, you want to travel to<span>Space</span></h1>
      <p>
        Let’s face it; if you want to go to space, you might as well genuinely
        go to outer space and not hover kind of on the edge of it. Well sit
        back, and relax because we’ll give you a truly out of this world
        experience!
      </p>
    </div>
    <Explore />
  </div>
</template>

<script>
// @ is an alias to /src
import Explore from '@/components/Explore.vue'

export default {
  name: "Home",
  components: {
    Explore
  },
};
</script>

<style scoped>
</style>
