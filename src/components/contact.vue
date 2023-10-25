<script>
import gsap from 'gsap';

export default{
    name: 'contact',
    data(){
        return{

        }
    },
    mounted(){
        this.animate();
    },
    methods:{
        animate(){
            gsap.to('.image', {
                x: -500,
                delay: 3,
                duration:4,
                ease: "power4.inOut",
                
            })
        }
    }
}
</script>

<template>
    
    <div class="mycont">
        <img class="image" src="/public/mano.png" alt="">
    </div>
</template>

<style lang="scss" scoped>
    .mycont{
        height: 100vh;
        width: 100vw;
        position: relative;
        border: 1px solid red;
        overflow: hidden;

        img{
            position: absolute;
            z-index: 1;
            top: 0;
            right: -600px;
            width: 80%;
        }
    }
</style>