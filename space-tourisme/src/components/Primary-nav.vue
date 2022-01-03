<template>
  <div class="primary-header flex">

    <!-- logo -->
    <div>
      <img src="@/assets/shared/logo.svg" alt="Space tourism logo" class="logo"/>
    </div>

    <!-- burger-menu -->
    <button class="mobile-nav-toggle" aria-controls="primary-navigation" aria-expanded="false" @click="OpenCloseMobileNav()"><span class="sr-only">menu</span></button>

    <!-- navigation -->
    <nav id="nav-primary">
      <ul id="primary-navigation" class="primary-navigation underline-indicators flex" data-visible="false">
        <router-link to="/" class="uppercase text-white letter-spacing-2" tag="li" ><span class="primary-nav-span" aria-hidden="true">00</span>Home</router-link>
        <router-link to="/destination" class="uppercase text-white letter-spacing-2" tag="li" ><span class="primary-nav-span" aria-hidden="true">01</span>Destination</router-link>
        <router-link to="/crew" class="uppercase text-white letter-spacing-2" tag="li" ><span class="primary-nav-span" aria-hidden="true">02</span>Crew</router-link>
        <router-link to="/tech" class="uppercase text-white letter-spacing-2" tag="li" ><span class="primary-nav-span" aria-hidden="true">03</span>Technology</router-link>
      </ul>
    </nav>

  </div>
</template>

<script>
export default {
  name: "Primary-nav",
  methods: {
      OpenCloseMobileNav () {
        const nav = document.querySelector(".primary-navigation");
        const navToggle = document.querySelector(".mobile-nav-toggle");
    
        const visiblity = nav.getAttribute("data-visible");
        if (visiblity === "false") {
            nav.setAttribute("data-visible", true);
            navToggle.setAttribute("aria-expanded", true);
        } else {
            nav.setAttribute("data-visible", false);
            navToggle.setAttribute("aria-expanded", false);
        }   
      }
  }
};
</script>

<style scoped>
/* logo */
.logo {
  margin: 2rem 1.5rem;
}

/* interactives navigation */
.primary-navigation {
  --gap: clamp(1.4rem, 4vw, 3.5rem);
  --underline-gap: 1.5rem;
  list-style: none;
  padding: 0;
  margin: 0;
  background-color: hsl(var(--clr-white) / 0.1);
  backdrop-filter: blur(2rem);
}

#nav-primary a.router-link-exact-active {
  border-color: hsl(var(--clr-white) / 1);
}

/*-- nav & burger menu --*/
.mobile-nav-toggle {
  display: none;
}

/* mobile nav setup */
@media (max-width: 35em) {
  .primary-navigation {
    --underline-gap: 1rem;
    position: fixed;
    z-index: 100;
    inset: 0 0 0 25%; /* top right bottom left */
    list-style: none;
    padding: 10vh 2rem;
    margin: 0;
    flex-direction: column;
    transform: translateX(100%);
    transition: transform 0.5s ease-in-out;
  }

  .primary-navigation[data-visible="true"] {
    transform: translateX(0);
  }

  #nav-primary a.router-link-exact-active {
    border: none;
  }
}

.primary-navigation a {
  text-decoration: none;
}

.primary-nav-span {
  font-weight: 700;
  margin-right: 0.5em;
}

/* burger menu */
@media (max-width: 35em) {
  .mobile-nav-toggle {
    cursor: pointer;
    display: block;
    position: absolute;
    z-index: 200;
    right: 1rem;
    top: 2rem;
    background: transparent;
    background-image: url(../assets/shared/icon-hamburger.svg);
    background-position: center;
    background-repeat: no-repeat;
    width: 1.5rem;
    aspect-ratio: 1;
    border: 0;
  }

  .mobile-nav-toggle[aria-expanded="true"] {
    background-image: url(../assets/shared/icon-close.svg);
  }
}

@media (min-width: 35em) and (max-width: 45em) {
  .primary-navigation {
    padding-inline: 1rem;
  }

  .primary-nav-span {
      display: none;
  }
}

/* make appear the grey line next to logo */
.primary-header {
    justify-content: space-between;
    align-items: center;
}

@media (min-width: 45em) {  
  .primary-navigation {
    margin-block: 2rem;
    padding-inline: clamp(1rem, 2vw, 7rem);
  }

  .primary-header::after {
   content: '';
   display: block;
   position: relative;
   height: 1px;
   width: 100%;
   margin-left: 1rem;
   margin-right: -1.4rem;
   background: hsl( var(--clr-white) / .25);
   order: 1;
  }

  nav {
    order:2;
  } 
}

@media (min-width: 55em) {  
  .primary-navigation {
    padding-inline: clamp(3rem, 7vw, 7rem);
  }

  .primary-header::after {
   margin-left: 2rem;
   margin-right: -2.5rem;
  }
}
</style>
