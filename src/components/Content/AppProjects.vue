<template>
  <section class="projects">
      <h1>Projects Will Go Here!</h1>
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
        padding: 2rem;
        z-index: 1;

        .prj-data {
            flex: 1;

            h2 {
                font-family: $header-font;
                font-size: 1.8em;
                letter-spacing: .08em;
            }

            p {
                font-size: .9em;
            }
        }

        .prj-thumbnil {
            flex: 1;

            figure {
                img {
                    margin: 0 auto;
                    border: $light-gray 1px solid;
                }
            }
        }
    }
    .prj:nth-child(odd) {
        background: $green-bg;
        color: $accent-font-color;
        text-align: right;

        .prj-data {
            order: 2;

            p {
                margin: 2em 0 0 3em;
            }
        }
    }
 

    .prj:nth-child(even) {
    background: $light-bg;
    color: $primary-font-color;
    text-align: left;

    .prj-data {
        p {
        margin: 2em 3em 0 0; 
        }
    }

    .prj-thumbnil {
        order: 1;
    }
}

// Figure out why Z_index is still hidden beneath next prj

    .prj:after {
        content: "";
        position: absolute;
        display: block;
        width: 50px;
        height: 50px;
        background: pink;
        padding: 1em;
        left: 50%;
        bottom: -2rem;
        z-index: 5;
    }
</style>