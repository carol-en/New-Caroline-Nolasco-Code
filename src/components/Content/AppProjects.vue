<template>
  <section class="projects">
      <aside class="prj" v-for="entry in entries" :key="entry.sys.id">
          <div class="prj-data">
              <h2>{{entry.fields.title}}</h2>
              <p>
                <a :href="entry.fields.appLink" target="_blank" rel="noopener noreferrer"><i class="fas fa-desktop"></i>  Open App</a>
                <a :href="entry.fields.githubLink" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i>  Open GitHub</a>
              </p>

              <p>
                {{entry.fields.description}}
              </p>
          </div>

          <div class="prj-thumbnil">
              <figure>
                  <img :src="entry.fields.image.fields.file.url" :alt="entry.fields.title"/>
              </figure>
          </div>
          <footer class="tail"></footer>
      </aside>
  </section>

  
</template>

<script>
import client from "../utils/contentful";

export default {
    name: 'AppProjects',

    data() {
    return {
        entries: []
        }
    },

    mounted: async function() {
        client.getEntries({
              "content_type": "projects-code",
              "order":"sys.createdAt"
          })
            .then(entries => {
                let projectsArr = entries.items.reverse()
                this.entries = projectsArr
            } );

    }
}
</script>

<style scoped lang="scss">
    .prj {
        position: relative;
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        align-items: start;
        padding: 3rem;
        font-size: .65em;
        line-height: 2em;
        z-index: auto;


        @media screen and ( max-width: $lg-screen ) {
            font-size: .70em;
        }        

        @media screen and ( max-width: $sm-screen ) {
          padding: 2.5rem 1rem 2rem 1rem;
          flex-flow: column nowrap;
        }        

        .prj-data {
            flex: 1;

            @media screen and ( max-width: $sm-screen ) {
            text-align: center;
            width: 100%;
            }            

            h2 {
                font-family: $header-font;
                font-size: 1.8em;
                letter-spacing: .08em;

                @media screen and ( max-width: $sm-screen ) {
                    margin-bottom: .80rem;
                }

            }

            p {
                line-height: 1.5em;

                @media screen and ( min-width: $xlg-screen ) {
                    line-height: 1.85em;
                }  

                @media screen and ( max-width: $lg-screen ) {
                    line-height: 1.80em;
                }                                               
            }

            a {
                color: $pink-bg;
                padding-right: 1em;
                font-size: 1.20em;
            }          
        }

        .prj-thumbnil {
            flex: 1;
            padding-top: 0;

            @media screen and ( max-width: $sm-screen ) {
                width: 100%;
                padding-top: 2rem;
            }

            figure {
                img {
                    margin: 0 auto;
                    border: $light-gray 1px solid;                   
                }
            }
        }
    
        .tail {
            position: absolute;   
            left: 50%;
            bottom: -2em;
            width: 0;
            height: 0;
            border-style: solid;
            border-width: 2em 2em 0 2em;
            z-index: 2;

            @media screen and ( max-width: $lg-screen ) {
                bottom: -1.5em;
            }

            @media screen and ( max-width: $md-screen ) {
                bottom: -1.55rem;
            }

            @media screen and ( max-width: $sm-screen ) {
                border-width: 1.25em 1.25em 0 1.25em;
                left: 45%;
                bottom: -1.05rem;
            }
        }   
    }
    
    .prj:nth-child(odd) {
        background: $green-bg;
        color: $accent-font-color;
        text-align: right;
        z-index: 1;

        .prj-data {
            order: 2;
            z-index: 2;

            @media screen and ( max-width: $sm-screen ) {
                order: 1;
                text-align: center;
            }

            p {
                margin: 2em 0 0 3em;

                @media screen and ( max-width: $sm-screen ) {
                    margin: 0;
                }
            }
            a:hover {
                color: $white-color;
            }            
        }

        .prj-thumbnil {
            order: 1;

            @media screen and ( max-width: $sm-screen ) {
                order: 2;
            }
        }

        .tail {
            border-color: $green-bg transparent transparent transparent;   
        }
    }
 

    .prj:nth-child(even) {
    background: $light-bg;
    color: $primary-font-color;
    text-align: left;

        .prj-data {
            order: 1;
            @media screen and ( max-width: $sm-screen ) {
                text-align: center;
            }


            p {
            margin: 2em 3em 0 0; 

            @media screen and ( max-width: $sm-screen ) {
                margin: 0;
             }
            }
            a:hover {
                color: $black-color;
            }               
        }
        .prj-thumbnil {
            order: 2;

            @media screen and ( max-width: $sm-screen ) {
                order: 2;
            }
        }
        .tail {
            border-color: $light-bg transparent transparent transparent;   
        }
}

    .prj:nth-last-child(1) {
        .tail {
            display: none;
        }   
    }
</style>