<template>
  <div>
    <app-header v-bind:title="title" v-on:changeTitle="updateTitle($event)"></app-header>
    <app-ninjas v-bind:ninjas="ninjas"></app-ninjas>
    <app-footer v-bind:title="title"></app-footer>

  </div>
</template>

<script>

import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Ninjas from './components/Ninjas.vue'

export default {
  components: {
    'app-header': Header,
    'app-footer': Footer,
    'app-ninjas': Ninjas
  },
  data() {
    return {
      ninjas: [
            {name: 'Maja', specialty: 'Ninja', show: 'false'},
            {name: 'Dragan', specialty: 'Fat', show: 'false'},
            {name: 'Jovana', specialty: 'Pretty', show: 'false'},
            {name: 'Milan', specialty: 'Smart', show: 'false'},
            {name: 'Mia', specialty: 'Elegant', show: 'false'},
        ],

      title: 'Vue Ninjas'
    }
  },
  methods: {
    updateTitle: function(updatedTitle) {
      this.title = updatedTitle;
    }
  }
}
</script>

<style scoped>


</style>
