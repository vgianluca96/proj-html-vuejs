<script>

import jumboImgs from '../assets/js/jumboImgs.js'

export default {
    name: 'AppHeaderJumbo',
    data() {
        return {
            jumboImgs
        }
    },
    mounted() {
        console.log(this.jumboImgs.items)
        console.log(this.jumboImgs.items[0])
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
    <div class="d-flex align-items-center justify-content-between">
        <button type="button" @click="prev()">
            Prev
        </button>

        <div class="jumbotron d-flex justify-content-center" v-for="(item, index) in this.jumboImgs.items">
            <div v-if="index == this.jumboImgs.visible">
                <img :src="item.img1" alt="">
                <img :src="item.img2" width="50" alt="">
            </div>
        </div>

        <button type="button" @click="next()">
            Next
        </button>
    </div>
</template>


<style></style>