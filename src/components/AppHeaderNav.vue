<script>

export default {
    name: 'AppHeaderNav',
    props: ['navItems']
}

</script>

<template>
    <nav class="d-flex justify-content-center align-items-center py-3">

        <ul class="d-flex flex-row align-items-center p-0">
            <li class="mx-3" v-for="item in navItems">
                <a href="javascript:void(0)" :class="item.class" v-if="item.text != ''">
                    <img :src="item.thumb" alt="" height="12" class="thumb-color" v-if="item.thumb != ''">
                    {{ item.text }}
                </a>
                <img :src="item.img" alt="" width="150" v-if="item.img != ''">
            </li>
        </ul>

    </nav>
</template>

<style></style>