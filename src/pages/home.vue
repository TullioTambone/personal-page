<script>
import gsap from 'gsap';
import {Observer} from 'gsap/Observer';
gsap.registerPlugin(Observer);

import about from '../components/about.vue';
import works from '../components/works.vue';
import contact from '../components/contact.vue';

export default{
    data(){
        return{
            wrap: [
                'about',
                'works',
                'contact'
            ],
            control: 0,
            scrollDirection: 0,
            currentIndex: 0,
            animating: true,
            outerWrappers:'',
            innerWrappers: '',
            wrap: '',
            upDirection: 1,
            downDirection: -1,
            sections: [],
            images: [],

        }
    },
    components:{
        about,
        works,
        contact,
    },

    mounted(){
        this.overMouse();
        this.sections = document.querySelectorAll('section')
        this.images = document.querySelectorAll('.bg')
        this.outerWrappers = gsap.utils.toArray(".outer")
        this.innerWrappers = gsap.utils.toArray(".inner")
        this.wrap = gsap.utils.wrap(0, this.sections.length)
        this.currentIndex = -1
        this.animating
        gsap.set(this.outerWrappers, { yPercent: 100 })
        gsap.set(this.innerWrappers, { yPercent: -100 })
        this.gotoSection(0, 1)

        Observer.create({
            type: "wheel,touch,scroll",
            wheelSpeed: -1,
            onDown: () => !this.animating && this.gotoSection(this.currentIndex -1, this.downDirection),
            onUp: () => !this.animating && this.gotoSection(this.currentIndex + 1, this.upDirection),
            tolerance: 10,
            preventDefault: true
        });
    },
    methods:{
        gotoThisSection(thisValue) {
            if (this.currentIndex !== thisValue && !this.animating) {
            if(thisValue > this.currentIndex){

                this.gotoSection(thisValue, 1);
            }else{
                this.gotoSection(thisValue, -1);
            }
            }
        },

        overMouse(){
            let navLinks = document.querySelectorAll(".nav-links");
            let cursor = document.querySelector("#cursor");
            let inner = document.querySelector("#inner-cursor");

            navLinks.forEach(link => {
                link.addEventListener("mouseover", () => {
                cursor.style.width = '37px';
                cursor.style.height = '37px';

                inner.style.width = '25px';
                inner.style.height = '25px';
                });
                
                link.addEventListener("mouseout", () => {
                cursor.style.width = '25px';
                cursor.style.height = '25px';

                inner.style.width = '7px';
                inner.style.height = '7px';
                });
            });
        },

        gotoSection(index, direction) {
            
            index = this.wrap(index);
            console.log(index, direction)            

            this.animating = true;

            let fromTop = direction === -1
            let dFactor = fromTop ? -1 : 1
            let tl = gsap.timeline({
                defaults: { duration: 1.25, ease: "power1.inOut" },
                onComplete: () => this.animating = false
            });
        
            if (this.currentIndex >= 0) {
                // The first time this function runs, current is -1
                gsap.set(this.sections[this.currentIndex], { zIndex: 0 });
                tl.to(this.images[this.currentIndex], { yPercent: -15 * dFactor })
                .set(this.sections[this.currentIndex], { autoAlpha: 0 });
            }
            gsap.set(this.sections[index], { autoAlpha: 1, zIndex: 1 });
            tl.fromTo([this.outerWrappers[index], this.innerWrappers[index]], { 
            yPercent: i => i ? -100 * dFactor : 100 * dFactor
            }, { 
                yPercent: 0 
            }, 0)
            .fromTo(this.images[index], { yPercent: 15 * dFactor }, { yPercent: 0 }, 0);

            this.currentIndex = index;
        }
    }
}
</script>

<template>

    <nav>
        <ul>
            <li>
                <a @click="gotoThisSection(1)" class="nav-links">About</a>
            </li>
            <li>
                <a @click="gotoThisSection(2)" class="nav-links">works</a>
            </li>
            <li>
                <a @click="gotoThisSection(3)" class="nav-links">contact</a>
            </li>
        </ul>
    </nav>
    <!-- about -->
    <section class="first">
        <div class="outer">
            <div class="inner">
                <div class="bg one">
                  <div class="section-heading">
                      <about></about>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- how am i -->
    <section class="second">
        <div class="outer">
            <div class="inner">
                <div class="bg">
                    <div class="section-heading">
                      <h2 class="section-heading">
                        chi sono / cosa so fare
                      </h2>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- works -->
    <section class="third">
        <div class="outer">
            <div class="inner">
                <div class="bg">
                    <h2 class="section-heading">
                      Lavori
                    </h2>
                </div>
            </div>
        </div>
    </section>
    <!-- contacts -->
    <section class="fourth">
        <div class="outer">
            <div class="inner">
                <div class="bg">
                    <h2 class="section-heading">contatti</h2>
                </div>
            </div>
        </div>
    </section>
    <!-- <section class="fifth">
        <div class="outer">
            <div class="inner">
                <div class="bg">
                    <h2 class="section-heading">
                      Contatti
                    </h2>
                </div>
            </div>
        </div>
    </section> -->
</template>

<style lang="scss" scoped>
@import '../style/main.scss';


nav{
  position: fixed;
  top: 0;
  z-index: 999999;
  height: 10vh;
    width: 100%;
    display: flex;
    justify-content: right;
    align-items: center;
    padding: 1rem 3rem;
    background-color: transparent;

    ul{
        background-color: transparent;
        display: flex;
        justify-content: center;

        li{
            background-color: transparent;
            margin: 0 15px;
            list-style-type: none;

            a{
                background-color: transparent;
                color:#333;
                text-decoration: none;
                
                &:hover{
                    color: #333;
                    opacity: 1;
                    cursor: pointer;
                }
                &:not(a:hover){
                    color: rgba($color: #333, $alpha: 0.6);
                }
            }
        }
    }
}
//nav mediaQ
@media screen and (max-width:400px) {
  nav{
      ul{
          padding: 0;
          li{
              a{
                color:#333;
                text-decoration: none;

                &:hover{
                    color:#333;
                    text-decoration: none;
                }
                &:not(a:hover){
                    color: #333;
                }
              }
          }
      }
  }
}
$bg-gradient: linear-gradient(
  180deg,
  rgba(0, 0, 0, 0.6) 0%,
  rgba(0, 0, 0, 0.3) 100%
);

* {
  box-sizing: border-box;
  user-select: none;
}

// h2 {
//   font-size: clamp(1rem, 5vw, 5rem);
//   font-weight: 400;
//   text-align: center;
//   letter-spacing: 0.5em;
//   margin-right: -0.5em;
//   color: #333;
//   width: 90vw;
//   max-width: 1200px;
// }

section {
  height: 100vh;
  width: 100%;
  top: 0;
  position: fixed;
  visibility: hidden;

  .outer,
  .inner {
    width: 100%;
    height: 100%;
    overflow-y: hidden;
  }

  .bg {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    background-size: cover;
    background-position: center;

    h2 {
      z-index: 2;
    }

    .clip-text {
      overflow: hidden;
    }
  }
}

.first, .second, .third, .fourth{
  .bg {

    background-color: #cbcbcb;
  }
}

// .second {
//   .bg {
//     background-color: #cbcbcb,
//   }
// }

// .third {
//   .bg {
//     background-color: #cbcbcb,
//   }
// }

// .fourth {
//   .bg {
//     background-color: #cbcbcb,
//   }
// }

// .fifth {
//   .bg {
//     background-color: red;
//     background-position: 50% 45%;
//   }
// }

h2 * {
  will-change: transform;
}
</style>