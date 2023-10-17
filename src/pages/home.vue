<script>
import about from '../components/about.vue';
import works from '../components/works.vue';
import contact from '../components/contact.vue';

export default{
    data(){
        return{
            
        }
    },
    components:{
        about,
        works,
        contact
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

                    inner.style.width = '20px';
                    inner.style.height = '20px';
                });
                
                link.addEventListener("mouseout", () => {
                    cursor.style.width = '25px';
                    cursor.style.height = '25px';

                    inner.style.width = '7px';
                    inner.style.height = '7px';
                });
            });
        },
    }
}
</script>

<template>
    <!-- about -->
    <section class="content">
        <about></about>
    </section>

    <!-- works -->
    <section class="content" id="works">
        <works></works>
    </section>

    <!-- contact -->
    <section class="content" id="contact">
        <contact></contact>
    </section>
</template>

<style lang="scss" scoped>
@use '../style/main.scss';
.content{
    height: 100vh;
    width: 100%;
    border: 1px solid red;
    &:first-child{
        height: 80vh;
    }
}
</style>