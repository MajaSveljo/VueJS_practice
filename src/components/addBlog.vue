<template>
  <div id="add-blog">
    
      <h2>Add a new blog post</h2>
      <form v-if="!submitted">
          <label>Blog Title:</label>
          <input type="text" v-model.lazy="blog.title" required />
          <label>Blog content:</label>
          <textarea v-model.lazy="blog.content"></textarea>
          <div id="checkboxes">
              <label>Ninjas</label>
              <input type="checkbox" value="ninjas" v-model="blog.categories" />
              <label>Wizards</label>
              <input type="checkbox" value="wizards" v-model="blog.categories" />
              <label>Mario</label>
              <input type="checkbox" value="mario" v-model="blog.categories" />
              <label>Cheese</label>
              <input type="checkbox" value="cheese" v-model="blog.categories" />
          </div>
          <label>Author:</label>
          <select v-model="blog.author">
              <option v-for="author in authors">{{ author }}</option>
          </select>
          <button v-on:click.prevent="post">Add Blog</button>
      </form>
      <div v-if="submitted">
        <h3>Thanks for adding your post</h3>
      </div>
    <div id="preview">
        <h3>Preview Blog</h3>
        <p>Blog title: {{ blog.title }}</p>
        <p>Blog content:</p>
        <p>{{ blog.content }}</p>
        <p>Blog categories:</p>
        <ul>
            <li v-for="category in blog.categories">{{ category }}</li>
        </ul>
        <p>Author: {{ blog.author }}</p>
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
            content: '',
            categories: [],
            author: ''
        },
        authors: ['The Net Ninja', 'Maja Šveljo', 'Dragan Perić'],
        submitted: false
    }
  },
  methods: {
    post: function() {
        this.$http.post('http://jsonplaceholder.typicode.com/posts', {
            title: this.blog.title,
            body: this.blog.content,
            userId: 1
        }).then(function(data){
            console.log(data);
            this.submitted = true;
        });
    }
  }
}
</script>

<style >



</style>
