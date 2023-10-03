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

        <!--
        <div class="mt-5">
            <img src="../assets/svg/svg-0.svg" width="50" alt="">
            <img src="../assets/svg/svg-1.svg" width="50" alt="">
            <img src="../assets/svg/svg-2.svg" width="50" alt="">
            <img src="../assets/svg/svg-3.svg" width="50" alt="">
            <img src="../assets/svg/svg-4.svg" width="50" alt="">
            <img src="../assets/svg/svg-5.svg" width="50" alt="">
            <img src="../assets/svg/svg-6.svg" width="50" alt="">
            <img src="../assets/svg/svg-7.svg" width="50" alt="">
            <img src="../assets/svg/svg-8.svg" width="50" alt="">
            <img src="../assets/svg/svg-9.svg" width="50" alt="">
            <img src="../assets/svg/svg-10.svg" width="50" alt="">
            <img src="../assets/svg/svg-11.svg" width="50" alt="">
        </div>
        -->
    </header>
</template>

<style></style>