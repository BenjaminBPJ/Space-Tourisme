<template>
    <!-- Explore button -->
    <div>
        <a href="#" class="large-button uppercase ff-serif fs-600 text-dark bg-white">Explore</a>
    </div>
</template>

<script>
export default {
    name: 'Explore'
}
</script>

<style scoped>
.large-button {
    position: relative;
    z-index: 1;
    display: grid;
    place-items: center;
    padding: 0 2em;
    border-radius: 50%;
    aspect-ratio: 1;
    text-decoration: none;
}

.large-button::after {
    content: '';
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 100%;
    background: hsl( var(--clr-white) / .15);
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
