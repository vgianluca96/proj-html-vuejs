<script>

import { state } from '../state.js'

export default {
    name: 'AppMainSec2',
    data() {
        return {
            state,
            testimonials: [
                {
                    feedback: '"forget the trendy pizza shops, this hidden spot makes the best new york-style pizza slice in naples"',
                    authorAndDate: 'Washington post 2018'
                },
                {
                    feedback: '"Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum"',
                    authorAndDate: 'Il Gazzettino 2020'
                },
                {
                    feedback: '"Lorem ipsum dolor sit amet consectetur adipisicing elit."',
                    authorAndDate: 'Repubblica 2022'
                }

            ],
            active: 0
        }
    },
    methods: {
        prev() {
            this.active = state.prev(this.active, this.testimonials.length);
        },
        next() {
            this.active = state.next(this.active, this.testimonials.length);
        }
    }
}

</script>

<template>
    <section class="testimonials d-flex align-items-center">
        <div class="d-flex justify-content-between align-items-center w-100">
            <div class="prev-btn">
                <button type="button" @click="this.prev()">
                    Prev
                </button>
            </div>

            <div class="d-flex flex-column justify-content-center align-items-center w-50 text-uppercase text-center"
                v-for="(item, index) in this.testimonials" :class="{ 'd-none': index != this.active }">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" class="bi bi-quote"
                    viewBox="0 0 16 16">
                    <path
                        d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z" />
                </svg>
                <h5>
                    {{ item.feedback }}
                </h5>
                <div>
                    {{ item.authorAndDate }}
                </div>
                <div class="d-flex">
                    <div v-for="(n, dotIndex) in this.testimonials.length">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-dot"
                            viewBox="0 0 16 16">
                            <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"
                                :class="{ 'dot-red': dotIndex == this.active }" />
                        </svg>
                    </div>
                </div>
            </div>

            <div class="next-btn">
                <button type="button" @click="this.next()">
                    Next
                </button>
            </div>
        </div>
    </section>
</template>

<style></style>