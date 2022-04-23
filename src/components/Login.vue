<template>
  <div class="row">    
    <div class="login col-lg-6">
      <h1>Login</h1>
      <input type="text" v-model="loginEmail" placeholder="Enter Email" />
      <input type="password" v-model="loginPassword" placeholder="Enter Password" />
      <button v-on:click="login">Login</button>
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
        loginEmail: "a",
        loginPassword: "a",    
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
