<script>

export default {
    name: 'AppMainSec3',
    data() {
        return {
            menu: [
                {
                    name: 'combo piccolo',
                    price: '$10',
                    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae voluptates alias.'
                },
                {
                    name: 'combo mezzo',
                    price: '$20',
                    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae voluptates alias.'
                },
                {
                    name: 'combo grande',
                    price: '$30',
                    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae voluptates alias.'
                }
            ]
        }
    }
}

</script>

<template>
    <section>
        <div class="row row-cols-2 g-0 m-0">
            <div class="women-sitted col">

            </div>
            <div class="menu col">
                <h3 class="text-uppercase">
                    Specials*
                </h3>
                <div class="description">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae voluptates alias consequuntur iste,
                    similique maiores eius illum.
                </div>
                <div class="pt-4" v-for="item in this.menu">
                    <h5 class="text-uppercase">
                        <span class="price">{{ item.price }}</span> {{ item.name }}
                    </h5>
                    <div class="item-description">
                        {{ item.description }}
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style></style>