<script>

import jumboImgs from '../assets/js/jumboImgs.js'

export default {
    name: 'AppHeaderJumbo',
    data() {
        return {
            jumboImgs
        }
    },
    methods: {
        next() {
            this.jumboImgs.visible++;
            if (this.jumboImgs.visible > this.jumboImgs.items.length - 1) {
                this.jumboImgs.visible = 0;
            }
        },
        prev() {
            this.jumboImgs.visible--;
            if (this.jumboImgs.visible < 0) {
                this.jumboImgs.visible = this.jumboImgs.items.length - 1;
            }
        }
    }
}

</script>

<template>
    <div class="d-flex justify-content-between align-items-center mb-5">

        <div class="">
            <button type="button" @click="prev()">
                Prev
            </button>
        </div>

        <div class="d-flex justify-content-center align-items-center" v-for="(item, index) in this.jumboImgs.items"
            :class="{ 'd-none': index != this.jumboImgs.visible }">
            <div class="jumbotron">
                <img :src="item.img1" alt="" class="jumbo-bg">
                <img :src="item.img2" alt="" class="jumbo-front">
            </div>
        </div>

        <div class="">
            <button type="button" @click="next()">
                Next
            </button>
        </div>

    </div>
</template>


<style></style>