<template>
<div>
    <form @submit.prevent="postEmail" method="POST">
        <div class="form-control" :class="{invalid:emailValidity === 'invalid'}">
            <input type="text" placeholder="Enter Email ID of the Employee you want to Update" v-model="email" required @input="validateEmail"><br>
        </div>
        <p v-if="emailValidity==='invalid'">Please enter a valid email</p>
        <h3>ENTER NEW DETAILS</h3>
        <div>
            <div class="form-control" :class="{invalid:nameValidity === 'invalid'}">
                <input type="text" placeholder="Enter Employee Name" v-model="name" required @input="validateName"><br>
            </div>
            <p v-if="nameValidity==='invalid'">Please enter a valid Name</p>
            <br>
            <div class="form-control" :class="{invalid:emailNewValidity === 'invalid'}">
                <input type="text" placeholder="Enter Employee Email" v-model="emailNew" @input="validateEmailNew" required><br>
            </div>
            <p v-if="emailNewValidity==='invalid'">Please enter a valid email</p>
            <br>
            <div class="form-control" :class="{invalid:mobileValidity === 'invalid'}">
                <input type="number" placeholder="Enter Employee Mobile Number" v-model="mobile" required @input="validateMobile"><br>
            </div>
            <p v-if="mobileValidity==='invalid'">Please enter a valid Mobile Number</p>
            <br>
            <div class="form-control" :class="{invalid:dateValidity === 'invalid'}">
                <input placeholder="Enter Joining Date" type="text" onfocus="(this.type='date')" id="date" v-model="date" required @input="validateDate">
            </div>
            <p v-if="dateValidity==='invalid'">Please enter a valid date</p>
            <br>
            <div>
                <input placeholder="Enter Salary" type="number" v-model="salary">
            </div>
            <br>
        </div>
        <button type="submit"  :class="(isDisabled) ? '' : 'selected'" :disabled="isDisabled" id="sub"> Update </button>
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
      email: '',
      name: '',
      nameValidity: '',
      emailNew: '',
      emailNewValidity: '',
      emailValidity: '',
      Email: '',
      mobile: '',
      mobileValidity: '',
      date: '',
      dateValidity: '',
      salary: ''

    }
  },
  computed: {
    isDisabled () {
      if (this.emailValidity && this.nameValidity && this.emailNewValidity && this.mobileValidity && this.dateValidity === 'valid') {
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
    validateEmailNew () {
      // eslint-disable-next-line no-useless-escape
      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.emailNew)) {
        this.emailNewValidity = 'valid'
      } else {
        this.emailNewValidity = 'invalid'
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
    async postEmail () {
      console.log(this.Email)
      try {
        const response = await AuthenticationServices.update({
          email: this.email,
          Name: this.name,
          Email: this.emailNew,
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
