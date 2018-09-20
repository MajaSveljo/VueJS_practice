<template>
  <div>

    <app-header></app-header>
    <!-- this says where we want our components to load in when we visit those routes -->
    <router-view></router-view>

    <!-- pro-tip - the component that is curently active gets "active" on a router-link.
    this can be used for styling, e.g. when on home, home is highlighted -->

  </div>
</template>

<script>
import addBlog from './components/addBlog.vue'
import showBlogs from './components/showBlogs.vue'
import listBlogs from './components/listBlogs.vue'
import header from './components/header.vue'

export default {
  components: {
    'add-blog': addBlog,
    'show-blogs': showBlogs,
    'list-blogs': listBlogs,
    'app-header': header
},
  data() {
    return {

    }
  },
  methods: {
    
  }
}
</script>

<style>

body{
  margin: 0;
  font-family: Arial;
}

</style>
