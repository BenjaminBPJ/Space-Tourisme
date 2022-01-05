<template>
  <div class="body-content technology">

    <!-- Header, logo + nav -->
    <header>
      <Nav/> 
    </header>

    <!-- Main content -->
    <main id="main" class="grid-container grid-container-technology flow">

      <!-- numbered title  -->
      <h1 class="numbered-title">          
      <span aria-hiden="true">03</span>
      Space launch 101</h1>

      <div id="img-launch-vehicle" class="image-technology">
          <p class="sr-only">Image launcher</p>
      </div>

      <!-- numbers -->
      <div class="number-indicators flex">
        <div aria-selected="true" class="numbers-button">1</div>
        <div aria-selected="false" class="numbers-button">2</div>
        <div aria-selected="false" class="numbers-button">3</div>
      </div>   

      <article class="technology-article flow">
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
  }
};
</script>

<style scoped>
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
    background-image: url(../assets/technology/image-launch-vehicle-landscape.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    max-width: 100%;
    width: 100%;
    height: 30vh;
}

/* numbers */
.number-indicators {
    grid-area: numbers;
}

.number-indicators > * {
    cursor: pointer;
    display: grid;
    place-items: center;
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
        grid-template-columns: minmax(1rem, 2fr) minmax(5rem, 3fr) repeat(2, minmax(0, 35rem));
        grid-template-areas: 
        '. title title .'
        '. numbers content image';
    }

    .number-indicators {
        flex-direction: column;
        place-self: flex-start;
    }

    .technology-article {
        place-self: flex-start;
    }

    .image-technology {
        background-image: url(../assets/technology/image-launch-vehicle-portrait.jpg);
        height: 100%;
    }
}

@media (min-width: 55em) {
    .image-technology {
        background-image: url(../assets/technology/image-launch-vehicle-portrait.jpg);
        height: 100%;
        height: 60vh;
    }

    .number-indicators,
    .technology-article {
        padding-top: 6rem;
    }

    .number-indicators > * {
        margin: 1rem;
        width: 4rem;
    }
}
</style>