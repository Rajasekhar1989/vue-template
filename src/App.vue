<template>
  <div class="main">
    <div v-if="this.username==''">
      <div class="navLink text-center">
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
<style scoped>
.main_header{
  /* color: rgb(248, 68, 96) !important; */
  color: #0b1665 !important;
  font-size: 25px;
}
</style>
