<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Welcome to Your Vue.js App" />
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
};
</script>

<style>
/* ----------------- */
/* Reset             */
/* ----------------- */

/* Box-sizing & margins */
*,
::before,
::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

/* set up body */
body {
  line-height: 1.5;
  min-height: 100vh;
}

/* make images easier to work with */
img,
picture {
  max-width: 100%;
  display: block;
}

/* make forms elements easier to work with */
input,
button,
textarea,
select {
  font: inherit;
}

/* remove animations for people who've turned them off */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::afetr {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
</style>
