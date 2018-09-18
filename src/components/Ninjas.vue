<template>
  <div id="ninjas">
    <ul>
        <li v-for="ninja in ninjas" v-on:click="ninja.show = !ninja.show">
            <h2>{{ ninja.name }}</h2>
            <h3 v-show="ninja.show">{{ninja.specialty}}</h3>
        </li>
    </ul>
    <button v-on:click="deleteNinja">Delete Ninja</button>
  </div>
</template>

<script>



export default {
  props: {
      ninjas: {
          type: Array,
          required: true
      }
  },
  components: {
    
  },
  data() {
    return {
        
    }
  },
  methods: {
      deleteNinja: function() {
          this.ninjas.pop();
      }
  },
  // lifecycle hooks

  beforeCreate(){
      alert('beforeCreate');
  },

  //created is good for fetchig data from database
  //mounted is also good for that, but created should be better
  created(){
      alert('created');
  },
  beforeMount(){
      alert('beforeMount');
  },

  //mounted is a good place for manipulating the DOM once it has been mounted
  mounted(){
      alert('mounted');
  },

  //if Vue detects a change in this component (exp. in data)
  //it will run this hook - before the change is updated in the DOM
  beforeUpdate(){
      alert('beforeUpdate');
  },

  //updated reacurs after the DOM has been updated and is being re-rendered
  //that means the update can be acessed in the DOM and that updated is good for manipulating
  //updated DOM
  updated(){
      alert('updated');
  }
}
</script>

<style scoped>

#ninjas{
    width: 100%;
    max-width: 1200px;
    margin: 40px auto;
    padding: 0 20px;
    box-sizing: border-box;
}

ul{
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    padding: 0;
}

li{
    flex-grow: 1;
    flex-basis: 300px;
    text-align: center;
    padding: 30px;
    border: 1px solid #222;
    margin: 10px;
}

</style>
