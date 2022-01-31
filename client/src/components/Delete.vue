<template>
    <div>
        <form @submit.prevent="deleteData" method="POST">
          <div class="form-control" :class="{invalid:usernameValidity === 'invalid'}">
            <input type="text" placeholder="Enter Email Id to delete employee" v-model="username" @input="validateEmail"/>
            <p v-if="usernameValidity==='invalid'" id="errorEm">Please enter a valid email</p>
           </div>
            <button type="submit"  :class="(isDisabled) ? '' : 'selected'" :disabled="isDisabled" id="sub">DELETE</button>
           <button  id= "sub" @click="GotoHomePage">GO TO HOMEPAGE</button>
        </form>
    </div>
</template>
<script>
import AuthenticationServices from '../services/AuthenticationService'
export default{
  data () {
    return {
      error: '',
      array: [],
      username: '',
      usernameValidity: ''

    }
  },
  computed: {
    isDisabled () {
      if (this.usernameValidity === 'valid') {
        return false
      } else {
        return true
      }
    }
  },
  methods: {
    validateEmail () {
      // eslint-disable-next-line no-useless-escape
      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.username)) {
        this.usernameValidity = 'valid'
      } else {
        this.usernameValidity = 'invalid'
      }
    },
    async deleteData () {
      console.log('yeahhh')
      try {
        const response = await AuthenticationServices.delete({
          Email: this.username
        })
        console.log(response)
        console.log(response.data.message)
        alert('Record Deleted')
        this.$router.push('/Read')
        // this.error = 'valid'
        // this.array = response.data.Employee
        // this.$router.push('/HomePage')
      } catch (error) {
        this.error = error.response.data.error
        console.log(this.error)
        alert('Email ID not Found')
      }
    },
    GotoHomePage () {
      this.$router.push('/HomePage')
    }
  }

}

</script>
