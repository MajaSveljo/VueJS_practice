import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'

Vue.config.productionTip = false

Vue.use(VueResource);

//filters

//value refers to the data that the filter will be used on
// in this case that is blog.title
Vue.filter('to-uppercase', function(value){
  return value.toUpperCase();
})

Vue.filter('snippet', function(value){
  return value.slice(0,100) + '...';
})

new Vue({
  render: h => h(App)
}).$mount('#app')
