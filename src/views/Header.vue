<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Vue Sample Template</a>
    <button
      class="toggleTree"
      v-bind:class="$store.state.hide_tree? 'hide_tree' : 'hide_tree_icon'"
      @click="$store.state.hide_tree = !$store.state.hide_tree" :aria-pressed="$store.state.hide_tree ? 'true' : 'false'"> 
        <div>
          <div v-if="$store.state.hide_tree"><box-icon name='chevrons-right'/></div>
          <div v-else><box-icon name='chevrons-left'/></div>
        </div>
      </button>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
      <ul class="navbar-nav mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="/dashboard">Home</a>
        </li>
        <li class="nav-item dropdown user_dropdown ">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            User
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><p class="text-center">Signed in as</p></li>
            <li><p class="text-center"><span>{{this.username}}</span></p></li>
            <li><hr class="dropdown-divider"></li>
            <li><input class="btn"  type="button" v-on:click="logout" value="Log Out"/></li>
          </ul>
        </li>
      </ul>      
    </div>
  </div>
</nav>
</template>
<script>
export default {
  name:'Header',
  data(){
    return{
      username:""
    }
  },
  mounted(){
    this.username=localStorage.getItem('username');
  },
  methods:{
    logout(){
      localStorage.clear();
      this.$router.push("/login");
      window.location.reload();
    }
  }
}
</script>