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
        font-size: 2em;
        letter-spacing: .05em;

        span {
            display: block;
        }
    }
</style>