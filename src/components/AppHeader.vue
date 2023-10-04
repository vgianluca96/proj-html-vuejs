<script>

import AppHeaderNav from './AppHeaderNav.vue'
import AppHeaderJumbo from './AppHeaderJumbo.vue'

export default {
    name: 'AppHeader',
    components: {
        AppHeaderNav,
        AppHeaderJumbo
    },
}

</script>

<template>
    <header>

        <AppHeaderNav />

        <AppHeaderJumbo />

    </header>
</template>

<style></style>