<template>

    <!-- with this kind of organization and slot-using we are enableing the developer to
    use the same form(schema) for multiple forms(questinares) by having the structure
    and just editing slots content. Also they styling would be done in this component below -->
  <div>
    <h1>Please fill out our form</h1>
    <form>
        <div id ="form-header">
            <slot name="form-header" />
        </div>
        <div id="form-fields">
            <slot name="form-fields" />
        </div>
        <div id="form-controls">
            <slot name="form-controls" />
        </div>
        <div id="useful-links">
            <ul>
                <li> <a href="#">Link 1</a></li>
                <li> <a href="#">Link 2</a></li>
                <li> <a href="#">Link 3</a></li>
                <li> <a href="#">Link 4</a></li>
            </ul>
        </div>
    </form>
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



</style>
