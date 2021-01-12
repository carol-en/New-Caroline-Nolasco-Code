<template>
  <Fragment>
      <button v-on:click="backToTop" v-show="scrolledDown" class="back-to-top">
          Back To Top
      </button>
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

    methods: {
        backToTop: function(e) {
            e.preventDefault();
            scrollTo(0,0);    
            
            console.log('Back To Top Clicked');
        },

        trackScroll: function() {
            window.onscroll =  function() {
            // let windowHeight = window.innerHeight;
            let scrollHeight = document.documentElement.scrollTop || document.body.scrollTop;

            console.log(this.scrolledDown, scrollHeight);

            }
        }       
    }
}
</script>
<style scoped lang="scss">
    .back-to-top {
        background: $pink-bg;
        color: $accent-font-color;
        cursor: pointer;
        border: 1px solid $accent-font-color;
        font-size: .5em;
        width: 7em;
        height: 7em;
        position: fixed;
        bottom: 2em;
        right: 2em;
        z-index: 6;
    }

  .back-to-top:hover, 
  .back-to-top:active, 
  .back-to-top:focus, 
  .back-to-top:focus-visible  {
      background: $accent-font-color;
      border: 1px solid $accent-font-color;
      color:  $pink-bg;
      outline: none;
  }    
</style>