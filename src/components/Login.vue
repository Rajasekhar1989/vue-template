<template>
  <div class="user_log">
    <div class="main-wrap">
      <div class="row h-100" >
      <aside class="col-sm-6 login clearfix">
        <div class="login-inner">
          <figure>
              <img :src="$store.state.themeLogo" alt="">
          </figure>
          <h5>Login</h5>
          <div class="form-group">        
            <label for="name" class="formLabel">Name</label>
            <input type="text" class="form-control formInput" />
          </div>
          <div class="form-group">        
            <label for="name" class="formLabel">Email</label>
            <input type="text" class="form-control formInput" v-model="loginEmail" />
          </div>
          <div class="form-group">        
            <label for="name" class="formLabel">Password</label>
            <input type="password" class="form-control formInput" v-model="loginPassword" />
          </div>
          <div class="form-group formSubmit d-flex justify-content-between align-items-center">        
            <span>New User ? <router-link to="/sign-up">Create an Account</router-link></span>
            <button v-on:click="login" class="btn btn-primary"><box-icon name='log-in' type="regular" ></box-icon> Login</button>
          </div>      
        </div>
      </aside>  
      <aside class="login-info col-sm-6">
        <div class="login-info-inner">
          <h3>Welcome to <span>Dashboard Theme </span></h3>
          <p>Login To Access Dashboard</p>

        </div>
      </aside>
      </div>

    </div>
  </div>
</template>
<script>
import axios from "axios";
import $ from 'jquery';
export default {
  name: "Login",
  data() {
    {
      return {
        isLogin:true,
        loginEmail: "",
        loginPassword: "",    
        themeLogo:require("../assets/images/slack.png")
      };
    }
  },
  mounted(){
    $('input, .form-group').focus(function(){
        $(this).parents('.form-group').addClass('focused');
      });
  
      $('input').blur(function(){
        var inputValue = $(this).val();
        if ( inputValue == "" ) {
          $(this).removeClass('filled');
          $(this).parents('.form-group').removeClass('focused');  
        } else {
          $(this).addClass('filled');
        }
      })
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
