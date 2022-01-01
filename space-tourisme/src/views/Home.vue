<template>
  <div class="body-content home">
    <!-- Header, logo + nav -->
    <header class="primary-header flex">
      <div>
        <img src="@/assets/shared/logo.svg" alt="Space tourism logo" />
      </div>
      <!-- <Nav /> -->
    </header>

    <!-- Main content -->
    <div class="grid-container grid-container-home">
      <div>
        <h1 class="text-accent fs-500 ff-sans-cond uppercase letter-spacing-1">
          So, you want to travel to
          <span class="d-block fs-900 ff-serif text-white">Space</span>
        </h1>
        <p>
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <div>
        <a href="#" class="large-button uppercase ff-serif text-dark bg-white">Explore</a>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
//import Nav from "@/components/Primary-nav.vue";

export default {
  name: "Home",
  components: {
    //Nav,
  },
};
</script>

<style scoped>
/* background image */
.home {
  background-image: url(../assets/home/background-home-mobile.jpg);
}

@media (min-width: 35em) {
  .home {
    background-position: center center;
    background-image: url(../assets/home/background-home-tablet.jpg);
  }
}

@media (min-width: 45em) {
  .home {
    background-image: url(../assets/home/background-home-desktop.jpg);
  }
}
/* home main content position in large screen */
@media (min-width: 45em) {
  .grid-container-home {
    padding-bottom: 6rem;
    align-items: end;
  }
}

/* Explore Button */
.large-button {
  font-size: 2rem;
  position: relative;
  z-index: 1;
  display: inline-grid;
  place-items: center;
  padding: 0 2em;
  border-radius: 50%;
  aspect-ratio: 1;
  text-decoration: none;
}

.large-button::after {
  content: "";
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100%;
  background: hsl(var(--clr-white) / 0.15);
  border-radius: 50%;
  opacity: 0;
  transition: opacity 500ms linear, transform 750ms ease-in-out;
}

.large-button:hover::after,
.large-button:focus::after {
  opacity: 1;
  transform: scale(1.5);
}
</style>
