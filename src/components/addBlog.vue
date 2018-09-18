<template>
  <div id="add-blog">
    
      <h2>Add a new blog post</h2>
      <form>
          <label>Blog Title:</label>
          <input type="text" v-model.lazy="blog.title" required />
          <label>Blog content:</label>
          <textarea v-model.lazy="blog.content"></textarea>
      </form>
    <div id="preview">
        <h3>Preview Blog</h3>
        <p>Blog title: {{ blog.title }}</p>
        <p>Blog content:</p>
        <p>{{ blog.content }}</p>
    </div>
  </div>
</template>

<script>


export default {
  components: {

},
  data() {
    return {
        blog: {
            title: '',
            content: ''
        }
    }
  },
  methods: {
    
  }
}
</script>

<style >



</style>
