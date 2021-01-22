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
        font-size: 170%;
        letter-spacing: .05em;
        display: flex;
        flex-flow: nowrap column; 


        span {
            display: block;
            padding: 0;

            @media screen and ( max-width: $sm-screen ) {
                display: inline-block;
                padding: 0 .25em;
            }
        }

        @media screen and ( max-width: $sm-screen ) {
            font-size: 120%;
            letter-spacing: .025em;
            flex-flow: nowrap row;
        }        
    }
</style>