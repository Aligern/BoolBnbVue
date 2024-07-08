<template>
    <HeaderComponent />
    <div class="container ls-glass m-0-auto mt-3">
        <h1>Host Info</h1>
        <div id="host-info">
            <p>Name</p>
            <p>Description</p>
            <p>contact infos</p>
            <p>reviews</p>

        </div>
    </div>
    <div class="container ls-glass mt-4 mb-4 d-flex justify-content-between">
        <div id="contact-form">
            <div class="p-3 pe-3">
                <form @submit.prevent="sendForm()" class="">
                    <h4>Contact me:</h4>
                    <div class="d-flex">
                        <div>
                            <label for="name">Name<span class="text-danger">*</span></label>
                            <input v-model="name" type="text" class="form-control" id="name" placeholder="Your name">
                        </div>
                        <div class="ms-3">
                            <label for="email">Email address <span class="text-danger">*</span></label>
                            <input v-model="email" type="email" class=" form-control" id="email" placeholder="name@example.com">
                        </div>
                    </div>
                    <div class="mt-2">
                        <label for="message">Your message</label>
                        <textarea v-model="message" class="form-control" id="message" cols="30" rows="10">{{ message }}</textarea>
                    </div>
                    <div class="d-flex justify-content-end">
                        <button type="submit" :disabled="!isValidEmail(email)" class="btn draw-border mt-2"><i class="fa-solid fa-envelope-open-text"></i></button>
                    </div>
                    
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import { store } from '../store';
import HeaderComponent from '@/components/HeaderComponent.vue';
import axios from 'axios';
    export default {
        name: 'ContactComponent',
        components:{
            HeaderComponent
        },
        data() {
            return {
                store,
                emailRegex: /^(?!.*\.\.)((?!\.)[\w-]+(\.[\w-]+)*)(@[\w-]+)((\.[a-zA-Z]{2,})+)$/,
                email: '',
                message: '',
                name: '',
            }
        },
        computed: {
// questa funziona effettua un check sulla validazione del form tramite la proprietà trim() disabilitando il pulsante quando il campo email o il messaggio sono vuoti
},
methods: {
    sendForm() {
        const data = {
            name: this.name,
            email: this.email,
            message: this.message
        }
        axios.post(`${this.store.apiBaseUrl}/contacts`, data).then((res) => {
            console.log(res.data.status);
        }).catch((error) => {
            
        }).finally (() => {

        })
    },
    isValidEmail(email) {
                    const emailRegex = /^(?!.*\.\.)((?!\.)[\w-]+(\.[\w-]+)*)(@[\w-]+)((\.[a-zA-Z]{2,})+)$/;
                    return emailRegex.test(email);
                },
    }}
</script>

<style lang="scss" scoped>
#contact-form {
    min-width: 100%;
    padding: 20px;
}


.draw-border {
 //box-shadow: inset 0 0 0 4px #000000;
 color: #000000;
 transition: color 0.25s 0.0833333333s;
 position: relative;
}

.draw-border::before, .draw-border::after {
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
 color: #000000;
 background-color: transparent;
}

.draw-border:hover::before, .draw-border:hover::after {
 border-color: #000000;
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

.ls-glass {
    background-color: hsla(0, 0%, 100%, 0.2);
    -webkit-backdrop-filter: blur(5px);
    backdrop-filter: blur(5px);
    border-radius: 15px;
    box-shadow: 15px 10px 13px rgba(0, 0, 0, 0.2);
}
</style>