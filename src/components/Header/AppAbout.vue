<template>
  <aside class="about">
      <h2>Front End Developer</h2>
      <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi deserunt beatae voluptatum sit. Deserunt aut hic nihil nostrum a, animi asperiores? Officiis adipisci illo nostrum dicta molestiae fuga aliquam ut!
          Unde, ullam! Deleniti esse perferendis omnis nobis quam dignissimos quod. Quod eius odio unde modi recusandae praesentium in, enim dolorem debitis! Quis labore molestias reiciendis modi sed, nesciunt consequuntur nihil!
          Temporibus officia et debitis dolores omnis sunt animi dolorem id ullam! Iure nihil cum libero! Animi explicabo rem dolorem, illo fugiat soluta fugit, voluptatum sed, reprehenderit a voluptatem ratione beatae?
      </p>
  </aside>
</template>

<script>
export default {
    name: 'AppAbout'
}
</script>

<style scoped lang="scss">
    .about {
        font-size: .75em;

            @media screen and ( max-width: $lg-screen ) {
                font-size: .65em;
            }
            
            @media screen and ( max-width: $sm-screen ) {
                font-size: .75em;
            }        

        p {
            width: 85%;
            line-height: 1.75em;
            font-size: .85em;
            font-weight: lighter;

            @media screen and ( max-width: $md-screen ) {
                width: 100%;
            }
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