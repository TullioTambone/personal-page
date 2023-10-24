<script>
import gsap from 'gsap';

export default {
    name: 'about',
    data() {
        return {
            showDeveloper: false,
        };
    },
    mounted() {
        this.wordAnimation();
    },
    methods: {
        wordAnimation() {
            gsap.to('.word', {
                opacity: 1,
                y: 100,
                stagger: 0.09,
                delay: 1.5,
                duration: 0.5,
                ease: "power4.inOut",
                onComplete: () => {
                    gsap.to('.word-replace', {
                        x: 300,
                        duration: 0.2,
                        ease: "power4.inOut",
                        onComplete: () => {
                            gsap.set('.word-replace', { display: 'none' });
                            setTimeout(() => {
                                this.showDeveloper = true;
                                this.$nextTick(() => {
                                    gsap.fromTo('.word-changed', {
                                        x: -300,
                                        opacity: 0,
                                    }, {
                                        x: 0,
                                        opacity: 1,
                                        duration: 0.5,
                                        ease: "power4.inOut"
                                    });
                                });
                            }, 200);
                            gsap.to('.last',{
                                opacity: 1,
                                y: 100,
                                stagger: 0.09,
                                delay: 1.2,
                                duration: 0.5,
                                ease: "power4.inOut",
                                onComplete: () => {
                                    gsap.to('.swipe', {
                                        opacity: 1,
                                        y: 100,
                                        x: 15,
                                        stagger: 0.09,
                                        delay: 2,
                                        duration: 0.5,
                                        ease: "bounce.out",
                                    })
                                }
                            })
                        },
                    });
                }
            });
        },
    }
}
</script>



<template>
    <div id="box">
        <h1 id="me">
            <span class="word">H</span>
            <span class="word">e</span>
            <span class="word">l</span>
            <span class="word">l</span>
            <span class="word">o </span>
            <span class="word"> W</span>
            <span class="word">o</span>
            <span class="word">r</span>
            <span class="word">l</span>
            <span class="word">d</span>
            <br>
            <span class="word word-replace">I'm a</span>
            <span class="word-changed" v-if="showDeveloper">Web Developer</span>
            <span class="last"><br> and this is my world</span>
        </h1>

        <div class="swipe">
            <div class="chevron"></div>
            <div class="chevron"></div>
            <div class="chevron"></div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../style/main.scss';

#box{
    padding: 4rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .swipe{
        opacity: 0;
        position: relative;
        margin: 0 auto;
        .chevron {
            position: absolute;
            right: 50%;
            transform: translateX(-50%);
            bottom: 80px;
            width: 28px;
            height: 8px;
            opacity: 0;
            transform: scale3d(0.5, 0.5, 0.5);
            animation: move 3s ease-out infinite;
            &:first-child {
                animation: move 3s ease-out 1s infinite;
            }
        
            &:nth-child(2) {
                animation: move 3s ease-out 2s infinite;
            }
        
            &:before,
            &:after {
            content: ' ';
                position: absolute;
                top: 0;
                height: 100%;
                width: 51%;
                background: #333;
            }
        
            &:before {
                left: 0;
                transform: skew(0deg, 30deg);
            }
        
            &:after {
                right: 0;
                width: 50%;
                transform: skew(0deg, -30deg);
            }
        }
    }

    #me{
        color: #333;
        font-size: 100px;
        font-weight: 600;
        margin: 0;
        text-align: center;
        span{
            color: #333;
            font-size: 40px;
            font-weight: 400;
        }
        .word{
            font-size: 150px;
            transform: translateY(-100px);
            opacity: 0;
        }

        .word-replace, .word-changed{
            font-size: 80px;
            transform: translateY(-100px);
            opacity: 0;
        }

        .last{
            transform: translateY(-100px);
            opacity: 0;
        }
    }
}
@media screen and (max-width: 769px) {
    #box{
        padding: 2rem;
        align-items:start;
        #me{
            font-size: 25px;
            .word{
                font-size: 80px;
                transform: translateY(-100px);
                opacity: 0;
            }
            
            .word-replace, .word-changed{
                font-size: 50px;
                transform: translateY(-100px);
                opacity: 0;
            }
            
            .last{
                transform: translateY(-100px);
                opacity: 0;
            }
        }
    }
}

@media screen and (max-width: 430px) {
    #box{
        padding: 2rem;
        align-items:start;
        #me{
            font-size: 20px;
            .word{
                font-size: 50px;
                transform: translateY(-100px);
                opacity: 0;
            }
            
            .word-replace, .word-changed{
                font-size: 30px;
                transform: translateY(-100px);
                opacity: 0;
            }
            
            .last{
                transform: translateY(-100px);
                opacity: 0;
            }
        }
    }
}

@keyframes move {
  25% {
    opacity: 1;

  }
  33% {
    opacity: 1;
    transform: translateY(30px);
  }
  67% {
    opacity: 1;
    transform: translateY(40px);
  }
  100% {
    opacity: 0;
    transform: translateY(55px) scale3d(0.5, 0.5, 0.5);
  }
}
</style>