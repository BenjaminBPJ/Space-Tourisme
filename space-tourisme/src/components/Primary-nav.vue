<template>
    <!-- navigation -->
    <div>
        <nav id="nav-primary">
            <ul class="primary-navigation underline-indicators flex">
                <router-link to="/" class="uppercase text-white letter-spacing-2" tag="li"><span class="primary-nav-span">00</span>Home</router-link>
                <router-link to="/about" class="uppercase text-white letter-spacing-2" tag="li"><span class="primary-nav-span">01</span>Destination</router-link>
                <router-link to="/about" class="uppercase text-white letter-spacing-2" tag="li"><span class="primary-nav-span">02</span>Crew</router-link>
                <router-link to="/tech" class="uppercase text-white letter-spacing-2" tag="li"><span class="primary-nav-span">03</span>Technology</router-link>
            </ul>
        </nav>
    </div>
</template>

<script>
export default {
    name: 'Primary-nav'
}
</script>

<style scoped>
/* interactives navigation and tabs */ 
.primary-navigation {
    --underline-gap: 1.5rem;
    list-style: none;
    padding: 0;
    margin: 0;
    background-color: hsl( var(--clr-white) / 0.1);
    backdrop-filter: blur(2rem);
}

#nav-primary a.router-link-exact-active {
  border-color: hsl( var(--clr-white) / 1);
}

.mobile-nav-toggle {
    display: none;
}

@media (max-width: 35em) {
    .primary-navigation {
        --underline-gap: 1rem;
        position: fixed;
        z-index: 100;
        inset: 0 0 0 25%;  /* top right bottom left */
        list-style: none;
        padding: 10vh 2rem;
        margin: 0;
        flex-direction: column;
        transform: translateX(100%);
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
</style>
