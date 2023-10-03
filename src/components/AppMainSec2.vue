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
                <h4>
                    {{ item.feedback }}
                </h4>
                <div>
                    {{ item.authorAndDate }}
                </div>
                <div class="d-flex">
                    <div v-for="(n, dotIndex) in this.testimonials.length">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dot"
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