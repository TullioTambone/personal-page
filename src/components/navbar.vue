<script>
export default{
    data(){
        return{
            
        }
    },
    methods: {

  }
}
</script>

<template>
    <nav>
        <ul>
            <li>
                <a @click="gotoSection(1, 0)" class="nav-links">About</a>
            </li>
            <li>
                <a href="#works" class="nav-links">works</a>
            </li>
            <li>
                <a href="#contact" class="nav-links">contact</a>
            </li>
        </ul>
    </nav>
</template>

<style lang="scss" scoped>
@import '../style/main.scss';

nav{
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
            margin: 0 10px;
            list-style-type: none;

            a{
                background-color: transparent;
                color:$peach-yellow;
                text-decoration: none;
                &:hover{
                    color: $atomic-tangerine;
                }
                &:not(a:hover){
                    color: rgba($color: $peach-yellow, $alpha: 0.6);
                }
            }
        }
    }
}

@media screen and (max-width:400px) {
    nav{
        justify-content: center;
        
        ul{
            li{
                
                a{
                    color:$peach-yellow;
                    text-decoration: none;

                    &:hover{
                        color:$peach-yellow;
                        text-decoration: none;
                    }
                    &:not(a:hover){
                        color: $peach-yellow;
                    }
                }
            }
        }
    }
}
</style>