<template>
<div class="container">
    <br>
    <br>
    <h3> Enter Employee Details </h3>
    <form @submit.prevent="postData" method="POST">

        <div>
            <div class="form-control" :class="{invalid:nameValidity === 'invalid'}">
                <input type="text" placeholder="Enter Employee Name" v-model="name" required @input="validateName"><br>
                   <p v-if="nameValidity==='invalid'">Please enter a valid name</p>
            </div>
            <br>
            <div class="form-control" :class="{invalid:emailValidity === 'invalid'}">
                <input type="text" placeholder="Enter Employee Email" v-model="email" @input="validateEmail" required><br>
                <p v-if="emailValidity==='invalid'">Please enter a valid email</p>
            </div>
            <br>
            <div class="form-control" :class="{invalid:mobileValidity === 'invalid'}">
                <input type="number" placeholder="Enter Employee Mobile Number" v-model="mobile" @input="validateMobile" required><br>
                <p v-if="mobileValidity==='invalid'">Please enter a valid Mobile No</p>
            </div>
            <br>
            <div class="form-control" :class="{invalid:dateValidity === 'invalid'}">
                <input placeholder="Enter Joining Date" type="text" onfocus="(this.type='date')" id="date" v-model="date" required @input="validateDate">
            </div>
            <p v-if="dateValidity==='invalid'">Please enter a valid date</p>
            <br>
            <div>
                 <input type="number" placeholder="Enter Salary" v-model="salary" >
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
      nameValidity: '',
      emailValidity: '',
      mobileValidity: '',
      dateValidity: '',
      salary: ''
    }
  },
  computed: {
    isDisabled () {
      if (this.emailValidity && this.nameValidity && this.dateValidity && this.mobileValidity === 'valid') {
        return false
      } else {
        return true
      }
    }
  },
  methods: {
    validateName () {
      if (/[a-zA-Z]+$/.test(this.name)) {
        this.nameValidity = 'valid'
      } else {
        this.nameValidity = 'invalid'
      }
    },
    validateEmail () {
      // eslint-disable-next-line no-useless-escape
      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.email)) {
        this.emailValidity = 'valid'
      } else {
        this.emailValidity = 'invalid'
      }
    },
    validateMobile () {
      if (/^(\+\d{1,3}[- ]?)?\d{10}$/.test(this.mobile)) {
        this.mobileValidity = 'valid'
      } else {
        this.mobileValidity = 'invalid'
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
