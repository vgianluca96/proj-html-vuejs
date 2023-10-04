<script>

export default {
    name: 'AppMainSec4',
    data() {
        return {
            blocks: [
                {
                    class: 'divx1 divy1',
                },
                {
                    class: 'divx2 divy1',
                },
                {
                    class: 'divx3 divy1',
                },
                {
                    class: 'divx1 divy2',
                },
                {
                    class: 'divx2 divy2',
                },
                {
                    class: 'divx3 divy2',
                },
                {
                    class: 'divx1 divy3',
                },
                {
                    class: 'divx2 divy3',
                },
                {
                    class: 'divx3 divy3',
                },
            ]
        }
    }
}

</script>

<template>
    <section class="build-pizza d-flex flex-wrap position-relative">
        <h2 class="text-uppercase">
            go ahead and <br>
            build your <br>
            own pizza <br>
            we won't <br>
            judge!
        </h2>
        <div v-for="(item, index) in this.blocks" :class="item.class">
        </div>
    </section>
</template>

<style></style>