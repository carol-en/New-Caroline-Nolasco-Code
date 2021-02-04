<template>
    <aside class="title">
        <h2>
            <span>Caroline</span>
            <span>Nolasco</span>
        </h2>
    </aside>
</template>

<script>
export default {
    name: 'AppTitle'
}
</script>

<style scoped lang="scss">
    .title {
        text-align: center;
        text-transform: uppercase;
        font-family: $header-font;
        font-size: 1.5em;
        letter-spacing: .05em;

        h2 {
            display: flex;
            flex-flow: nowrap column; 

            @media screen and ( max-width: $md-screen ) {
                flex-flow: nowrap row;
                justify-content: center;
            }
        }


        span {
            display: block;
            padding: 0;

            @media screen and ( max-width: $md-screen ) {
                display: inline-block;
                padding: 0 .25em;
            }
        }

        @media screen and ( max-width: $lg-screen ) { 
            font-size: 1.45em;
        }

        @media screen and ( max-width: $md-screen ) { 
            font-size: 1.15em;
        }

        @media screen and ( max-width: $sm-screen ) {
            font-size: 1.25em;
            letter-spacing: .025em;
        }        
    }
</style>