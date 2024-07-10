<template>
  

  <article class="card my-4">
    <div class="card__badges ">
      <div class="badge-left"><i class="fa-solid fa-star"></i></div>
      <div v-for="services in item.services" :key="services.id"  class="badge-right" >
        <router-link id="services-img" :to="{ name: 'results', params: { id: services.id }}" class="text-black">
          <img :src="store.imgBasePath + services.icon" alt="">
        </router-link>
      </div>
    </div>


<img
  class="card__background"
  :src="store.imgBasePath + item.image_cover"
  alt="Photo of Cartagena's cathedral at the background and some colonial style houses"
  width="1920"
  height="2193"
/>
<div class="card__content | flow">
  <div class="card__content--container | flow">
    <h2 class="card__title">Titolo</h2>
    <p class="card__description">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum in
      labore laudantium deserunt fugiat numquam.
    </p>
  </div>
  <router-link :to="{ name: 'details', params: { slug: item.slug } }" class="btn draw-border">Read more <i class="fa-solid fa-chevron-right"></i></router-link>
</div>
</article>
</template>

<script>
import { store } from '../store';
export default {
  name: 'CardComponent',
  props: [
    'item',
  ],
  data() {
    return {
      store
    }
  },
  mounted() {
   // console.log('item:', this.item);
    //console.log('services:', this.item.services);
  },
  methods: {

  },

}
</script>

<style lang="scss" scoped>
/* Box sizing rules */
*,
*::before,
*::after {
box-sizing: border-box;
}
/* Remove default margin */
body,
h2,
p {
margin: 0;
}
/* GLOBAL STYLES */
body {
display: grid;
place-items: center;
height: 100vh;
}
h2 {
font-size: 2.25rem;
font-family: var(--font-title);
color: var(--white);
line-height: 1.1;
}
p {
font-family: var(--font-text);
font-size: 1rem;
line-height: 1.5;
color: var(--white);
}
.flow > * + * {
margin-top: var(--flow-space, 1em);
}
/* CARD COMPONENT */
.card {
display: grid;
place-items: center;
width: 80vw;
max-width: 21.875rem;
height: 28.125rem;
overflow: hidden;
border-radius: 0.625rem;
box-shadow: 0.25rem 0.25rem 0.5rem rgba(0, 0, 0, 0.25);
}
.card > * {
grid-column: 1 / 2;
grid-row: 1 / 2;
}
.card__background {
object-fit: cover;
max-width: 100%;
height: 100%;
}
.card__content {
--flow-space: 0.9375rem;
display: flex;
flex-direction: column;
justify-content: space-between;
align-self: flex-end;
height: 55%;
padding: 12% 1.25rem 1.875rem;
background: linear-gradient(
  180deg,
  hsla(0, 0%, 0%, 0) 0%,
  hsla(0, 0%, 0%, 0.3) 10%,
  hsl(0, 0%, 0%) 100%
);
}
.card__content--container {
--flow-space: 1.25rem;
}
.card__title {
position: relative;
width: fit-content;
width: -moz-fit-content; /* Prefijo necesario para Firefox  */
}
.card__title::after {
content: "";
position: absolute;
height: 0.3125rem;
width: calc(100% + 1.25rem);
bottom: calc((1.25rem - 0.5rem) * -1);
left: -1.25rem;
background-color: var(--brand-color);
}
.draw-border {
      //box-shadow: inset 0 0 0 4px #000000;
      color: #ffffff;
      transition: color 0.25s 0.0833333333s;
      position: relative;
  }
  .draw-border::before,
  .draw-border::after {
      border: 0 solid transparent;
      box-sizing: border-box;
      border-radius: 3px;
      content: "";
      pointer-events: none;
      position: absolute;
      width: 0;
      height: 0;
      bottom: 0;
      right: 0;
  }
  .draw-border::before {
      border-bottom-width: 4px;
      border-left-width: 4px;
  }
  .draw-border::after {
      border-top-width: 4px;
      border-right-width: 4px;
  }
  .draw-border:hover {
      color: #ffffff;
      background-color: transparent;
  }
  .draw-border:hover::before,
  .draw-border:hover::after {
      border-color: #ffffff;
      transition: border-color 0s, width 0.25s, height 0.25s;
      width: 100%;
      height: 100%;
  }
  .draw-border:hover::before {
      transition-delay: 0s, 0s, 0.25s;
  }
  .draw-border:hover::after {
      transition-delay: 0s, 0.25s, 0s;
  }
  .btn {
      background: none;
      border: none;
      cursor: pointer;
      line-height: 1.5;
      font: 500 17px "Roboto Slab", sans-serif;
      padding: 1em 2em;
      letter-spacing: 0.05rem;
  }
@media (any-hover: hover) and (any-pointer: fine) {
.card__content {
  transform: translateY(62%);
  transition: transform 500ms ease-out;
  transition-delay: 500ms;
}
.card__title::after {
  opacity: 0;
  transform: scaleX(0);
  transition: opacity 1000ms ease-in, transform 500ms ease-out;
  transition-delay: 500ms;
  transform-origin: right;
}
.card__background {
  transition: transform 500ms ease-in;
}
.card__content--container > :not(.card__title),
.card__button {
  opacity: 0;
  transition: transform 500ms ease-out, opacity 500ms ease-out;
}
.card:hover,
.card:focus-within {
  transform: scale(1.05);
  transition: transform 500ms ease-in;
}
.card:hover .card__content,
.card:focus-within .card__content {
  transform: translateY(0);
  transition: transform 500ms ease-in;
}
.card:focus-within .card__content {
  transition-duration: 0ms;
}
.card:hover .card__background,
.card:focus-within .card__background {
  transform: scale(1.3);
}
.card:hover .card__content--container > :not(.card__title),
.card:hover .draw-border,
.card:focus-within .card__content--container > :not(.card__title),
.card:focus-within .draw-border {
  opacity: 1;
  transition: opacity 500ms ease-in;
  transition-delay: 1000ms;
}
.card:hover .card__title::after,
.card:focus-within .card__title::after {
  opacity: 1;
  transform: scaleX(1);
  transform-origin: left;
  transition: opacity 500ms ease-in, transform 500ms ease-in;
  transition-delay: 500ms;
}
.card__badges {
display: flex;
justify-content: space-between;
position: absolute;

top: 10px;
left: 10px;
right: 10px;
z-index: 10;
opacity: 0;
transition: opacity 0.3s ease;
}
.card:hover .card__badges {
opacity: 1;
}
.badge-left,
.badge-right {
width: 50%;
display: flex;
justify-content: center;
align-items: center;
flex-wrap: wrap;
background-color: rgba(255, 255, 255, 0.3);
color: rgb(0, 0, 0);
border-radius: 5px;
z-index: 2000;

}
.badge-right {
cursor: pointer;
/* Stili aggiuntivi per il badge destra se necessario */
}

#services-img {
margin: 3px;


img {
  width: 15px;
  height: 15px;
}
}
}
</style>