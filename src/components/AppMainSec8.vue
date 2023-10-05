<script>

export default {
    name: 'AppMainSec8',
    data() {
        return {
            events: [
                {
                    day: '02',
                    month: 'nov',
                    name: 'traditional neapolitan pies in kyoto pizza mercato',
                    location: '204 E. Pizzetta Tommaso',
                    dots: true
                },
                {
                    day: '03',
                    month: 'nov',
                    name: 'terrazza patio dining space opening this weekend',
                    location: '204 E. Pizzetta Tommaso',
                    dots: true
                },
                {
                    day: '05',
                    month: 'nov',
                    name: 'sienna private dining room with sthéphane brunn',
                    location: '204 E. Pizzetta Tommaso',
                    dots: false
                }
            ]

        }
    }

}

</script>

<template>
    <section>
        <div class="row row-cols-2 g-0 m-0">
            <div class="events col">
                <div class="love text-uppercase">
                    made with love
                </div>
                <h3 class="text-uppercase pb-2">
                    delish pizza deals
                </h3>
                <div class="d-flex py-3" v-for="item in  events " :class="{ 'dots': item.dots }">
                    <div>
                        <h2 class="day text-center m-0">
                            {{ item.day }}
                        </h2>
                        <h5 class="text-uppercase text-center m-0">
                            {{ item.month }}
                        </h5>
                    </div>
                    <div class="ps-4">
                        <h5 class="text-uppercase m-0">
                            {{ item.name }}
                        </h5>
                        <div class="location py-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                                <path
                                    d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                            </svg>
                            {{ item.location }}
                        </div>
                    </div>
                </div>
            </div>
            <div class="comics col">

            </div>
        </div>
    </section>
</template>

<style></style>