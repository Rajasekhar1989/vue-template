
<template>
<div class="user_log">
    <div class="main-wrap">
      <div class="row h-100" >
      <aside class="col-sm-6 login clearfix">
        <div class="login-inner">
          <figure>
              <img :src="$store.state.themeLogo" alt="" />
          </figure>
        <h5>SignUp</h5>
        <div class="form-group">
          <label for="name" class="formLabel">Name</label>
          <input type="text" class="form-control formInput" v-model="SignUpName" />
        </div>
        <div class="form-group">          
          <label for="name" class="formLabel">Email</label>
          <input type="text" class="form-control formInput" v-model="SignUpEmail" />
        </div>
        <div class="form-group">          
          <label for="name" class="formLabel">Password</label>
          <input type="password" class="form-control formInput" v-model="SignUpPassword"/>
        </div>
        <div class="form-group formSubmit d-flex justify-content-between align-items-center">          
          <span>Already a user? <router-link to="/login">LOGIN</router-link></span>
          <button v-on:click="signUp" class="btn btn-primary"><box-icon name='log-out' ></box-icon> Sign Up</button>
        </div>
        </div>
      </aside>
      <aside class="login-info col-sm-6">
        <div class="login-info-inner">
          <h3>Welcome to <span>Dashboard Theme</span></h3>
          <p>Sign Up To Create Account</p>

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
    name:'SignUp',
    data() {
      return {
        SignUpName: "",
        SignUpEmail: "",
        SignUpPassword: "",        
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
    methods:{
    async signUp() {
        if (this.SignUpName !== "" && this.SignUpEmail !== "" && this.SignUpPassword !== "") {
            let result = await axios.post("http://localhost:3000/users", {
            SignUpName: this.SignUpName,
            SignUpEmail: this.SignUpEmail,
            SignUpPassword: this.SignUpPassword,
            });
            console.log(result);

            if (result.status == 201) {
            alert("SignUp Successfull");
            this.$router.push("/login");
            window.location.reload();
            }
        } else {
          alert("Field is Empty");
        }
    },
  },
}
</script>
