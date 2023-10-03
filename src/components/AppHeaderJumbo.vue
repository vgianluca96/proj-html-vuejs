<script>

import { state } from '../state.js'

export default {
    name: 'AppHeaderJumbo',
    data() {
        return {
            state,
            jumboImgs: [
                {
                    img1: './src/assets/img/h3-rev-img-1.png',
                    img2: './src/assets/img/h3-rev-img-2.png',
                    show: true
                },
                {
                    img1: './src/assets/img/h3-rev-img-3.png',
                    img2: './src/assets/img/h3-rev-img-4.png',
                    show: false
                },
                {
                    img1: './src/assets/img/h3-rev-img-5.png',
                    img2: './src/assets/img/h3-rev-img-6.png',
                    show: false
                },
            ],
            active: 0,
        }
    },
    methods: {
        prev() {
            this.active = state.prev(this.active, this.jumboImgs.length);
        },
        next() {
            this.active = state.next(this.active, this.jumboImgs.length);
        }
    }
}

</script>

<template>
    <div class="d-flex justify-content-between align-items-center">

        <div class="prev-btn">
            <button type="button" @click="this.prev()">
                Prev
            </button>
        </div>

        <div class="d-flex justify-content-center align-items-center" v-for="(item, index) in this.jumboImgs"
            :class="{ 'd-none': index != this.active }">
            <div class="jumbotron">
                <img :src="item.img1" alt="" class="jumbo-bg">
                <img :src="item.img2" alt="" class="jumbo-front">
            </div>
        </div>

        <div class="next-btn">
            <button type="button" @click="this.next()">
                Next
            </button>
        </div>

    </div>
</template>


<style></style>