
<template>
<div class="flex_wrap" style="height:100vh">
    <div class="login register">
        <h4>SignUp</h4>        
        <div class="form-group">
          <input type="text" class="form-control formInput" v-model="SignUpName" />
          <label for="name" class="formLabel">Name</label>
        </div>
        <div class="form-group">
          <input type="text" class="form-control formInput" v-model="SignUpEmail" />
          <label for="name" class="formLabel">Email</label>
        </div>
        <div class="form-group">
          <input type="password" class="form-control formInput" v-model="SignUpPassword"/>
          <label for="name" class="formLabel">Password</label>
        </div>
        <div class="formSubmit">
          <button v-on:click="signUp" class="btn btn-info float-end">Sign Up</button>
          <span>Click here to <router-link to="/login">Login</router-link></span>
        </div>
    </div>
</div>
</template>
<script>
import axios from "axios";
export default {
    name:'SignUp',
    data() {
      return {
        SignUpName: "",
        SignUpEmail: "",
        SignUpPassword: "",        
      }
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
