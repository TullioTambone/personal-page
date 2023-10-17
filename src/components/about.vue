<script>
export default{
    name: 'about',
    data(){
        return{

        }
    }
}
</script>

<template>
    <div id="box">
        <h1 id="me">Hello World <br> i'm Tullio
            <span>Web Developer &diams; IoT lover <br> and this is my world</span>
        </h1>
    </div>
</template>

<style lang="scss" scoped>
@use '../style/main.scss';

#box{
    height: 90vh;
    padding: 4rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    #me{
        color: white;
        letter-spacing: 0.3rem;
        font-size: 100px;
        font-weight: 600;
        margin: 0;
        text-align: center;
        span{
            display: block;
            color: white;
            font-size: 25px;
            font-weight: 400;
        }
    }
}

</style>