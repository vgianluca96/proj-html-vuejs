<script>

import AppMainSec1 from './AppMainSec1.vue'
import AppMainSec2 from './AppMainSec2.vue'
import AppMainSec3 from './AppMainSec3.vue'
import AppMainSec4 from './AppMainSec4.vue'

export default {
    name: 'AppMain',
    components: {
        AppMainSec1,
        AppMainSec2,
        AppMainSec3,
        AppMainSec4
    }
}

</script>

<template>
    <main>

        <AppMainSec1 />

        <AppMainSec2 />

        <AppMainSec3 />

        <AppMainSec4 />

    </main>
</template>

<style></style>