<template>
  <router-view />
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
/* ----------------- */
/* Custom properties */
/* ----------------- */

:root {
  /* colors */
  --clr-dark: 230 35% 7%;
  --clr-light: 231 77% 90%;
  --clr-white: 0 0% 100%;

  /* font-sizes */
  --fs-900: clamp(5rem, 8vw + 1rem, 9.375rem);
  --fs-800: 6.25rem;
  --fs-700: 3.5rem;
  --fs-600: 2rem;
  --fs-500: 1.75rem;
  --fs-400: 1.125rem;
  --fs-300: 1rem;
  --fs-200: 0.875rem;

  /* font-sizes */
  --ff-serif: "Bellefair", serif;
  --ff-sans-cond: "Barlow Condensed", sans-serif;
  --ff-sans-normal: "Barlow", sans-serif;
}

@media (min-width: 35em) {
    :root {
        --fs-800: 5rem;
        --fs-700: 2.5rem;
        --fs-600: 1.5rem;
        --fs-400: 1rem;
    }
}

@media (min-width: 45em) {
    :root {
        /* font-sizes */
        --fs-800: 6.25rem;
        --fs-700: 3.5rem;
        --fs-600: 2rem;
        --fs-400: 1.125rem;
    }
}

/* ----------------- */
/* Reset             */
/* ----------------- */

/* Box-sizing & margins */
*,
::before,
::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  font-weight: 400;
}

/* set up body */
body {
  font-family: var(--ff-sans-normal);
  font-size: var(--fs-400);
  color: hsl(var(--clr-white)) ;
  background-color:hsl(var(--clr-dark));
  line-height: 1.5;
}

.body-content {
  /* put content in the all page */
  min-height: 100vh;
  display: grid;
  grid-template-rows: min-content 1fr;

  background-size: cover;
  background-position: bottom center;
}

/* make images easier to work with */
img,
picture {
  max-width: 100%;
  display: block;
}

/* make forms elements easier to work with */
input,
button,
textarea,
select {
  font: inherit;
}

/* remove animations for people who've turned them off */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

/* ----------------- */
/* Utility classes   */
/* ----------------- */

.flex {
  display: flex;
  gap: var(--gap, 1rem);
}

.grid {
  display: grid;
  gap: var(--gap, 1rem);
}

.d-block {
  display: block;
}

.flow > *:where(:not(:first-child)) {
  margin-top: var(--flow-space, 1rem);
}

.container {
  padding-inline: 2em;
  margin-inline: auto;
  max-width: 80rem;
}

.grid-container {
  text-align: center;
  display: grid;
  place-items: center;
}

.grid-container > * {
  max-width: 50ch;
}

@media (min-width: 45em) {
  .grid-container {
    column-gap: var(--container-gap, 2rem);
    grid-template-columns: minmax(2rem, 1fr) repeat(2, minmax(0, 30rem)) minmax(2rem, 1fr);
  }
}

@media (min-width: 55em) {
  .grid-container {
    column-gap: var(--container-gap, 2rem);
    grid-template-columns: minmax(1rem, 1fr) repeat(2, minmax(0, 40rem)) minmax(1rem, 1fr);
  }
}

/* Screen reader */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap; /* add line */
  border: 0;
}

/* colors */
.bg-dark {
  background-color: hsl(var(--clr-dark));
}
.bg-accent {
  background-color: hsl(var(--clr-light));
}
.bg-white {
  background-color: hsl(var(--clr-white));
}

.text-dark {
  color: hsl(var(--clr-dark));
}
.text-accent {
  color: hsl(var(--clr-light));
}
.text-white {
  color: hsl(var(--clr-white));
}

/* typography */
.ff-serif { font-family: var(--ff-serif); } 
.ff-sans-cond { font-family: var(--ff-sans-cond); } 
.ff-sans-normal { font-family: var(--ff-sans-normal); } 

.letter-spacing-1 { letter-spacing: 4.75px; } 
.letter-spacing-2 { letter-spacing: 2.7px; } 
.letter-spacing-3 { letter-spacing: 2.35px; } 

.uppercase { text-transform: uppercase; }

.fs-900 { font-size: var(--fs-900); }
.fs-800 { font-size: var(--fs-800); }
.fs-700 { font-size: var(--fs-700); }
.fs-600 { font-size: var(--fs-600); }
.fs-500 { font-size: var(--fs-500); }
.fs-400 { font-size: var(--fs-400); }
.fs-300 { font-size: var(--fs-300); }
.fs-200 { font-size: var(--fs-200); }


.fs-900,
.fs-800,
.fs-700,
.fs-600 {
    line-height: 1.1;
}
/* ------------------------ */
/* Specifics properties     */
/* ------------------------ */

/* underlines for nav and titles */
.underline-indicators > * {
    cursor: pointer;
    padding: var(--underline-gap, 1rem) 0;
    border: 0;
    border-bottom: .2rem solid hsl( var(--clr-white) / 0 );
    background-color: transparent;
}

.underline-indicators > *:hover,
.underline-indicators > *:focus {
    border-color: hsl( var(--clr-white) / .25);
    color: hsl( var(--clr-white));
}

.underline-indicators > [aria-selected="true"] {
    color: hsl( var(--clr-white) / 1);
    border-color: hsl( var(--clr-white) / 1);
}

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
</style>