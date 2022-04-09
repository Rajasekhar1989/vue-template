<template>
  <div>
    <div v-if="this.username==''">
      <Login/>
    </div>
    <div v-if="this.username!=''">
      <Home/>
    </div>
  </div>
</template>
<script>
import Home from './views/Home.vue'
import Login from './components/Login.vue'

export default {
  name:'App',
  data(){
    return{
      username:""
    }
  },
  mounted(){
    this.username = (localStorage.getItem('username') != null) ? localStorage.getItem('username') : "";
  },
  components:{
    Home,Login,
  }
}
</script>
