<script>

import AppMainSec1 from './AppMainSec1.vue'
import AppMainSec2 from './AppMainSec2.vue'

export default {
    name: 'AppMain',
    components: {
        AppMainSec1,
        AppMainSec2,
    }
}

</script>

<template>
    <main>

        <AppMainSec1 />

        <AppMainSec2 />

        <section>
            <div class="row row-cols-2 m-0">
                <div class="col p-1 ps-0">
                    <img src="../assets/img/h1-img-4.jpg" alt="" class="w-100">
                </div>
                <div class="col p-1 pe-0">
                    <div>ciao</div>
                </div>
            </div>
        </section>
    </main>
</template>

<style></style>