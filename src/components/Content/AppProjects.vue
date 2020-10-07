<template>
  <section class="projects">
      <h1>Projects Will Go Here!</h1>
      <aside class="prj">
          <div class="prj-data">
              <h2>Project</h2>
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
              <h2>Project</h2>
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
//  Figure out how to switch flex order depending on odd/even nth child
    .prj {
        display: flex;
        flex-flow: row nowrap;

        .prj-data {
            flex: 1;
        }

        .prj-thumbnil {
            flex: 1;
        }
    }
    .prj:nth-child(even) {
        background: $green-bg;
        color: $accent-font-color;

        .prj-data {
            order: 2;
        }
    }

        .prj:nth-child(odd) {
        background: $light-bg;
        color: $primary-font-color;

        .prj-thumbnil {
            order: 1;
        }
    }
</style>