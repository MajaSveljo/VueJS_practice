// mixins are used to externalize pices of code that you want to use on multiple ocassions

export default {
    computed: {
        filteredBlogs: function(){
            return this.blogs.filter((blog) => {
                return blog.title.match(this.search);
            })
        }
    }
}