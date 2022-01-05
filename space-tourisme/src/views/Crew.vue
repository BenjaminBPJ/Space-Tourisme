<template>
  <div class="body-content crew">

    <!-- Header, logo + nav -->
    <header>
      <Nav/> 
    </header>

    <!-- Main content -->
    <main id="main" class="grid-container grid-container-crew flow">

      <!-- numbered title  -->
      <h1 class="numbered-title">          
      <span aria-hiden="true">01</span>
      Meet your crew</h1>

      <!-- commander image  -->
      <picture class="crew-image" v-if="showCommander">
        <source srcset="@/assets/crew/image-douglas-hurley.png" type="image/webp" class="img-crew">
        <img src="@/assets/crew/image-douglas-hurley.png" alt="Douglas Hurley" class="img-crew">
      </picture>
      <!-- specialist image  -->
      <picture class="crew-image" v-if="showSpecialist">
        <source srcset="@/assets/crew/image-mark-shuttleworth.png" type="image/webp" class="img-crew">
        <img src="@/assets/crew/image-mark-shuttleworth.png" alt="Mark Shuttleworth" class="img-crew">
      </picture>
      <!-- pilot image  -->
      <picture class="crew-image" v-if="showPilot">
        <source srcset="@/assets/crew/image-victor-glover.png" type="image/webp" class="img-crew">
        <img src="@/assets/crew/image-victor-glover.png" alt="Victor Glover" class="img-crew">
      </picture>
      <!-- engineer image  -->
      <picture class="crew-image" v-if="showEngineer">
        <source srcset="@/assets/crew/image-anousheh-ansari.png" type="image/webp" class="img-crew">
        <img src="@/assets/crew/image-anousheh-ansari.png" alt="Anousheh Ansari" class="img-crew">
      </picture>

      <!-- Dots -->
      <div class="dot-indicators flex">
        <button aria-selected="true" @click="showCommander=true, showSpecialist=false, showPilot=false, showEngineer=false" @focus="getTabHighlight"><span class="sr-only" >The commander</span></button>
        <button aria-selected="false" @click="showCommander=false, showSpecialist=true, showPilot=false, showEngineer=false" @focus="getTabHighlight"><span class="sr-only" >The mission specialist</span></button>
        <button aria-selected="false" @click="showCommander=false, showSpecialist=false, showPilot=true, showEngineer=false" @focus="getTabHighlight"><span class="sr-only" >The pilot</span></button>
        <button aria-selected="false" @click="showCommander=false, showSpecialist=false, showPilot=false, showEngineer=true" @focus="getTabHighlight"><span class="sr-only" >The crew engineer</span></button>
      </div>

      <!-- commander description -->
      <article class="crew-details flow" v-if="showCommander">
        <header class="flow">
          <h2 class="crew-grade uppercase ff-serif fs-600">Commander</h2> 
          <p class="crew-name uppercase ff-serif fs-700">Douglas Hurley</p>
        </header>
        <p class="text-accent">Douglas Gerald Hurley is an American engineer, former Marine Corps pilot 
          and former NASA astronaut. He launched into space for the third time as 
          commander of Crew Dragon Demo-2.
        </p>
      </article>

        <!-- specialist description -->
      <article class="crew-details flow" v-if="showSpecialist">
        <header class="flow">
          <h2 class="crew-grade uppercase ff-serif fs-600">Mission Specialist</h2> 
          <p class="crew-name uppercase ff-serif fs-700">Mark Shuttleworth</p>
        </header>
        <p class="text-accent">Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind 
        the Linux-based Ubuntu operating system. Shuttleworth became the first South 
        African to travel to space as a space tourist.
        </p>
      </article>

        <!-- pilot description -->
      <article class="crew-details flow" v-if="showPilot">
        <header class="flow">
          <h2 class="crew-grade uppercase ff-serif fs-600">Pilot</h2> 
          <p class="crew-name uppercase ff-serif fs-700">Victor Glover</p>
        </header>
        <p class="text-accent">Pilot on the first operational flight of the SpaceX Crew Dragon to the 
        International Space Station. Glover is a commander in the U.S. Navy where 
        he pilots an F/A-18.He was a crew member of Expedition 64, and served as a 
        station systems flight engineer.
        </p>
      </article>

        <!-- engineer description -->
      <article class="crew-details flow" v-if="showEngineer">
        <header class="flow">
          <h2 class="crew-grade uppercase ff-serif fs-600">Flight Engineer</h2> 
          <p class="crew-name uppercase ff-serif fs-700">Anousheh Ansari</p>
        </header>
        <p class="text-accent">Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. 
        Ansari was the fourth self-funded space tourist, the first self-funded woman to 
        fly to the ISS, and the first Iranian in space.       
        </p>
      </article>
 
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
  },
  data () {
      return {
        showCommander: true,
        showSpecialist: false,
        showPilot: false,
        showEngineer: false
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
};
</script>

<style scoped>
/* background */
.crew {
  background-image: url(../assets/crew/background-crew-mobile.jpg);
}

@media (min-width: 35em) {
  .crew {
    background-position: center center;
    background-image: url(../assets/crew/background-crew-tablet.jpg);
  }
}

@media (min-width: 45em) {
  .crew {
    background-image: url(../assets/crew/background-crew-desktop.jpg);
  }
}

/* layout */
.grid-container-crew {
    --flow-space: 1.5rem;
    grid-template-areas: 
        'title'
        'image'
        'dots'
        'content';
}

.numbered-title {
    grid-area: title;
}

.crew-image {
    grid-area: image;
    height: 90%;
    margin-bottom: 1rem;
    display: inline-grid;
}

/* interactive dot list */
.dot-indicators {
    grid-area: dots;
}
.dot-indicators > * {
    cursor: pointer;
    border: 0;
    border-radius: 50%;
    padding: 0.3em;
    background-color: hsl( var(--clr-white) / 0.25);
}

.dot-indicators > *:hover,
.dot-indicators > *:focus {
    background-color: hsl( var(--clr-white) / 0.5);
}

.dot-indicators > [aria-selected="true"] {
    background-color: hsl( var(--clr-white) / 1); 
}
/*  fin interactive dot list */

article header {
    --flow-space: 0.5rem;
}

.crew-details {
    grid-area: content;
    padding-bottom: 4rem;
}

.crew-grade {
    color: hsl( var(--clr-white) / 0.25);
}

@media (min-width: 35em) {
    .crew {
        height: 100vh;
        overflow: hidden;    
    }

    .grid-container-crew {
        --flow-space: 1rem;
        grid-template-areas: 
            'title'
            'content'
            'dots'
            'image';
        padding-bottom: 0;
    }

    .numbered-title {
        justify-self: start;
        margin-left: 1.5rem;
    }

    .crew-image {
        height: 100%;
        margin-bottom: 0;
    }
}

@media (min-width: 45em) {  
    .grid-container-crew {
        grid-template-areas: 
            '. title image .'
            '. content image .'
            '. dots image .';
        text-align: left;
    }

    .numbered-title {
        margin-left: 0;
    }

    .crew-details {
        padding-bottom: 0;
    }

    .dot-indicators, .crew-details {
        justify-self: start;
        padding-bottom: 3rem;
    }
    .dot-indicators > * {
        padding: 0.4em;
    }

    .img-crew {
        align-self: end;
    }
}
</style>
