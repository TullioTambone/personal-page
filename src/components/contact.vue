<script>
import gsap from 'gsap';
import MotionPathPlugin from 'gsap/MotionPathPlugin';
gsap.registerPlugin(MotionPathPlugin);

import {store} from '../store';

export default{
    name: 'contact',
    data(){
        return{
            store,
            formData: {
                fullname: '',
                email: '',
                object: '',
                body: '',
            },
        }
    },
    watch: {
        'store.section4': function (val) {
            if (val) {
                this.fourthAnimation();
            }
        },
    },
    mounted(){
    },
    methods:{
        fourthAnimation(){
            gsap.fromTo('.image4', {
                x: 600,
                y:0,
            }, {
                x: 0,
                duration: 3,
                ease: "power4.inOut"
            });
        },

    }
}
</script>

<template>
    <div class="mycontainer">
        <i class="fa-brands fa-instagram"></i>
        <i class="fa-brands fa-github"></i>
        <i class="fa-brands fa-linkedin-in"></i>
        <i class="fa-regular fa-envelope"></i>


        <h4> CONTACT ME </h4>
        <div class="contact">
        </div>

        <img class="image4" src="/public/mano.png" alt="">
    </div>
</template>

<style lang="scss" scoped>
.mycontainer{
    .contact{
        width: 200px;
        height: 200px;
        border: 1px solid red;
        overflow: hidden;

        #svg{
           .r-1{
                &::after{
                    content: 'ciao';
                    width: 50px;
                    height: 50px;
                    z-index: 99;
                    position: relative;
                }
           } 
        }
    }
    
    img{
        overflow-x: hidden;
        position: absolute;
        z-index: -1;
        bottom: 0;
        right: 0;
        width: 70%;
    }
}

@media screen and (max-width: 400px) {
    .mycontainer{
        img{
            width: 120%;
        }
    }
}
</style>