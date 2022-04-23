<template>
  <div>
    <div v-if="this.username==''">
      <div class="text-center">
        <router-link to="/login">Login</router-link> |
        <router-link to="/sign-up">SignUp</router-link>
      </div>
      <router-view/>
    </div>    
    <div v-if="this.username!=''">
      <Home/>
    </div>
  </div>
</template>
<script>
import Home from './views/Home.vue'

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
    Home
  }
}
</script>
