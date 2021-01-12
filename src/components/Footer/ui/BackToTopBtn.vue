<template>
  <Fragment>
      <transition name="fading">
      <button v-on:click="backToTop" v-show="scrolledDown" class="back-to-top">
          <i class="fas fa-arrow-up"></i>
      </button>
      </transition>
  </Fragment>

</template>

<script>
import { Fragment } from 'vue-fragment';

export default {
    name: 'BackToTopBtn',
    components: { Fragment },
    data() {
        return {
            scrolledDown: false
        }
    },

    mounted() {
        this.trackScroll();
    },

    destroyed() {
        this.trackScroll();
    },

    methods: {
        backToTop: function(e) { // Jump bck to top of page after clicked
            e.preventDefault();
            scrollTo(0,0);    
        },

        trackScroll: function() {
            window.onscroll =  () => {
                let windowHeight = window.innerHeight / 4;
                let scrollHeight = document.documentElement.scrollTop || document.body.scrollTop;

                if(scrollHeight <= windowHeight) { // If page is at top is at the top & less than half of browser height
                    if(this.scrolledDown === true) this.scrolledDown = false; // button is vanish
                }
                else if(scrollHeight > windowHeight) { // If page isn't at top and further down than half the browser page height
                    if(this.scrolledDown === false) this.scrolledDown = true; // button will appear
                }                
            }
        }       
    }
}
</script>
<style scoped lang="scss">
    .fading-enter-active, .fading-leave-active {
    transition: opacity .5s;
    }
    .fading-enter, .fading-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
    }
    .back-to-top {
        background: $pink-bg;
        color: $accent-font-color;
        cursor: pointer;
        border-radius: 51%; 
        border: 0 solid $white-color;
        font-size: 1em;
        transition: all .09s ease-in-out;
        width: 3em;
        height: 3em;
        position: fixed;
        bottom: 1em;
        right: 1em;
        z-index: 6;
    }

  .back-to-top:hover, 
  .back-to-top:active, 
  .back-to-top:focus, 
  .back-to-top:focus-visible  {
      background: $accent-font-color;
      border: 0 solid $white-color;
      color:  $pink-bg;
      outline: none;
  }    
</style>