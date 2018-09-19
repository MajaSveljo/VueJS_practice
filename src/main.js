import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'

Vue.config.productionTip = false

Vue.use(VueResource);

//creating directives here registers them globaly

//custom directive
Vue.directive('rainbow', {
  //bind is a lifecycle hook that is fired when the directive is bound to the element
  //or "as soon as it gets hooked up"
  bind(el, binding, vnode){
    //el refers to the element itself, HTML element
    //binding refers to information about the connection if we pass it in a value for an example
    //vnode refears to the virtual node on the DOM
    el.style.color = "#" + Math.random().toString().slice(2,8)
  }
})

Vue.directive('theme', {
  bind(el, binding, vnode){
    //if(binding) gives us information about the directive
    if(binding.value == 'wide'){
      //el refers to the element that we attached it to.
      //in this case the div #show-blogs)
      el.style.maxWidth = "1200px"
    } else if (binding.value == 'narrow'){
      el.style.maxWidth = "560px";
    }
    if (binding.arg == 'column'){
      el.style.background == "#ddd";
      el.style.padding == "20px";
    }
    //.arg se odnosi na argumente direktive.
    //argumenti su sve ono posle ":" npr v-on:click - click je arg
  }
})

new Vue({
  render: h => h(App)
}).$mount('#app')
