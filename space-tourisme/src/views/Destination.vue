<template>
  <div class="body-content destination">

    <!-- Header, logo + nav -->
    <header>
      <Nav/> 
    </header>

    <!-- Main content -->
    <main id="main" class="grid-container grid-container-destination flow">

      <!-- numbered title  -->
      <h1 class="numbered-title">          
      <span aria-hiden="true">01</span>
      Pick your destination</h1>

      <img src="@/assets/destination/image-moon.png" alt="the moon" class="destination-image">
    
      <!-- Tab list  -->
      <div class="tab-list underline-indicators flex">
        <button aria-selected="true" class="uppercase ff-sans-cond text-accent letter-spacing-2">Moon</button>
        <button aria-selected="false" class="uppercase ff-sans-cond text-accent letter-spacing-2">Mars</button>
        <button aria-selected="false" class="uppercase ff-sans-cond text-accent letter-spacing-2">Europa</button>
        <button aria-selected="false" class="uppercase ff-sans-cond text-accent letter-spacing-2">Titan</button>
      </div> 

      <!-- Planet description -->
      <article class="destination-info">
        <h2 class="fs-800 uppercase ff-serif planet-name">Moon</h2>

        <p>See our planet as you’ve never seen it before. A perfect relaxing trip away to help 
        regain perspective and come back refreshed. While you’re there, take in some history 
        by visiting the Luna 2 and Apollo 11 landing sites.</p>
      
        <div class="destination-meta flex">
            <div>
                <h3 class="text-accent fs-200 uppercase">Avg. distance</h3>
                <p class="ff-serif uppercase">384,400 km</p>
            </div>
            <div>
                <h3 class="text-accent fs-200 uppercase">Est. travel time</h3>
                <p class="ff-serif uppercase">3 days</p>
            </div>
        </div>
      </article>

    </main>   
  </div>
</template>

<script>
// @ is an alias to /src
import Nav from "@/components/Primary-nav.vue";

export default {
  name: "Destination",
  components: {
    Nav,
  }
};
</script>

<style scoped>
/* background */
.destination {
  background-image: url(../assets/destination/background-destination-mobile.jpg);
}

@media (min-width: 35em) {
  .destination {
    background-position: center center;
    background-image: url(../assets/destination/background-destination-tablet.jpg);
  }
}

@media (min-width: 45em) {
  .destination {
    background-image: url(../assets/destination/background-destination-desktop.jpg);
  }
}
/* layout */
.grid-container-destination {
    grid-template-areas: 
        'title'
        'image'
        'tabs'
        'content';
    --flow-space: 2rem;
    padding-bottom: 2.5rem;
}

.numbered-title {
    grid-area: title;
}

.destination-image {
    grid-area: image;
    display: inline-grid;
    max-width: 60%;
}

.tab-list {
    grid-area: tabs;
}

.destination-info {
    grid-area: content;
}

.destination-meta {
    flex-direction: column;
    border-top: 1px solid hsl( var(--clr-white) / .25);
    padding-top: 2.5rem;
    margin-top: 2.5rem;
}

.destination-meta p {
    font-size: 1.75rem;
}

@media (min-width: 35em) {
    .numbered-title {
        justify-self: start;
        margin-top: 2rem;
        margin-left: 1.5rem;
    }
    .destination-meta {
        flex-direction: row;
        justify-content: space-evenly;
    }
}

@media (min-width: 45em) {
    .grid-container-destination {
        grid-template-columns: minmax(1rem, 2fr) repeat(2, minmax(0, 40rem)) minmax(1rem, 1fr);
        grid-template-areas: 
            '. title title .'
            '. image tabs .'
            '. image content .';
        justify-items: start;
        align-content: start;
    }

    .numbered-title {
        margin-left: 0;
    }

    .destination-image {
        max-width: 100%;
    }

    article > * {
        text-align: left;
    }

    .destination-meta {
        --gap: min(7vw, 6rem);
        justify-content: start;
    }
}
</style>