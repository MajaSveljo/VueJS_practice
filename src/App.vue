<template>
  <div>
    
    <formHelper>
      <div slot="form-header">
        <h3>This is the title of the form</h3>
        <p>Information about the form</p>
      </div>
      <div slot="form-fields">
        <input type="text" placeholder="name" required />
        <input type="password" placeholder="password" required />
      </div>
      <div slot="form-controls">
        <!-- handleSubmit function isn't defined in methods, it was just written for
        practicing purpose -->
        <button v-on:click="handleSubmit">Submit</button>
      </div>
    </formHelper>

  </div>
</template>

<script>
import formHelper from './components/formHelper.vue'

export default {
  components: {
    formHelper: formHelper
},
  data() {
    return {
      // if we're gonna add content dynamicaly the content MUST be defined in the component
      // where the slots are called. In this example it's here
      title: 'I am a dynamic slot title'
    }
  },
  methods: {
    
  }
}
</script>

<style scoped>


</style>
