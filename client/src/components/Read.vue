<template>
    <div>
        <form @submit.prevent="getData" method="POST">
            <button type="submit" id="sub">READ ALL DATA</button>
               <table class="fl-table">
                   <center>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Mobile_no</th>
                    <th>Joining_date</th>
                    <th>Salary</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(user, index) in array" :key="index">
                    <td>{{index + 1}} </td>
                    <td>{{user.Name}}</td>
                    <td>{{user.Email}}</td>
                    <td>{{user.Mobile_no}}</td>
                    <td>{{user.Joining_date}}</td>
                    <td>{{user.Salary}}</td>
                </tr>
            </tbody>
            </center>
        </table>
      </form>
      <button  id= "sub" @click="GotoHomePage">GO TO HOMEPAGE</button>
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
    async getData () {
      console.log('yeahhh')
      try {
        const response = await AuthenticationServices.read()
        console.log(response.data.Employee)
        this.error = 'valid'
        this.array = response.data.Employee
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
