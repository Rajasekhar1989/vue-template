<template>
  <div class="row">    
    <div class="login col-lg-6">
      <h1>Login</h1>
      <input type="text" v-model="loginEmail" placeholder="Enter Email" />
      <input type="password" v-model="loginPassword" placeholder="Enter Password" />
      <button v-on:click="login">Login</button>
      <p>
        <router-link to="/signup">SignUp</router-link>
      </p>
    </div>
    <div class="register col-lg-6">
      <h1>SignUp</h1>
      <input type="text" v-model="SignUpName" placeholder="Enter Name" />
      <input type="text" v-model="SignUpEmail" placeholder="Enter Email" />
      <input type="password" v-model="SignUpPassword" placeholder="Enter Password" />
      <button v-on:click="signUp">Sign Up</button>
      <p><router-link to="/login">Login</router-link></p>
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
        loginEmail: "a",
        loginPassword: "a",
        SignUpName: "",
        SignUpEmail: "",
        SignUpPassword: "",        
      };
    }
  },
  methods: {
    async login() {
      {
        if (this.loginEmail !== "" && this.loginPassword !== "") {
          let result = await axios.get("http://localhost:3000/users?email=" +this.loginEmail +"&password=" +this.loginPassword);

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
};
</script>
