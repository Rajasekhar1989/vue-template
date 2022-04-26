<template>  
  <div class="flex_wrap" style="height:100vh">
    <div class="login clearfix">
      <figure>
        <img src="https://i.postimg.cc/MHKKtKgy/a.png" alt="">
      </figure>
      <h4>Login to Your Account</h4>      
      <!-- <div class="form-group">
        <input type="text" class="form-control formInput"  />
        <label for="name" class="formLabel">Name</label>
      </div> -->
      <div class="form-group">
        <input type="text" class="form-control formInput" v-model="loginEmail" />
        <label for="name" class="formLabel">Email</label>
      </div>
      <div class="form-group">
        <input type="password" class="form-control formInput" v-model="loginPassword" />
        <label for="name" class="formLabel">Password</label>
      </div>
      <div class="formSubmit">
        <button v-on:click="login" class="btn btn-info float-end">Login</button>
        <span>New User ? <router-link to="/sign-up">Create an Account</router-link></span>
      </div>      
    </div>  
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "Login",
  data() {
    {
      return {
        isLogin:true,
        loginEmail: "",
        loginPassword: "",    
        //userIcon:require("../assets/images/user.png")
      };
    }
  },
  methods: {
    async login() {
      {
        if (this.loginEmail !== "" && this.loginPassword !== "") {
          let result = await axios.get("http://localhost:3000/users?SignUpEmail=" +this.loginEmail +"&SignUpPassword=" +this.loginPassword);

          if (result.status == 200 && result.data.length > 0) {
            localStorage.setItem("username",this.loginEmail);
            this.$router.push("/dashboard");
            window.location.reload();
          } else {
            alert("Invalid User Details");
          }
        } else {
          alert("Field is Empty");
        }
      }
    },
    
  },
};
</script>
