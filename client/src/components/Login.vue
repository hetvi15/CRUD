<template>
<form @submit.prevent="getLogin">
    <div>
        <img src="../assets/crud_app.png" alt="Logo"><br>
        <div class="form-control" :class="{invalid:loginform.usernameValidity === 'invalid'}">
            <input type="text" placeholder="Enter Username" v-model="loginform.username" required @blur="validateEmail"><br>
        </div>
        <p v-if="loginform.usernameValidity==='invalid'">Please enter a valid email</p>
        <br><br>

        <div class="form-control" :class="{invalid:loginform.passwordValidity === 'invalid'}">
            <input type="password" placeholder="Enter Password" v-model="loginform.password" required @blur="validatePassword"><br>
        </div>
        <p v-if="loginform.passwordValidity==='invalid'">A valid password should contain atleast eight characters,minimum one letter and one number</p>
        <br><br>
        <br>
        <button v-on:click="getLogin" style="color:whitesmoke" id="sub"><b>Login</b></button>
        <br><br>
        <router-link to="/SignUp">
            Not a Member? Sign Up
        </router-link>
    </div>
</form>
</template>

<script>
import validator from 'validator'
export default {
  name: 'Login',
  data () {
    return {
      loginform: {
        username: '',
        password: '',
        usernameValidity: '',
        passwordValidity: ''
      }

    }
  },
  methods: {
    getLogin () {
      console.log(this.loginform.username + this.loginform.password +
                this.loginform.usernameValidity +
                this.loginform.passwordValidity)
    },
    validateEmail () {
      // eslint-disable-next-line no-useless-escape
      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.loginform.username)) {
        this.loginform.usernameValidity = 'valid'
      } else {
        this.loginform.usernameValidity = 'invalid'
      }
      console.log(validator.isEmail(this.loginform.username))
    },
    validatePassword () {
      // eslint-disable-next-line no-useless-escape
      if (/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(this.loginform.password)) {
        this.loginform.passwordValidity = 'valid'
      } else {
        this.loginform.passwordValidity = 'invalid'
      }
    },
    goToSignUp () {
      console.log('to SIgnup page')
      this.$router.push('/SignUp.vue').catch(error => {
        // eslint-disable-next-line eqeqeq
        if (error.name != 'NavigationDuplicated') {
          throw error
        }
      })
    }
  }
}
</script>
