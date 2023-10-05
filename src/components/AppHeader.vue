<script>

import AppHeaderNav from './AppHeaderNav.vue'
import AppHeaderJumbo from './AppHeaderJumbo.vue'

export default {
    name: 'AppHeader',
    components: {
        AppHeaderNav,
        AppHeaderJumbo
    },
    props: ['navItems']
}

</script>

<template>
    <header>

        <AppHeaderNav :navItems="navItems" />

        <AppHeaderJumbo />

    </header>
</template>

<style></style>