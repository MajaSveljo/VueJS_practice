<template>
  <div>

      <footer>
          <p>{{ copyright }}{{ title }}</p>
      </footer>

  </div>
</template>

<script>


export default {
  props: {
      title: String
  },
  
  components: {
     
  },
  data() {
    return {
      copyright: 'Copyright 2017 Vue Ninjas'
    }
  },
  methods: {

  }
}
</script>

<style scoped>

    footer{
        background: #222;
        padding: 6px;
    }

    p{
        color: lightgreen;
        text-align: center;
    }

</style>
