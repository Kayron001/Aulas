import Vue from 'vue'
import vueMq from 'vue-mq'

Vue.use(vueMq, {
    breakpoints: {
        xs: 576,
        sm: 768,
        md: 960,
        lg: 1140,
        xl: Infinity
    }
})