<template>
  <aside class="about" v-if="about">
      <h2>Developer & Designer</h2>
        <vue-markdown :inline="true">
            {{about}}
        </vue-markdown>    
  </aside>
</template>

<script>
import client from "../utils/contentful";
import VueMarkdown from '@adapttive/vue-markdown'

export default {
    name: 'AppAbout',
    components: {
        VueMarkdown
    },

    data() {
        return {
            about: ""
        }
    },    
    
    mounted: async function() {
          client.getEntry('21sIZgWzyMlXPLw3hhjV2h')
            .then((entry) => { 
                let aboutContent = entry.fields.body
                this.about = aboutContent
                })    
    }                      
}
</script>

<style scoped lang="scss">

    .about {
        font-size: .55em;      

            @media screen and ( max-width: $lg-screen ) {
                font-size: .65em;
            }
            
            @media screen and ( max-width: $sm-screen ) {
                font-size: .75em;
            }        

        h2 {
            font-size: 2.25em;
            text-transform: uppercase;
            font-family: $header2-font;
            color: $black-color;
            text-shadow: -1px 0 $white-color, 
              0 1px $white-color, 1px 0 $white-color, 
              0 -1px $white-color;

            @media screen and ( max-width: $md-screen ) {
                font-size: 1.75em;
            }              
        }
    }
</style>