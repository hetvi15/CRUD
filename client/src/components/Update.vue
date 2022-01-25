<template>
<div>
    <form @submit.prevent="postEmail" method="POST">
        <div class="form-control" :class="{invalid:emailValidity === 'invalid'}">
            <input type="text" placeholder="Enter Email ID of the Employee you want to Update" v-model="email" required @blur="validateEmail"><br>
        </div>
        <p v-if="emailValidity==='invalid'">Please enter a valid email</p>
        <h3>ENTER NEW DETAILS</h3>
        <div>
            <div>
                <input type="text" placeholder="Enter Employee Name" v-model="name" required><br>
            </div>
            <br>
            <div>
                <input type="text" placeholder="Enter Employee Email" v-model="email_new" required><br>
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
                <input placeholder="Enter Salary" type="number" v-model="salary">
            </div>
            <br>
        </div>
        <button type="submit" id="sub"> Update </button>
    </form>
</div>
</template>

<script>
import moment from 'moment'
import AuthenticationServices from '../services/AuthenticationService'
export default {

  data () {
    return {
      error: '',
      name: '',
      email_new: '',
      emailValidity: '',
      Email: '',
      mobile: '',
      date: '',
      dateValidity: '',
      salary: ''

    }
  },
  computed: {
    isDisabled () {
      if (this.emailValidity === 'valid') {
        return false
      } else {
        return true
      }
    }

  },
  methods: {

    validateEmail () {
      // eslint-disable-next-line no-useless-escape
      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.email)) {
        this.emailValidity = 'valid'
      } else {
        this.emailValidity = 'invalid'
      }
    },
    validateDate () {
      let dateMomentObject = moment(this.date, 'YYYY/MM/DD') // 1st argument - string, 2nd argument - format
      let dateObject = dateMomentObject.toDate()
      if (dateObject.getTime() > Date.now()) {
        this.dateValidity = 'invalid'
      } else {
        this.dateValidity = 'valid'
      }
    },
    async postEmail () {
      console.log(this.Email)
      try {
        const response = await AuthenticationServices.update({
          email: this.email,
          Name: this.name,
          Email: this.email_new,
          Mobile_no: this.mobile,
          Joining_date: this.date,
          Salary: this.salary

        })
        console.log(response)
        alert('Data Updated')
        this.$router.push('/Read')
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>
