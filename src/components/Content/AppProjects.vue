<template>
  <section class="projects">
      <aside class="prj">
          <div class="prj-data">
              <h2>Project 1</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni harum quaerat dolore assumenda? Earum eum maxime optio quibusdam, suscipit aspernatur, voluptatem impedit adipisci aut nobis iste aperiam voluptate sunt sequi!
                Amet nisi perferendis neque illum officia quos fugiat cupiditate nam. Exercitationem harum, reprehenderit
              </p>
          </div>

          <div class="prj-thumbnil">
              <figure>
                  <img src="https://i.imgur.com/K3BflwQ.png" alt="dummy data">
              </figure>
          </div>
          <footer class="tail"></footer>
      </aside>

          <aside class="prj">
          <div class="prj-data">
              <h2>Project 2</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni harum quaerat dolore assumenda? Earum eum maxime optio quibusdam, suscipit aspernatur, voluptatem impedit adipisci aut nobis iste aperiam voluptate sunt sequi!
                Amet nisi perferendis neque illum officia quos fugiat cupiditate nam. Exercitationem harum, reprehenderit
              </p>
          </div>

          <div class="prj-thumbnil">
              <figure>
                  <img src="https://i.imgur.com/K3BflwQ.png" alt="dummy data">
              </figure>
          </div>
          <footer class="tail"></footer>
      </aside>

      <aside class="prj">
          <div class="prj-data">
              <h2>Project 3</h2>
              <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi iste eos ad illum, distinctio recusandae facilis suscipit. Aliquid voluptas veniam dignissimos iusto ipsam sit magnam incidunt esse quasi, nemo voluptatibus?Architecto tenetur temporibus dicta labore sit molestias cum deleniti velit autem iusto voluptates quidem ipsa hic natus molestiae error tempore a, at enim perspiciatis. Quo necessitatibus repellendus modi beatae saepe.
            </p>
          </div>

          <div class="prj-thumbnil">
              <figure>
                  <img src="https://i.imgur.com/K3BflwQ.png" alt="dummy data">
              </figure>
          </div>         
          <footer class="tail"></footer>
        </aside>

      <aside class="prj">
          <div class="prj-data">
              <h2>Project 4</h2>
              <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi iste eos ad illum, distinctio recusandae facilis suscipit. Aliquid voluptas veniam dignissimos iusto ipsam sit magnam incidunt esse quasi, nemo voluptatibus?Architecto tenetur temporibus dicta labore sit molestias cum deleniti velit autem iusto voluptates quidem ipsa hic natus molestiae error tempore a, at enim perspiciatis. Quo necessitatibus repellendus modi beatae saepe.
            </p>
          </div>

          <div class="prj-thumbnil">
              <figure>
                  <img src="https://i.imgur.com/K3BflwQ.png" alt="dummy data">
              </figure>
          </div>  
          <footer class="tail"></footer>
        </aside>

      <aside class="prj">
          <div class="prj-data">
              <h2>Project 5</h2>
              <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi iste eos ad illum, distinctio recusandae facilis suscipit. Aliquid voluptas veniam dignissimos iusto ipsam sit magnam incidunt esse quasi, nemo voluptatibus?Architecto tenetur temporibus dicta labore sit molestias cum deleniti velit autem iusto voluptates quidem ipsa hic natus molestiae error tempore a, at enim perspiciatis. Quo necessitatibus repellendus modi beatae saepe.
            </p>
          </div>

          <div class="prj-thumbnil">
              <figure>
                  <img src="https://i.imgur.com/K3BflwQ.png" alt="dummy data">
              </figure>
          </div>
          <footer class="tail"></footer>
        </aside>
  </section>

  
</template>

<script>
export default {
    name: 'AppProjects'
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
        z-index: auto;

        @media screen and ( max-width: $lg-screen ) {
            font-size: 1.15em;
        }

        @media screen and ( max-width: $sm-screen ) {
          padding: 2.5rem 1rem 2rem 1rem;
          flex-flow: column nowrap;
        }        

        .prj-data {
            flex: 1;

            @media screen and ( max-width: $sm-screen ) {
            text-align: center;
            font-size: .80em;
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
                font-size: .75em;    

                @media screen and ( max-width: $sm-screen ) {
                    line-height: 1.5rem;
                }          
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
            bottom: -2.5rem;
            width: 0;
            height: 0;
            border-style: solid;
            border-width: 2em 2em 0 2em;
            z-index: 2;

            @media screen and ( max-width: $sm-screen ) {
                border-width: 1.25em 1.25em 0 1.25em;
                left: 45%;
                bottom: -1.55rem;
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