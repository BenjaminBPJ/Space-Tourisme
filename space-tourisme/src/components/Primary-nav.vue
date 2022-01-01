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
    --gap: 8rem;
    list-style: none;
    padding: 0;
    margin: 0;
}

.primary-navigation a {
    text-decoration: none;
}

.primary-nav-span {
    font-weight: 700;
    margin-right: 0.5em;
}
</style>
