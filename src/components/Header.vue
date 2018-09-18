<template>
  <header>

      <h1 v-on:click="changeTitle">{{ title }}</h1>

  </header>
</template>

<script>
import { bus } from '../main';


export default {
  props: {
    title: {
      type: String
    }
  },


  components: {
    
  },
  data() {
    return {
      title: 'Vue Ninja'
    }
  },
  methods: {
    changeTitle: function() {
      //this.$emit('changeTitle', 'Vue Wizards');
      this.title = 'Vue Wizards 2';
      bus.$emit('titleChanged', 'Vue Wizards 2');
    }
  }
}
</script>

<style scoped>

header{
    background: lightgreen;
    padding: 10px;
}

h1{
    color: #222;
    text-align: center;
}

</style>
