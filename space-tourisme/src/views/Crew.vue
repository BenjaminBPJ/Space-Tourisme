<template>
  <div class="body-content crew">

    <!-- Header, logo + nav -->
    <header>
      <Nav/> 
    </header>

    <!-- Main content -->
    <main id="main" class="grid-container grid-container-crew">
      
    </main>

  </div>
</template>

<script>
// @ is an alias to /src
import Nav from "@/components/Primary-nav.vue";

export default {
  name: "Crew",
  components: {
    Nav,
  }
};
</script>

<style scoped>

</style>
