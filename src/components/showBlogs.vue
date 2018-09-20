<template>
<!-- since we want to pass a string and not a variable we need to put single
quotatins inside the double ones -->
  <div id="show-blogs">
    
    <h1>All Blog Articles</h1>

    <div v-for="blog in blogs" class="single-blog">
    <!-- for filter to be used the pipe symobl (|) must be used
    after the | comes the filter's name -->
        <h2>{{ blog.title | to-uppercase}}</h2>
        <article>{{ blog.body | snippet}}</article>
    </div>

  </div>
</template>

<script>



export default {
  components: {
    
},
  data() {
    return {
        blogs: []
    }
  },
  methods: {
    
  },
  created() {
      this.$http.get('http://jsonplaceholder.typicode.com/posts')
      .then(function(data){
          this.blogs = data.body.slice(0,10);
      })
  }
}
</script>

<style >

#show-blogs{
    max-width: 800px;
    margin: 0 auto;
}

.single-blog{
    padding: 20px;
    margin: 20px 0;
    box-sizing: border-box;
    background: #eee;
}

</style>
