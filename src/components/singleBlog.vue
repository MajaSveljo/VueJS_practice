<template>

<div id="single-blog">
    <h1>{{blog.title}}</h1>
    <article>{{blog.body}}</article>
</div>

</template>

<script>
export default {
    data() {
        return {
            //we're acessing the route parameter in the id property
            id: this.$route.params.id,
            blog: {}
        }
    },
    created() {
        this.$http.get('http://jsonplaceholder.typicode.com/posts/' + this.id).then(function(data){
            this.blog = data.body;
        });
    }
}

</script>

<style>

#singleBlog{
    max-width: 960px;
    margin: 0 auto;
}

</style>