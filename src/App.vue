<template>
  <div>

    <!-- this says where we want our components to load in when we visit those routes -->
    <router-view></router-view>

  </div>
</template>

<script>
import addBlog from './components/addBlog.vue'
import showBlogs from './components/showBlogs.vue'
import listBlogs from './components/listBlogs.vue'

export default {
  components: {
    'add-blog': addBlog,
    'show-blogs': showBlogs,
    'list-blogs': listBlogs
},
  data() {
    return {

    }
  },
  methods: {
    
  }
}
</script>

<style >

body{
  margin: 0;
  font-family: Arial;
}

</style>
