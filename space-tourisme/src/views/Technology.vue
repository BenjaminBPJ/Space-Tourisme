<template>
  <div class="body-content technology">

    <!-- Header, logo + nav -->
    <header>
      <Nav/> 
    </header>

    <!--------- Main content -------->
    <main id="main" class="grid-container grid-container-technology flow">

      <!-- numbered title  -->
      <h1 class="numbered-title">          
      <span aria-hiden="true">03</span>
      Space launch 101</h1>

    <!-- image vehicle  -->
      <div id="img-launch-vehicle" class="image-technology" v-if="showVehicle">
        <p class="sr-only">Image launcher</p>
      </div>
    <!-- image capsule  -->
      <div id="img-space-capsule" class="image-technology" v-if="showCapsule">
        <p class="sr-only">Image capsule</p>
      </div>
    <!-- image port  -->
      <div id="img-spaceport" class="image-technology" v-if="showPort">
        <p class="sr-only">Image port</p>
      </div>

      <!-- numbers -->
      <div class="number-indicators flex">
        <button aria-selected="true" class="numbers-button text-white" @click="showVehicle=true, showCapsule=false, showPort=false" @focus="getTabHighlight">1</button>
        <button aria-selected="false" class="numbers-button text-white" @click="showVehicle=false, showCapsule=true, showPort=false" @focus="getTabHighlight">2</button>
        <button aria-selected="false" class="numbers-button text-white" @click="showVehicle=false, showCapsule=false, showPort=true" @focus="getTabHighlight">3</button>
      </div>   

        <!-- vehicle article -->
      <article class="technology-article flow" v-if="showVehicle">
        <header class="flow">
          <p class="uppercase text-accent fs-400">The terminology...</p>
          <h2 class="uppercase ff-serif fs-700">Launch vehicle</h2>
        </header>
        <p class="text-accent">A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a 
            payload from Earth's surface to space, usually to Earth orbit or beyond. Our 
            WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, 
            it's quite an awe-inspiring sight on the launch pad!
        </p>
      </article>

        <!-- capsule article -->
      <article class="technology-article flow" v-if="showCapsule">
        <header class="flow">
          <p class="uppercase text-accent fs-400">The terminology...</p>
          <h2 class="uppercase ff-serif fs-700">Space capsule</h2>
        </header>
        <p class="text-accent">A space capsule is an often-crewed spacecraft that uses a blunt-body reentry 
        capsule to reenter the Earth's atmosphere without wings. Our capsule is where 
        you'll spend your time during the flight. It includes a space gym, cinema, 
        and plenty of other activities to keep you entertained.
        </p>
      </article>

        <!-- port article -->
      <article class="technology-article flow" v-if="showPort">
        <header class="flow">
          <p class="uppercase text-accent fs-400">The terminology...</p>
          <h2 class="uppercase ff-serif fs-700">Spaceport</h2>
        </header>
        <p class="text-accent">A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, 
        by analogy to the seaport for ships or airport for aircraft. Based in the 
        famous Cape Canaveral, our spaceport is ideally situated to take advantage 
        of the Earth’s rotation for launch.
        </p>
      </article>

    </main>
  </div>
</template>

<script>
// @ is an alias to /src
import Nav from "@/components/Primary-nav.vue";

export default {
  name: "Technology",
  components: {
    Nav,
  },
  data () {
      return {
        showVehicle: true,
        showCapsule: false,
        showPort: false,
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
/* background image */
.technology {
  background-image: url(../assets/technology/background-technology-mobile.jpg);
}

@media (min-width: 35em) {
  .technology {
    background-position: center center;
    background-image: url(../assets/technology/background-technology-tablet.jpg);
  }
}

@media (min-width: 45em) {
  .technology {
    background-image: url(../assets/technology/background-technology-desktop.jpg);
  }
}

/* layout */
.grid-container-technology {
    grid-template-areas: 
        'title'
        'image'
        'numbers'
        'content';
    --flow-space: 2rem;
    padding-bottom: 2.5rem;
}

.numbered-title {
    grid-area: title;
}

.image-technology {
    grid-area: image;
    background-size: cover;
    background-repeat: no-repeat;
    max-width: 100%;
    width: 100%;
    height: 30vh;
}

#img-launch-vehicle {
    background-image: url(../assets/technology/image-launch-vehicle-landscape.jpg);
}

#img-space-capsule {
    background-image: url(../assets/technology/image-space-capsule-landscape.jpg);
}

#img-spaceport {
    background-image: url(../assets/technology/image-spaceport-landscape.jpg);
}

/* numbers */
.number-indicators {
    grid-area: numbers;
}

.number-indicators > * {
    cursor: pointer;
    display: grid;
    place-items: center;
    background: transparent;
    border: solid 1px hsl( var(--clr-white) / 0.2);
    border-radius: 50%;
    aspect-ratio: 1;
    width: 2.5em;
}

.number-indicators > *:hover,
.number-indicators > *:focus {
    border-color: hsl( var(--clr-white) / 0.5);
}

.number-indicators > [aria-selected="true"] {
    background-color: hsl( var(--clr-white) / 1); 
    color: hsl( var(--clr-dark));
}

article {
    grid-area: content;
}

article header {
    --flow-space: 0.5rem;
}

@media (min-width: 35em) {
    .grid-container-technology {
        margin-bottom: 3.5rem;
    }
    .numbered-title {
        justify-self: start;
        margin-left: 1.5rem;
    }
}

@media (min-width: 45em) {
    .grid-container-technology {
        grid-template-columns: minmax(2rem, 5%) minmax(2rem, 10%) repeat(2, minmax(0, 45rem));
        grid-template-areas: 
        '. title title .'
        '. numbers content image';
    }

    .number-indicators {
        flex-direction: column;
        place-self: flex-start;
    }

    .number-indicators > * {
        margin: 1rem;
    }

    .technology-article {
        place-self: flex-start;
        text-align: left;
    }

    .image-technology {
        height: 100%;
    }

    #img-launch-vehicle {
        background-image: url(../assets/technology/image-launch-vehicle-portrait.jpg);
    }

    #img-space-capsule {
        background-image: url(../assets/technology/image-space-capsule-portrait.jpg);
    }

    #img-spaceport {
        background-image: url(../assets/technology/image-spaceport-portrait.jpg);
    }
}

@media (min-width: 55em) {
    .image-technology {
        height: 100%;
        height: 60vh;
    }

    .number-indicators,
    .technology-article {
        padding-top: 6rem;
    }

    .number-indicators > * {
        width: 4rem;
    }
}
</style>