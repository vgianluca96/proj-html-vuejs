<script>

import dynamicItems from './assets/js/dynamicItems.js'
import AppHeader from './components/AppHeader.vue'
import AppMain from './components/AppMain.vue'
import AppFooter from './components/AppFooter.vue'

export default {
  components: {
    AppHeader,
    AppMain,
    AppFooter
  },
  data() {
    return {
      dynamicItems
    }
  }
}

</script>

<template>
  <AppHeader :navItems="dynamicItems.navItems" />

  <AppMain />

  <AppFooter :restaurants="dynamicItems.restaurants" :workHours="dynamicItems.workHours" />
</template>

<style lang="scss"></style>
