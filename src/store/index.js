import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    showFilter: false,
    hide_tree: false,
    username:'',
    loginUser:true,
  },
  mounted(){
    if(this.state.loginUser==false){
      this.$router.push("/sign-up");
    }
    else {
      this.$router.push("/login");
    }
  }
}
)
