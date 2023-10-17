<script>
export default{
    data(){
        return{}
    },
}
</script>

<template>
    <nav>
        <ul>
            <li>
                <a href="" class="nav-links">About</a>
            </li>
            <li>
                <a href="" class="nav-links">works</a>
            </li>
            <li>
                <a href="" class="nav-links">contact</a>
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
    padding: 1rem;

    ul{
        display: flex;
        justify-content: center;

        li{
            margin: 0 10px;
            list-style-type: none;

            a{
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

</style>