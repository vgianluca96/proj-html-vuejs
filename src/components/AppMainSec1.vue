<script>

export default {
    name: 'AppMainSec1',
    data() {
        return {
            slides: [
                {
                    img: './src/assets/img/h3-img-1.jpg'
                },
                {
                    img: './src/assets/img/h3-img-2.jpg'
                },
                {
                    img: './src/assets/img/h3-img-3.jpg'
                },
                {
                    img: './src/assets/img/h3-img-4.jpg'
                }
            ]
        }
    }
}

</script>

<template>
    <section>
        <div class="row row-cols-4 gx-1 m-0">
            <div class="slides col" v-for="item in this.slides">
                <img :src="item.img" alt="" class="w-100">
                <div class="slides-hover justify-content-center align-items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                        class="bi bi-eye-fill" viewBox="0 0 16 16">
                        <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                        <path
                            d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
                    </svg>
                </div>
            </div>
        </div>
    </section>
</template>

<style></style>