import showBlogs from './components/showBlogs.vue'
import addBlog from './components/addBlog.vue'
import singleBlog from './components/singleBlog.vue'

//we'll export an array
//each element in this array will reperesent a different route

export default [
    //path is what comes after the route domain name
    //e.g. www.mywebsiteisawesome.com/thepath
    //the path comes after the slash. son in this e.g. it's "thepath"
    {path: '/', component: showBlogs},
    {path: '/add', component: addBlog},
    {path: '/blog/:id', component: singleBlog}
]

//after this we need to export the routes and register them in the const router so
//that they could be used
//we can use them after the registration