<template>
<form @submit.prevent="getLogin" method="POST">
    <div>
        <img src="../assets/crud_app.png" alt="Logo"><br>
        <p v-if="error==='invalid'" id="error">Incorrect Credentials :( Please Sign Up or Login Again</p>
        <div class="form-control" :class="{invalid:loginform.usernameValidity === 'invalid'}">
            <input type="text" placeholder="Enter Username" v-model="loginform.Username" required @blur="validateEmail"><br>
        </div>
        <p v-if="loginform.usernameValidity==='invalid'" class="errorEmail">Please enter a valid email</p>
        <br><br>

        <div class="form-control" :class="{invalid:loginform.passwordValidity === 'invalid'}">
            <input type="password" placeholder="Enter Password" v-model="loginform.Password" required @blur="validatePassword"><br>
        </div>
        <p v-if="loginform.passwordValidity==='invalid'">A valid password should contain atleast eight characters,minimum one letter and one number</p>
        <br><br>
        <br>
        <button type="submit" id="sub" :class="(isDisabled) ? '' : 'selected'" :disabled="isDisabled">LOGIN</button>
        <br><br>
        <router-link to="/SignUp">
            Not a Member? Sign Up
        </router-link>
    </div>
</form>
</template>

<script>
import AuthenticationServices from '../services/AuthenticationService'
export default {
  name: 'Login',
  data () {
    return {
      error: '',
      loginform: {
        Username: '',
        Password: '',
        usernameValidity: '',
        passwordValidity: ''
      }
    }
  },
  computed: {
    isDisabled () {
      if (this.loginform.usernameValidity === 'valid' && this.loginform.passwordValidity === 'valid') {
        return false
      } else {
        return true
      }
    }
  },
  methods: {
    validateEmail () {
      // eslint-disable-next-line no-useless-escape
      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.loginform.Username)) {
        this.loginform.usernameValidity = 'valid'
      } else {
        this.loginform.usernameValidity = 'invalid'
      }
    },
    validatePassword () {
      // eslint-disable-next-line no-useless-escape
      if (/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(this.loginform.Password)) {
        this.loginform.passwordValidity = 'valid'
      } else {
        this.loginform.passwordValidity = 'invalid'
      }
    },
    async getLogin () {
      console.log('here')
      try {
        const response = await AuthenticationServices.login({
          Username: this.loginform.Username,
          Password: this.loginform.Password
        })
        console.log(response)
        this.$router.push('/HomePage')
      } catch (error) {
        this.error = error.response.data.error
        console.log(this.error)
        if (this.error === 'The login information was incorrect') {
          // alert('Invalid Email Id or Password')
          this.error = 'invalid'
        }
      }
    }
  }
}
</script>
