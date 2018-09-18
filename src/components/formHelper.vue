<template>
  <div>
    <slot name="title" />
    <h1>I am the form helper</h1>
    <slot name="text" />
  </div>
</template>

<script>

export default {
  components: {

},
  data() {
    return {

    }
  },
  methods: {
    
  }
}
</script>

<style scoped>

h1{
    color: red;
}

</style>
