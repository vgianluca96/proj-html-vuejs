import { reactive } from 'vue'

export const state = reactive({

    next(visible, length) {
        visible++;
        if (visible > length - 1) {
            visible = 0;
        }
        return visible;

    },
    prev(visible, length) {
        visible--;
        if (visible < 0) {
            visible = length - 1;
        }
        return visible;
    }

})