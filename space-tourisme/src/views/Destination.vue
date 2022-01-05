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

    <picture id="moon-image" v-if="showMoon">
      <source srcset="@/assets/destination/image-moon.webp" type="image/webp">
      <img src="@/assets/destination/image-moon.png" alt="the moon">
    </picture>
    <picture id="mars-image" v-if="showMars">
      <source srcset="@/assets/destination/image-mars.webp" type="image/webp">
      <img src="@/assets/destination/image-mars.png" alt="the planet mars">
    </picture>
    <picture id="europa-image" v-if="showEuropa">
      <source srcset="@/assets/destination/image-europa.webp" type="image/webp">
      <img src="@/assets/destination/image-europa.png" alt="the planet europa">
    </picture>
    <picture id="titan-image" v-if="showTitan">
      <source srcset="@/assets/destination/image-titan.webp" type="image/webp">
      <img src="@/assets/destination/image-titan.png" alt="the moon titan">
    </picture> 
    
      <!-- Tab list  -->
      <div class="tab-list underline-indicators flex" role="tablist" aria-label="destination">
        <button aria-selected="true" role="tab" class="uppercase ff-sans-cond text-accent letter-spacing-2" @click="showMoon=true, showMars=false, showEuropa=false, showTitan=false" @focus="getTabHighlight">Moon</button>
        <button aria-selected="false" role="tab" class="uppercase ff-sans-cond text-accent letter-spacing-2" @click="showMoon=false, showMars=true, showEuropa=false, showTitan=false" @focus="getTabHighlight">Mars</button>
        <button aria-selected="false" role="tab" class="uppercase ff-sans-cond text-accent letter-spacing-2" @click="showMoon=false, showMars=false, showEuropa=true, showTitan=false" @focus="getTabHighlight">Europa</button>
        <button aria-selected="false" role="tab" class="uppercase ff-sans-cond text-accent letter-spacing-2" @click="showMoon=false, showMars=false, showEuropa=false, showTitan=true" @focus="getTabHighlight">Titan</button>
      </div> 

      <!-- Moon description -->
      <article id="moon-tab" class="destination-info" v-if="showMoon">
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

      <!-- Mars description -->
      <article id="mars-tab" class="destination-info" v-if="showMars">
        <h2 class="fs-800 uppercase ff-serif planet-name">Mars</h2>

        <p>Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, 
          the tallest planetary mountain in our solar system. It’s two and a half times 
          the size of Everest!</p>
      
        <div class="destination-meta flex">
            <div>
                <h3 class="text-accent fs-200 uppercase">Avg. distance</h3>
                <p class="ff-serif uppercase">225 mil. km</p>
            </div>
            <div>
                <h3 class="text-accent fs-200 uppercase">Est. travel time</h3>
                <p class="ff-serif uppercase">9 months</p>
            </div>
        </div>
      </article>

      <!-- Europa description -->
      <article id="europa-tab" class="destination-info" v-if="showEuropa">
        <h2 class="fs-800 uppercase ff-serif planet-name">Europa</h2>

        <p>The smallest of the four Galilean moons orbiting Jupiter, Europa is a 
          winter lover’s dream. With an icy surface, it’s perfect for a bit of 
          ice skating, curling, hockey, or simple relaxation in your snug 
          wintery cabin.</p>
      
        <div class="destination-meta flex">
            <div>
                <h3 class="text-accent fs-200 uppercase">Avg. distance</h3>
                <p class="ff-serif uppercase">384,400 km</p>
            </div>
            <div>
                <h3 class="text-accent fs-200 uppercase">628 mil. km</h3>
                <p class="ff-serif uppercase">3 years</p>
            </div>
        </div>
      </article>

      <!-- Titan description -->
      <article id="titan-tab" class="destination-info" v-if="showTitan">
        <h2 class="fs-800 uppercase ff-serif planet-name">Titan</h2>

        <p>The only moon known to have a dense atmosphere other than Earth, Titan 
          is a home away from home (just a few hundred degrees colder!). As a 
          bonus, you get striking views of the Rings of Saturn.</p>
      
        <div class="destination-meta flex">
            <div>
                <h3 class="text-accent fs-200 uppercase">Avg. distance</h3>
                <p class="ff-serif uppercase">1.6 bil. km</p>
            </div>
            <div>
                <h3 class="text-accent fs-200 uppercase">Est. travel time</h3>
                <p class="ff-serif uppercase">7 years</p>
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
  },
  data () {
      return {
        showMoon: true,
        showMars: false,
        showEuropa: false,
        showTitan: false
      }
  },
  methods: {
    getTabHighlight: function (e) {      
        const targetTab = e.target;
        const tabContainer = targetTab.parentNode;
    
        tabContainer
            .querySelector('[aria-selected="true"]')
            .setAttribute("aria-selected", false);

        targetTab.setAttribute("aria-selected", true);
    }
  }
}
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

picture {
    grid-area: image;
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

    picture {
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