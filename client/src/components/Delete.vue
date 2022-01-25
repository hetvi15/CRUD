<template>
    <div>
        <form @submit.prevent="deleteData" method="POST">
            <input type="text" placeholder="Enter Email Id to delete employee" v-model="email"/>
            <button type="submit" id="sub">DELETE</button>
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
      email: ''

    }
  },
  methods: {
    async deleteData () {
      console.log('yeahhh')
      try {
        const response = await AuthenticationServices.delete({
          Email: this.email
        })
        console.log(response)
        alert('Data Deleted')
        this.$router.push('/Read')
        // this.error = 'valid'
        // this.array = response.data.Employee
        // this.$router.push('/HomePage')
      } catch (error) {
        this.error = error.response.data.error
        console.log(this.error)
        if (this.error === 'The login information was incorrect') {
          // alert('Invalid Email Id or Password')
          this.error = 'invalid'
        }
      }
    },
    GotoHomePage () {
      this.$router.push('/HomePage')
    }
  }

}

</script>
