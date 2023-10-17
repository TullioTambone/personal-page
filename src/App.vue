<script >
export default{
  data(){
    return{}
  },
  mounted(){
    this.cursorFollow();
  },
  methods:{
    cursorFollow(){
      window.addEventListener("mousemove", this.cursor);
    },

    cursor(e){
      //pageX and Y 
      let mouse = document.querySelector("#cursor");
      mouse.style.transform = `translate(${e.pageX - 12}px, ${e.pageY - 14}px)`;

      let inner = document.querySelector("#inner-cursor");
      inner.style.transform = `translate(${e.pageX - 3}px, ${e.pageY - 5}px)`;
    },
  }
}
</script>

<template>
  <div id="cursor"></div>
  <div id="inner-cursor"></div>
  <router-view></router-view>
</template>

<style lang="scss">
@import './style/main.scss';

#cursor{
  background-color: transparent;
  border: 1px solid rgba($color: $atomic-tangerine, $alpha: 0.4);
  border-radius: 50%;
  width: 25px;
  height: 25px;
  position: fixed;
  pointer-events: none;
  transition: transform 0.6s ease;
}

#inner-cursor{
  background-color: rgba($color: $atomic-tangerine, $alpha: 0.4);
  border-radius: 50%;
  width: 7px;
  height: 7px;
  position: fixed;
  pointer-events: none;
  transition: transform 0.3s ease;
}
</style>