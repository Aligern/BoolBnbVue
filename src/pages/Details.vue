<template>
    <HeaderComponent id="ls-header" />
    <div class="container m-0-auto mt-3">
            <!-- button go back -->
            <div class="pb-3">
                    <RouterLink :to="{ name: 'home' }">
                        <button class="btn draw-border"><i class="fa-solid fa-chevron-left"></i> Go Back</button>
                    </RouterLink>
            </div>

            <div id="apartment-container" >
                <!-- apartment image -->
                <h1>Your next dreamhouse {{ apartments.name }}</h1>
                <div id="apartment-image">
                   <img :src=" store.imgBasePath + apartments.image_cover" :alt="apartments.name">
                </div>

                <!-- left side -->
                <!-- apartment info -->
                <div  class="d-flex justify-content-between ls-glass mt-4 ">
                    <div id="host-info-left" class="d-flex flex-column">
                            <div class="ls-line-right ">
                                <div class="p-2 ls-line-bot">
                                    <h3>Host Name</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt et fugit praesentium voluptates cupiditate quo esse reprehenderit sequi eveniet a rerum at omnis iusto in quia necessitatibus, ab, velit nostrum temporibus facilis optio voluptatem explicabo facere ipsum. Magni, quod molestias.</p>
                                </div>

                                <div>
                                    <h5 class="pt-3 text-center">- Services available -</h5>
                                    <div class="btn">badge1</div>
                                    <div class="btn">badge2</div>
                                    <div class="btn">badge3</div>
                                    <div class="btn">badge4</div>
                                    <div class="btn">badge5</div>
                                </div>
                            </div>
                    </div>

                    <!-- apartment description -->
                    <div id="apartment-description" class="">
                        <h3>Apartment Description</h3>
                        <p>{{ apartments.description }}</p>
                    </div>
                </div>

                <!-- right side -->
                <div id="apartment-info-right" class="ls-glass mt-4 mb-4 d-flex justify-content-between">
                    <div id="contact-form" class="">
                        <div class="ls-line-right p-3 pe-3">
                            <form>
                                <h4>Contact me:</h4>
                                <div class="">
                                    <label for="exampleFormControlInput1">Email address</label>
                                    <input type="email" class=" form-control" id="" placeholder="name@example.com">
                                </div>
                                <div class="">
                                    <label for="exampleFormControlTextarea1">Example textarea</label>
                                    <textarea class="form-control" id="" rows="5"></textarea>
                                </div>
                            </form>
                            <div class="d-flex justify-content-end">
                                <button class="btn draw-border mt-2"><i class="fa-solid fa-envelope-open-text"></i></button>
                            </div>
                        </div>
                    </div>
                    <div id="apartment-reservation">
                        <h4>Reserve now</h4>
                    </div>
                </div>
            </div>
    </div>
</template>

<script>
import { store } from '../store';
import HeaderComponent from '../components/HeaderComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';
    export default {
        name: 'Details',
        components: { 
            HeaderComponent,
            FooterComponent,
            },
            data() {
                return {
                    store, 
                    apartments: [],
                }
            },
            created() {
                const slug = this.$route.query.slug;
                if (slug) {
                    this.apartments = this.store.apartments.find(apartment => apartment.slug === slug);
                }
            }
    }
</script>

<style lang="scss" scoped>

#host-info-left {
    padding: 30px;
    min-width: 50%;
}

#apartment-info-right {
    padding: 20px;
    min-width: 50%;
}

#apartment-description {
    padding: 20px;
    min-width: 50%;
}

#contact-form {
    min-width: 50%;
    padding: 20px;
}

#apartment-reservation {
    min-width: 50%;
    padding: 20px;
}

#apartment-image {
    width: 100%;
    height: 100%;
    box-sizing: content-box;
    box-shadow: 15px 10px 20px rgba(0, 0, 0, 0.3);
    overflow: hidden;
}

.draw-border {
 box-shadow: inset 0 0 0 4px #29C1E6;
 color: #29C1E6;
 transition: color 0.25s 0.0833333333s;
 position: relative;
}

.draw-border::before, .draw-border::after {
 border: 0 solid transparent;
 box-sizing: border-box;
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
 color: #FBBF4F;
}

.draw-border:hover::before, .draw-border:hover::after {
 border-color: #FBBF4F;
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
 font: 700 17px "Roboto Slab", sans-serif;
 padding: 1em 2em;
 letter-spacing: 0.05rem;
}

.btn:focus {
 outline: 2px dotted #29C1E6;
}

.ls-glass {
    background-color: hsla(0, 0%, 100%, 0.2);
    -webkit-backdrop-filter: blur(5px);
    backdrop-filter: blur(5px);
    border-radius: 15px;
    box-shadow: 15px 10px 13px rgba(0, 0, 0, 0.2);
}

.ls-border {
    border: 1px solid #29C1E6;
}

.ls-line-right {
    border-right: 2px solid #29C1E6;
    border-radius: 11px;
    box-shadow:15px 10px 13px rgba(0, 0, 0, 0.2);
}

.ls-line-bot {
    border-bottom: 1px solid #29C1E6;
    width: 90%;
}

#ls-header {
    
}


</style>