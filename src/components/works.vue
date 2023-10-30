<script>
import {store} from "../store";
import gsap from "gsap";
export default{
    name: 'works',
    data(){
        return{
            store
        }
    },
    watch: {
        'store.section3': function (e) {
            if (e) {
                this.thirdAnimation();
            }
        },
    },mounted(){

    },
    methods:{
        thirdAnimation(){
            
            // gsap.to('.w-1', {

            // })
        },
        seeSection(el){
            document.querySelector('.work').addEventListener('click', ()=>{
                gsap.to(el, {
                    
                })
            })
        }
    }
}
</script>

<template>
    <div class="mycont">
        <h1>Selected_ Works</h1>
        <div class="work w-1 nav-links">
            <div class="infos">
                <h5 class="title">
                    Vito_Lauciello
                </h5>
                <span class="description">
                    Personal page and Portfolio of a Italian Photographer
                </span>
            </div>
            <div class="ref-img">
                <img class="image1" src="/public/eye.png" alt="">
            </div>
        </div>

        <div class="work w-2 nav-links" >
            <div class="ref-img">
                <img src="/public/boolbnb.png" alt="">
            </div>

            <div class="infos">
                <h5 class="title">
                    BoolB&B
                </h5>
                <span class="description">
                    Web app for finding and managing apartment rentals
                </span>
            </div>
        </div>

        <div class="work w-3 nav-links" >
            <div class="infos">
                <h5 class="title">
                    PHP_Auth
                </h5>
                <span class="description">
                    To-Do list for managing events with a login and registration system
                </span>
            </div>

            <div class="ref-img">
                <img src="/public/phpauth.png" alt="">
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.mycont{
    width: 100%;
    height: 100vh;  
    padding-top: 5vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 3rem;

    h1{
        color: #333;
        font-weight: 700;
        margin: 0;
    }

    .work{
        width: 70%;
        height: 20vh;
        display: flex;
        justify-content: center;
        gap: 10px;
        cursor: pointer;

        .infos{
            width: 30%;
            display: flex;
            flex-direction: column;
            color: #333;

            .title{
                text-align: left;  
                height: 50%;
                width: 100%; 
                margin: 0;
                font-weight: 600;
                font-size: 30px;
                display: flex;
                align-items: center;
            }
            .description{
                text-align: right;
                height: 50%;
                width: 100%;
                padding: 5px;
            }
        }

        .ref-img{
            width: 70%;
            img{
                position: absolute;
                width: 40%;
                object-fit: cover;
                object-position: center;
                filter: grayscale(1) sepia(5%) brightness(80%) saturate(50%);
            }
        }
    }

    .w-1:hover .infos {
        background-image: url('/public/hovereye.png'); // Imposta l'URL dell'immagine di sfondo
        background-size: 120%; // Regola la dimensione dell'immagine di sfondo
        background-position: center; // Posiziona l'immagine al centro
        background-repeat: no-repeat; // Evita la ripetizione dell'immagine
        opacity: 1; // Imposta l'opacità a 0 per nascondere l'immagine di sfondo inizialmente
        color: white;
        transition: all 1s;
    }

    .work:hover{
        border-left: 1px solid #333;
        border-top: 1px solid #333;
        border-right: 1px solid #333;
        transition: all 1s;
    }

    .w-2:hover .infos {
        background-image: url('/public/hoverboolbnb.png'); // Imposta l'URL dell'immagine di sfondo
        background-size: 90%; // Regola la dimensione dell'immagine di sfondo
        background-position: right; // Posiziona l'immagine al centro
        background-repeat: no-repeat; // Evita la ripetizione dell'immagine
        opacity: 1; // Imposta l'opacità a 0 per nascondere l'immagine di sfondo inizialmente
        transition: all 1s;
    }

    .w-3:hover .infos {
        background-image:url("/public/hoverphp.png"); // Imposta l'URL dell'immagine di sfondo
        background-size: 90%; // Regola la dimensione dell'immagine di sfondo
        background-position: left; // Posiziona l'immagine al centro
        background-repeat: no-repeat; // Evita la ripetizione dell'immagine
        opacity: 1; // Imposta l'opacità a 0 per nascondere l'immagine di sfondo inizialmente
        color: white;
        transition: all 1s;
    }
}

@media screen and (max-width:768px) {
    .mycont{
        display: flex;
        flex-direction: column;
        align-items: center;
        row-gap: 0;
        .work{
            height: 15vh;
            flex-direction: column;
            margin:2rem 0;
            .infos{
                flex-direction: row;
                width: 100%;
                align-items: center;

                .title{
                    width: 45%;
                }
            }
            .ref-img{
                width: 100%;

                img{
                    width: 80%;
                    height: 100px;
                }
            }
        }

        .w-2 > .ref-img{
            order: 2;
        }

        .w-2 > .infos{
            order: 1;
        }
        
        .work:hover{
            border: none
        }
        .w-1:hover .infos {
            background: none;
            color: #333;
        }


        .w-2:hover .infos {
            background: none;
        }

        .w-3:hover .infos {
            background:none;
            color: #333;
        }
    }
}

@media screen and (max-width:450px) {
    .mycont{
        padding-top: 8vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        row-gap: 20px;
        
        h1{
            align-self: flex-start;
            padding-left: 10px;
        }
        .work{
            
            flex-direction: column;
            margin: 0.5rem 0;
            .infos{
                flex-direction: row;
                width: 100%;
                justify-content: center;
                align-items: center;
                .title{
                    width: 100%;
                    font-size: 20px;
                }

                .description{
                    display: none;
                }
            }
            .ref-img{
                width: 100%;

                img{
                    width: 300px;
                    height: 80px;
                }
            }
        }
    }
}
</style>