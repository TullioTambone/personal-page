<script>
import {store} from '../store'

import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger)

export default{
    name: 'myInfo',
    data(){
        return{
            desktop: '',
            store,
            positions: [
                { xAx: 210, yAx: 55 },
                { xAx: 150, yAx: 150 },
                { xAx: 0, yAx: 200 },
                { xAx: -150, yAx: 150 },
                { xAx: -210, yAx: -55 }, //vue
                { xAx: -150, yAx: -150 },
                { xAx: 0, yAx: -200 },
                { xAx: 150, yAx: -150 },
                { xAx: -210, yAx: 55 },// node
                { xAx: 210, yAx: -55 }, //py
            ],
            
        }
    },
    mounted(){
        this. desktop = gsap.matchMedia()
    },
    watch: {
        'store.section2': function (newVal) {
            if (newVal) {
                this.SecondSecAnimation();
            }
        },
    },
    methods:{
        SecondSecAnimation(){
            gsap.to('.fa-gear', {
                delay: 1,
                opacity: 1,
                duration:0.5,
                ease: "power4.inOut",
                onComplete: () => {
                    gsap.to('.fa-gear', {
                        rotate: 360,
                        duration: 2,
                        ease: "power4.inOut",
                        onComplete: () => {
                            
                            gsap.to('.fa-brands', {
                                opacity: 0.2,
                                duration: 1.5,
                            })

                            gsap.to('.fa-gear', {
                                opacity: 0.1,
                                duration: 1.5,
                                onComplete: () => {
                                    gsap.to('.infos', {
                                        opacity: 1,
                                        duration: 0.5,
                                        ease: "power4.inOut",
                                    })
                                }
                            })

                            gsap.to('.image2Sec',{
                                opacity:0.02,
                                duration:1.5,
                            })
                        }
                    })
                    let brands = document.querySelectorAll('.fa-brands');
                    let brandArray = Array.from(brands);

                    this.desktop.add("(max-width: 576px)", () => {
                        let positionsMin = this.positions.map((e) => ({
                            xAx: e.xAx * 0.6,
                            yAx: e.yAx * 0.6,
                        }));   
                        brandArray.forEach((brand, index) => {
                            gsap.to(brand, {
                                x: positionsMin[index].xAx,
                                y: positionsMin[index].yAx,
                                scale: 1.2,
                                duration: 1.5,
                                opacity:1,
                                ease: "power4.inOut",
                            });
                        });
                    })
                    this.desktop.add("(min-width: 577px)", () => {     
                        brandArray.forEach((brand, index) => {
                            gsap.to(brand, {
                                x: this.positions[index].xAx,
                                y: this.positions[index].yAx,
                                scale: 1.5,
                                duration: 1.5,
                                opacity:1,
                                ease: "power4.inOut",
                            });
                        });
                    })
                }
            })
        }
    }
}
</script>

<template>
     <div class="mycontainer">

        <div class="infos">
            <div class="first">
                <h3 class="sub-title">Who am i?</h3>
                <p class="info"> 
                    I'm a web developer based in Italy, passionate about sports, design, and programming. My passion for the latter encompasses the entire spectrum of programming, from creating web interfaces to exploring innovative technologies.
                </p>
            </div>

            <div class="second">
                <h3 class="sub-title">My Journey into Programming</h3>
                <p class="info">
                    Having graduated from a language-oriented high school, I fell in love with programming and pursued a course with the Boolean Tech Academy. Now, I am on my own, creating, developing, staying informed, and studying everything I don't yet know about this world.
                </p>
            </div>
        </div>



        <div class="tech">
            <img class="image2Sec" src="/public/second-sec-bw.png" alt="">

            <i class="fa-solid fa-gear"></i>
            <i class="fa-brands fa-html5"></i>
            <i class="fa-brands fa-css3-alt"></i>
            <i class="fa-brands fa-node-js"></i>
            
            <i class="fa-brands fa-js"></i>
            <i class="fa-brands fa-vuejs"></i>
            <i class="fa-brands fa-sass"></i>
            <i class="fa-brands fa-php"></i>
            <i class="fa-brands fa-laravel"></i>
            <i class="fa-brands fa-bootstrap"></i>
            <i class="fa-brands fa-python"></i>
        </div>

     </div>
</template>

<style lang="scss" scoped>
    .mycontainer{
        width: 100%;
        height: 100vh;
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        .infos{
            opacity: 0;
            padding: 4rem 0;
            width: 80%;
            height: 100%;
            display: flex;
            align-items: center;
            font-size: 20px;
            .first,.second{
                .sub-title{
                    font-weight: 800;
                }
                .info{
                    color: black;
                    font-weight: 500;
                    text-align: left;
                    padding: 0;
                }
            }
            .first{
                align-self: flex-start;
            }

            .second{
                align-self: flex-end;
            }
        }

        .tech{
            position: fixed;
            z-index: -1;
            inset: 0;
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
            img{
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                z-index: -1;
                width: 100%;
                opacity: 0.2;
            }
            i{
                opacity: 0;
                position: absolute;
                color: #333;
                font-size: 30px;
            }
        }
    }

    @media screen and (max-width: 450px) {
        .mycontainer{
            margin: 0;
            .infos{
                padding:0;
                padding-top: 50px;
                gap: 0;
                font-size: 15px;
                align-items:center;
                justify-content: center;

                .sub-title{
                    font-size: 20px;
                }
            }
        }
    }

    @media screen and (max-width: 700px) {
        .mycontainer{
            .infos{
                flex-direction: column;
                justify-content: center;
                align-self: center;
                font-size: 15px;
            }
        }
    }

    @media screen and (max-width:992px) {
        .mycontainer{
            width: 100%;
            height: 100vh;
            margin: 0;
            .info{
                padding:0;
                padding-top: 50px;
                gap: 0;
                font-size: 15px;
                align-items:center;
                justify-content: center;
                .sub-title{
                    font-size: 20px;
                }
            }
        }
    }
</style>