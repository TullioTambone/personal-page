<script>
import navbar from '../sections/navbar.vue';

export default{
    data(){
        return{}
    },
    components:{
        navbar
    },
    mounted(){
        this.overMouse();
    },
    methods:{
        overMouse(){
            let navLinks = document.querySelectorAll(".nav-links");
            let cursor = document.querySelector("#cursor");
            let inner = document.querySelector("#inner-cursor");

            navLinks.forEach(link => {
                link.addEventListener("mouseover", () => {
                    cursor.style.width = '33px';
                    cursor.style.height = '33px';

                    inner.style.width = '15px';
                    inner.style.height = '15px';
                });
                
                link.addEventListener("mouseout", () => {
                    cursor.style.width = '25px';
                    cursor.style.height = '25px';

                    inner.style.width = '7px';
                    inner.style.height = '7px';
                });
            });
        }
    }
}
</script>

<template>
    <navbar></navbar>
    <div class="content">
        <a href="" class="nav-links">bellaaaaaa</a>
    </div>
</template>

<style lang="scss" scoped>
@use '../style/main.scss';
.content{
    height: 100vh;
    width: 100%;
    border: 1px solid red;
}
</style>