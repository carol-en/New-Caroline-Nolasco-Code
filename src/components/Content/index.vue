<template>
    <main class="content">
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
    .content {
        background: $app-bg;
    }
</style>