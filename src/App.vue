<script >
import 'animate.css';
import navbar from './components/navbar.vue';

export default{
  data(){
    return{
      isNavActive: false,
    }
  },
  components:{
    navbar
  },
  mounted(){
    this.isNavActive = false;
    window.addEventListener("mousemove", this.cursor);
    window.addEventListener("scroll", this.toggleNav);
  },
  methods:{
    cursor(e) {
      const cursorRect = document.querySelector("#cursor").getBoundingClientRect();
      const innerCursorRect = document.querySelector("#inner-cursor").getBoundingClientRect();
     
      // Calcola le coordinate del cursore rispetto alla finestra visibile
      const x = e.clientX - cursorRect.width / 2;
      const y = e.clientY - cursorRect.height / 2;

      const xInner = e.clientX - innerCursorRect.width / 2;
      const yInner = e.clientY - innerCursorRect.height / 2;

      let mouse = document.querySelector("#cursor");
      mouse.style.transform = `translate(${x}px, ${y}px)`;

      let inner = document.querySelector("#inner-cursor");
      inner.style.transform = `translate(${xInner}px, ${yInner}px`;
    },
    toggleNav(){
      if (window.scrollY > 730) {
        this.isNavActive = true;
      } else {
        this.isNavActive = false;
      }
    }
  }
}
</script>

<template>
  <div id="cursor"></div>
  <div id="inner-cursor"></div>
  <navbar v-if="this.isNavActive" :class="(this.isNavActive) ? 'active animate__animated animate__fadeInDown': ''"></navbar>
  <navbar  id="about"></navbar>
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
  z-index: 9999999999999999999999999999;
}

#inner-cursor{
  background-color: rgba($color: $atomic-tangerine, $alpha: 0.4);
  border-radius: 50%;
  width: 7px;
  height: 7px;
  position: fixed;
  pointer-events: none;
  transition: transform 0.3s ease;
  z-index: 9999999999999999999999999999;
}

//active stuff
.active{
  position: fixed;
  top: 0;
  z-index: 1000;
}

//media-query
@media screen and (max-width: 400px) {
  #cursor, #inner-cursor{
    display: none;
  }
}
</style>