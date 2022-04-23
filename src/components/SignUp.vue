
<template>
    <div class="register col-lg-6"  >
        <h1>SignUp</h1>
        <input type="text" v-model="SignUpName" placeholder="Enter Name" />
        <input type="text" v-model="SignUpEmail" placeholder="Enter Email" />
        <input type="password" v-model="SignUpPassword" placeholder="Enter Password" />
        <button v-on:click="signUp">Sign Up</button>
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