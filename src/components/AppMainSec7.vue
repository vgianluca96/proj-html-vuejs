<script>

export default {
    name: 'AppMainSec7',
    data() {
        return {
            pizzaList: [
                {
                    name: 'bismarck',
                    price: '$35.00',
                    oldPrice: '$30.00',
                    img: './src/assets/img/h3-product-img-1a-100x100.png',
                    sold: false
                },
                {
                    name: 'fiori di zucca',
                    price: '$7.00 - $50.00',
                    oldPrice: '',
                    img: './src/assets/img/h3-product-img-2a-150x150.png',
                    sold: false
                },
                {
                    name: 'valdostana',
                    price: '$55.00',
                    oldPrice: '',
                    img: './src/assets/img/h3-product-img-3a-150x150.png',
                    sold: true
                },
                {
                    name: 'pizza tartufata',
                    price: '$45.00',
                    oldPrice: '',
                    img: './src/assets/img/h3-product-img-4a-150x150.png',
                    sold: false
                },
                {
                    name: 'francescana',
                    price: '$25.00',
                    oldPrice: '',
                    img: './src/assets/img/h3-product-img-5a-150x150.png',
                    sold: false
                },
                {
                    name: 'campagnola',
                    price: '$50.00 - $95.00',
                    oldPrice: '',
                    img: './src/assets/img/h3-product-img-6a-100x100.png',
                    sold: false
                },
            ]
        }
    }

}

</script>

<template>
    <section>
        <div class="pizza-flavour py-5">
            <div class="container w-50 text-center">
                <div class="choose-flavour text-uppercase">
                    choose your flavour
                </div>
                <h3 class="text-uppercase">
                    the best pizza menu in town
                </h3>
                <div class="description">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod nihil, ad iusto id esse cum voluptatibus
                    assumenda.
                    unde.
                </div>
            </div>
            <div class="pizzaList row m-0 g-4">
                <div class="col-2 d-flex flex-column align-items-center position-relative" v-for="item in this.pizzaList">
                    <img :src="item.img" alt="" class="w-100">
                    <div class="sold text-uppercase" v-if="item.sold">
                        sold
                    </div>
                    <div class="name text-uppercase">
                        {{ item.name }}
                    </div>
                    <div class="price">
                        <span class="oldPrice" v-if="item.oldPrice != ''">
                            {{ item.oldPrice }}
                        </span>
                        {{ item.price }}
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style></style>