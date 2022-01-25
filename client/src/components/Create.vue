<template>
<div class="container">
    <br>
    <br>
    <h3> Enter Your Task </h3>
    <form @submit.prevent="postData" method="POST">

        <div>
            <div>
                <input type="text" placeholder="Enter Employee Name" v-model="name" required><br>
            </div>
            <br>
            <div>
                <input type="text" placeholder="Enter Employee Email" v-model="email" required><br>
            </div>
            <br>
            <div>
                <input type="number" placeholder="Enter Employee Mobile Number" v-model="mobile" required><br>
            </div>
            <br>
            <div class="form-control" :class="{invalid:dateValidity === 'invalid'}">
                <input placeholder="Enter Joining Date" type="text" onfocus="(this.type='date')" id="date" v-model="date" required @blur="validateDate">
            </div>
            <p v-if="dateValidity==='invalid'">Please enter a valid date</p>
            <br>
            <div>
                 <input placeholder="Enter Salary" type="number"  v-model="salary" >
            </div>
            <div>
                  <button type="submit" id="sub"  :class="(isDisabled) ? '' : 'selected'" :disabled="isDisabled" >ADD</button>
            </div>
            <br><br><br>
        </div>
    </form>
</div>
</template>

<script>
import moment from 'moment'
import AuthenticationServices from '../services/AuthenticationService'
export default {
  data () {
    return {
      name: '',
      email: '',
      mobile: '',
      date: '',
      dateValidity: '',
      salary: ''
    }
  },
  computed: {
    isDisabled () {
      if (this.dateValidity === 'valid') {
        return false
      } else {
        return true
      }
    }
  },
  methods: {
    validateDate () {
      let dateMomentObject = moment(this.date, 'YYYY/MM/DD') // 1st argument - string, 2nd argument - format
      let dateObject = dateMomentObject.toDate()
      if (dateObject.getTime() > Date.now()) {
        this.dateValidity = 'invalid'
      } else {
        this.dateValidity = 'valid'
      }
    },
    async postData () {
      console.log(this.task + this.subject + this.description + this.date + this.time)
      try {
        const response = await AuthenticationServices.add({
          Name: this.name,
          Email: this.email,
          Mobile_no: this.mobile,
          Joining_date: this.date,
          Salary: this.salary
        })
        console.log(response)
        alert('Data added')
        this.$router.push('/Read')
      } catch (error) {
        this.error = error.response.data.error
        console.log(this.error)
        if (this.error === 'Email already in use') {
          this.error = 'invalid'
          alert('Oops.....\n Email Already Taken:Please Login with that Email or Register with new Credentials')
        }
      }
    }
  }
}
</script>
<style scoped>
.container{
    background-color: lightgrey;
}
</style>
