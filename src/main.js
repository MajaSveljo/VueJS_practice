import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'

//routing dynamically shows different components depending on
//which URL the user goeas to
import VueRouter from 'vue-router'
//first before registering the routes we need to import them
import Routes from './routes'
//instead of "Routes, any kid of name could have been given"

Vue.config.productionTip = false

Vue.use(VueResource);
Vue.use(VueRouter);

//creating a new instance of the vue-router se that we cound use it 
//inside parentheses we are passing an object that is going to take our routes,
//we are registering our routes in it

//we're going to create a new file for them to keep the routes organized
const router = new VueRouter({
  //routes is a property here
  routes: Routes,
  //by saying this we said routes = Routes
  //and we have registered them
  //only one more step, put it in the Vue instance
  mode: 'history'
  //two modes history and hash. hash is the default mode behaviour.
  //hash leaves # in the links. when we set it to history the "#" disapperas
});

//filters

Vue.filter('snippet', function(value){
  return value.slice(0,100) + '...';
})

 Vue.directive('theme', {
  bind(el, binding, vnode){
    if(binding.value == 'wide'){
      el.style.maxWidth = "1200px"
    } else if (binding.value == 'narrow'){
      el.style.maxWidth = "560px";
    }
    if (binding.arg == 'column'){
      el.style.background == "#ddd";
      el.style.padding == "20px";
    }
  }
})
new Vue({
  render: h => h(App),
  router: router
  //meaning router = router from the const router

  //now we need to say where do we want our componentss to go
  //that is done in the App.vue
}).$mount('#app')
