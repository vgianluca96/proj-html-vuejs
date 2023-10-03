<script>

import navItems from '../assets/js/navItems.js'

export default {
    name: 'AppHeaderNav',
    data() {
        return {
            navItems
        }
    },
}

</script>

<template>
    <nav class="d-flex justify-content-center align-items-center py-3">

        <ul class="d-flex flex-row align-items-center">
            <li v-for="item in navItems.items" class="mx-3">
                <a href="" :class="item.class" v-if="item.text != ''">
                    <img :src="item.thumb" alt="" height="12" class="thumb-color" v-if="item.thumb != ''">
                    {{ item.text }}
                </a>
                <img :src="item.img" alt="" width="100" v-if="item.img != ''">
            </li>
        </ul>

    </nav>
</template>

<style></style>