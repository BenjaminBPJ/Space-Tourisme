<template>
    <main>
        <!-- numbered title -->
        <div>
            <h2 class="numbered-title"><span>01</span>colors</h2>
        </div>
        <!-- explore button -->
        <div class="flex">
            <a href="#" class="large-button uppercase ff-serif fs-600 text-dark bg-white">Explore</a>
        </div>
        <!-- navigation -->
        <div>
            <nav>
                <ul class="primary-navigation underline-indicators flex">
                    <li class="active"><a class="uppercase text-white letter-spacing-2" href="#"><span>01</span>Active</a></li>
                    <li><a class="uppercase text-white letter-spacing-2" href="#"><span>02</span>Hovered</a></li>
                    <li><a class="uppercase text-white letter-spacing-2" href="#"><span>03</span>Idle</a></li>
                </ul>
            </nav>
        </div>
        <!-- Tabs -->
        <div class="tab-list underline-indicators flex">
            <button aria-selected="true" class="uppercase ff-sans-cond text-accent bg-dark letter-spacing-2">Moon</button>
            <button aria-selected="false" class="uppercase ff-sans-cond text-accent bg-dark letter-spacing-2">Mars</button>
            <button aria-selected="false" class="uppercase ff-sans-cond text-accent bg-dark letter-spacing-2">Europa</button>
        </div>  
        <!-- Dots -->
        <div class="dot-indicators flex">
            <button aria-selected="true"><span class="sr-only">Slide title</span></button>
            <button aria-selected="false"><span class="sr-only">Slide title</span></button>
            <button aria-selected="false"><span class="sr-only">Slide title</span></button>
        </div>  
        <!-- numbers -->
        <div class="number-indicators flex">
            <div aria-selected="true" class="numbers-button">1</div>
            <div aria-selected="false" class="numbers-button">2</div>
            <div aria-selected="false" class="numbers-button">3</div>
        </div>     
    </main>
</template>

<script>
export default {
    name : "Component",
}
</script>


<style scoped>
/* numbered title */
.numbered-title {
    font-family: var(--ff-sans-cond);
    font-size: var(--fs-500);
    text-transform: uppercase;
    letter-spacing: 4.72px;
}

.numbered-title span {
    margin-right: 0.5em;
    font-weight: 700;
    color: hsl(var(--clr-white) / 0.25);
}

/* explore button */
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

.primary-navigation a > span{
    font-weight: 700;
    margin-right: 0.5em;
}

.underline-indicators > * {
    cursor: pointer;
    padding: var(--underline-gap, 1rem) 0;
    border: 0;
    border-bottom: .2rem solid hsl( var(--clr-white) / 0 );
}

.underline-indicators > *:hover,
.underline-indicators > *:focus {
    border-color: hsl( var(--clr-white) / .25);
}

.underline-indicators > .active,
.underline-indicators > [aria-selected="true"] {
    border-color: hsl( var(--clr-white) / 1);
}

.tab-list {
    --gap: 2rem;
}

/* interactive dot list */
.dot-indicators > * {
    cursor: pointer;
    border: 0;
    border-radius: 50%;
    padding: 0.5em;
    background-color: hsl( var(--clr-white) / 0.25);
}

.dot-indicators > *:hover,
.dot-indicators > *:focus {
    background-color: hsl( var(--clr-white) / 0.5);
}

.dot-indicators > [aria-selected="true"] {
    background-color: hsl( var(--clr-white) / 1); 
}

/* numbers */
.number-indicators {
    flex-direction: column;
}

.number-indicators > * {
    cursor: pointer;
    display: grid;
    place-items: center;
    border: solid 1px hsl( var(--clr-white) / 0.2);
    border-radius: 50%;
    aspect-ratio: 1;
    width: 4em;
}

.number-indicators > *:hover,
.number-indicators > *:focus {
    border-color: hsl( var(--clr-white) / 0.5);
}

.number-indicators > [aria-selected="true"] {
    background-color: hsl( var(--clr-white) / 1); 
    color: hsl( var(--clr-dark));
}
</style>