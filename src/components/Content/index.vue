<template>
    <main>
        <AppProjects />
    </main>
</template>

<script>
import AppProjects from './AppProjects';

export default {
    name: 'AppContent',
    components: {
        AppProjects
    }
}
</script>

<style scoped lang="scss">
    main {
        background: $app-bg;
    }
</style>