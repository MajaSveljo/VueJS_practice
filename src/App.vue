<template>
  <div>
    
    <formHelper>
      <h2 slot="title">{{ title }}</h2>
      <p slot="text">I am the paragraph text for the slot</p>
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
