/* eslint-disable no-constant-condition */
<template>
<div>
    <h3> USER REGISTRATION </h3>
    <form @submit.prevent="postData" method="POST" >

        <div>
            <div class="form-control" :class="{invalid:loginform.nameValidity === 'invalid'}">
                <input type="text" placeholder="Enter Name" v-model="loginform.Name" id="name" required @input="validateName"><br>
            </div>
            <br>
            <p v-if="loginform.nameValidity==='invalid'">Please enter a valid name</p>
            <div class="form-control" :class="{invalid:loginform.usernameValidity === 'invalid'}">
                <input type="text" placeholder="Enter Username" id="username" v-model="loginform.Username" required @input="validateEmail"><br>
            </div>
            <p v-if="loginform.usernameValidity==='invalid'" id="errorEm">Please enter a valid email</p>
            <p v-if="error==='invalid'">Email already in use </p>
            <br>
            <div class="form-control" :class="{invalid:loginform.passwordValidity === 'invalid'}">
                <input type="password" placeholder="Enter Password" id="password" v-model="loginform.Password" required @input="validatePassword"><br>
            </div>
            <p v-if="loginform.passwordValidity==='invalid'">A valid password should contain atleast eight characters,minimum one letter and one number</p>
            <br>
            <div class="form-control" :class="{invalid:loginform.confirmPasswordValidity === 'invalid'}">
                <input type="password" placeholder="Confirm Password" id="confirm" v-model="loginform.confirmPassword" required @input="validateConfirm_Password"><br>
            </div>
            <p v-if="loginform.confirmPasswordValidity==='invalid'">Your Passwords don't match</p>
            <br>

            <div class="form-control" :class="{invalid:loginform.birthdateValidity === 'invalid'}">
              <input placeholder="Enter Your Birthdate"  type="text" onfocus="(this.type='date')" id="date" v-model="loginform.Birthdate" required @input="validateBirthdate">
            </div>
            <p v-if="loginform.birthdateValidity==='invalid'">Please enter a valid date</p>
            <br>
            <div class="form-control" :class="{invalid:loginform.ageValidity === 'invalid'}">
                <input type="number" placeholder="Enter Your Age" v-model="loginform.Age" id="age" required />
            </div>
            <p v-if="loginform.ageValidity==='invalid'">Please enter your real age</p>
            <br>
            <div id="radio">
                Select Your Gender
                <input type="radio" name="male" id="male" value="Male" v-model="loginform.Gender" checked>
                <label for="one">Male</label>

                <input type="radio" name="female" id="female" value="Female" v-model="loginform.gender">
                <label for="two">Female</label>

                <input type="radio" name="other" id="other" value="Other" v-model="loginform.gender">
                <label for="two">Other</label>

                <br>
                <br>
            </div><br><br>
            <div>
                <select v-model="loginform.Country"  id="country" required>
                    <option value="" disabled selected>Select Your Country</option>
                    <option value="Afghanistan">Afghanistan</option>
                    <option value="Albania">Albania</option>
                    <option value="Algeria">Algeria</option>
                    <option value="American Samoa">American Samoa</option>
                    <option value="Andorra">Andorra</option>
                    <option value="Angola">Angola</option>
                    <option value="Anguilla">Anguilla</option>
                    <option value="Antartica">Antarctica</option>
                    <option value="Antigua and Barbuda">Antigua and Barbuda</option>
                    <option value="Argentina">Argentina</option>
                    <option value="Armenia">Armenia</option>
                    <option value="Aruba">Aruba</option>
                    <option value="Australia">Australia</option>
                    <option value="Austria">Austria</option>
                    <option value="Azerbaijan">Azerbaijan</option>
                    <option value="Bahamas">Bahamas</option>
                    <option value="Bahrain">Bahrain</option>
                    <option value="Bangladesh">Bangladesh</option>
                    <option value="Barbados">Barbados</option>
                    <option value="Belarus">Belarus</option>
                    <option value="Belgium">Belgium</option>
                    <option value="Belize">Belize</option>
                    <option value="Benin">Benin</option>
                    <option value="Bermuda">Bermuda</option>
                    <option value="Bhutan">Bhutan</option>
                    <option value="Bolivia">Bolivia</option>
                    <option value="Bosnia and Herzegowina">Bosnia and Herzegowina</option>
                    <option value="Botswana">Botswana</option>
                    <option value="Bouvet Island">Bouvet Island</option>
                    <option value="Brazil">Brazil</option>
                    <option value="British Indian Ocean Territory">British Indian Ocean Territory</option>
                    <option value="Brunei Darussalam">Brunei Darussalam</option>
                    <option value="Bulgaria">Bulgaria</option>
                    <option value="Burkina Faso">Burkina Faso</option>
                    <option value="Burundi">Burundi</option>
                    <option value="Cambodia">Cambodia</option>
                    <option value="Cameroon">Cameroon</option>
                    <option value="Canada">Canada</option>
                    <option value="Cape Verde">Cape Verde</option>
                    <option value="Cayman Islands">Cayman Islands</option>
                    <option value="Central African Republic">Central African Republic</option>
                    <option value="Chad">Chad</option>
                    <option value="Chile">Chile</option>
                    <option value="China">China</option>
                    <option value="Christmas Island">Christmas Island</option>
                    <option value="Cocos Islands">Cocos (Keeling) Islands</option>
                    <option value="Colombia">Colombia</option>
                    <option value="Comoros">Comoros</option>
                    <option value="Congo">Congo</option>
                    <option value="Congo">Congo, the Democratic Republic of the</option>
                    <option value="Cook Islands">Cook Islands</option>
                    <option value="Costa Rica">Costa Rica</option>
                    <option value="Cota D'Ivoire">Cote d'Ivoire</option>
                    <option value="Croatia">Croatia (Hrvatska)</option>
                    <option value="Cuba">Cuba</option>
                    <option value="Cyprus">Cyprus</option>
                    <option value="Czech Republic">Czech Republic</option>
                    <option value="Denmark">Denmark</option>
                    <option value="Djibouti">Djibouti</option>
                    <option value="Dominica">Dominica</option>
                    <option value="Dominican Republic">Dominican Republic</option>
                    <option value="East Timor">East Timor</option>
                    <option value="Ecuador">Ecuador</option>
                    <option value="Egypt">Egypt</option>
                    <option value="El Salvador">El Salvador</option>
                    <option value="Equatorial Guinea">Equatorial Guinea</option>
                    <option value="Eritrea">Eritrea</option>
                    <option value="Estonia">Estonia</option>
                    <option value="Ethiopia">Ethiopia</option>
                    <option value="Falkland Islands">Falkland Islands (Malvinas)</option>
                    <option value="Faroe Islands">Faroe Islands</option>
                    <option value="Fiji">Fiji</option>
                    <option value="Finland">Finland</option>
                    <option value="France">France</option>
                    <option value="France Metropolitan">France, Metropolitan</option>
                    <option value="French Guiana">French Guiana</option>
                    <option value="French Polynesia">French Polynesia</option>
                    <option value="French Southern Territories">French Southern Territories</option>
                    <option value="Gabon">Gabon</option>
                    <option value="Gambia">Gambia</option>
                    <option value="Georgia">Georgia</option>
                    <option value="Germany">Germany</option>
                    <option value="Ghana">Ghana</option>
                    <option value="Gibraltar">Gibraltar</option>
                    <option value="Greece">Greece</option>
                    <option value="Greenland">Greenland</option>
                    <option value="Grenada">Grenada</option>
                    <option value="Guadeloupe">Guadeloupe</option>
                    <option value="Guam">Guam</option>
                    <option value="Guatemala">Guatemala</option>
                    <option value="Guinea">Guinea</option>
                    <option value="Guinea-Bissau">Guinea-Bissau</option>
                    <option value="Guyana">Guyana</option>
                    <option value="Haiti">Haiti</option>
                    <option value="Heard and McDonald Islands">Heard and Mc Donald Islands</option>
                    <option value="Holy See">Holy See (Vatican City State)</option>
                    <option value="Honduras">Honduras</option>
                    <option value="Hong Kong">Hong Kong</option>
                    <option value="Hungary">Hungary</option>
                    <option value="Iceland">Iceland</option>
                    <option value="India">India</option>
                    <option value="Indonesia">Indonesia</option>
                    <option value="Iran">Iran (Islamic Republic of)</option>
                    <option value="Iraq">Iraq</option>
                    <option value="Ireland">Ireland</option>
                    <option value="Israel">Israel</option>
                    <option value="Italy">Italy</option>
                    <option value="Jamaica">Jamaica</option>
                    <option value="Japan">Japan</option>
                    <option value="Jordan">Jordan</option>
                    <option value="Kazakhstan">Kazakhstan</option>
                    <option value="Kenya">Kenya</option>
                    <option value="Kiribati">Kiribati</option>
                    <option value="Democratic People's Republic of Korea">Korea, Democratic People's Republic of</option>
                    <option value="Korea">Korea, Republic of</option>
                    <option value="Kuwait">Kuwait</option>
                    <option value="Kyrgyzstan">Kyrgyzstan</option>
                    <option value="Lao">Lao People's Democratic Republic</option>
                    <option value="Latvia">Latvia</option>
                    <option value="Lebanon" selected>Lebanon</option>
                    <option value="Lesotho">Lesotho</option>
                    <option value="Liberia">Liberia</option>
                    <option value="Libyan Arab Jamahiriya">Libyan Arab Jamahiriya</option>
                    <option value="Liechtenstein">Liechtenstein</option>
                    <option value="Lithuania">Lithuania</option>
                    <option value="Luxembourg">Luxembourg</option>
                    <option value="Macau">Macau</option>
                    <option value="Macedonia">Macedonia, The Former Yugoslav Republic of</option>
                    <option value="Madagascar">Madagascar</option>
                    <option value="Malawi">Malawi</option>
                    <option value="Malaysia">Malaysia</option>
                    <option value="Maldives">Maldives</option>
                    <option value="Mali">Mali</option>
                    <option value="Malta">Malta</option>
                    <option value="Marshall Islands">Marshall Islands</option>
                    <option value="Martinique">Martinique</option>
                    <option value="Mauritania">Mauritania</option>
                    <option value="Mauritius">Mauritius</option>
                    <option value="Mayotte">Mayotte</option>
                    <option value="Mexico">Mexico</option>
                    <option value="Micronesia">Micronesia, Federated States of</option>
                    <option value="Moldova">Moldova, Republic of</option>
                    <option value="Monaco">Monaco</option>
                    <option value="Mongolia">Mongolia</option>
                    <option value="Montserrat">Montserrat</option>
                    <option value="Morocco">Morocco</option>
                    <option value="Mozambique">Mozambique</option>
                    <option value="Myanmar">Myanmar</option>
                    <option value="Namibia">Namibia</option>
                    <option value="Nauru">Nauru</option>
                    <option value="Nepal">Nepal</option>
                    <option value="Netherlands">Netherlands</option>
                    <option value="Netherlands Antilles">Netherlands Antilles</option>
                    <option value="New Caledonia">New Caledonia</option>
                    <option value="New Zealand">New Zealand</option>
                    <option value="Nicaragua">Nicaragua</option>
                    <option value="Niger">Niger</option>
                    <option value="Nigeria">Nigeria</option>
                    <option value="Niue">Niue</option>
                    <option value="Norfolk Island">Norfolk Island</option>
                    <option value="Northern Mariana Islands">Northern Mariana Islands</option>
                    <option value="Norway">Norway</option>
                    <option value="Oman">Oman</option>
                    <option value="Pakistan">Pakistan</option>
                    <option value="Palau">Palau</option>
                    <option value="Panama">Panama</option>
                    <option value="Papua New Guinea">Papua New Guinea</option>
                    <option value="Paraguay">Paraguay</option>
                    <option value="Peru">Peru</option>
                    <option value="Philippines">Philippines</option>
                    <option value="Pitcairn">Pitcairn</option>
                    <option value="Poland">Poland</option>
                    <option value="Portugal">Portugal</option>
                    <option value="Puerto Rico">Puerto Rico</option>
                    <option value="Qatar">Qatar</option>
                    <option value="Reunion">Reunion</option>
                    <option value="Romania">Romania</option>
                    <option value="Russia">Russian Federation</option>
                    <option value="Rwanda">Rwanda</option>
                    <option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
                    <option value="Saint LUCIA">Saint LUCIA</option>
                    <option value="Saint Vincent">Saint Vincent and the Grenadines</option>
                    <option value="Samoa">Samoa</option>
                    <option value="San Marino">San Marino</option>
                    <option value="Sao Tome and Principe">Sao Tome and Principe</option>
                    <option value="Saudi Arabia">Saudi Arabia</option>
                    <option value="Senegal">Senegal</option>
                    <option value="Seychelles">Seychelles</option>
                    <option value="Sierra">Sierra Leone</option>
                    <option value="Singapore">Singapore</option>
                    <option value="Slovakia">Slovakia (Slovak Republic)</option>
                    <option value="Slovenia">Slovenia</option>
                    <option value="Solomon Islands">Solomon Islands</option>
                    <option value="Somalia">Somalia</option>
                    <option value="South Africa">South Africa</option>
                    <option value="South Georgia">South Georgia and the South Sandwich Islands</option>
                    <option value="Span">Spain</option>
                    <option value="SriLanka">Sri Lanka</option>
                    <option value="St. Helena">St. Helena</option>
                    <option value="St. Pierre and Miguelon">St. Pierre and Miquelon</option>
                    <option value="Sudan">Sudan</option>
                    <option value="Suriname">Suriname</option>
                    <option value="Svalbard">Svalbard and Jan Mayen Islands</option>
                    <option value="Swaziland">Swaziland</option>
                    <option value="Sweden">Sweden</option>
                    <option value="Switzerland">Switzerland</option>
                    <option value="Syria">Syrian Arab Republic</option>
                    <option value="Taiwan">Taiwan, Province of China</option>
                    <option value="Tajikistan">Tajikistan</option>
                    <option value="Tanzania">Tanzania, United Republic of</option>
                    <option value="Thailand">Thailand</option>
                    <option value="Togo">Togo</option>
                    <option value="Tokelau">Tokelau</option>
                    <option value="Tonga">Tonga</option>
                    <option value="Trinidad and Tobago">Trinidad and Tobago</option>
                    <option value="Tunisia">Tunisia</option>
                    <option value="Turkey">Turkey</option>
                    <option value="Turkmenistan">Turkmenistan</option>
                    <option value="Turks and Caicos">Turks and Caicos Islands</option>
                    <option value="Tuvalu">Tuvalu</option>
                    <option value="Uganda">Uganda</option>
                    <option value="Ukraine">Ukraine</option>
                    <option value="United Arab Emirates">United Arab Emirates</option>
                    <option value="United Kingdom">United Kingdom</option>
                    <option value="United States">United States</option>
                    <option value="United States Minor Outlying Islands">United States Minor Outlying Islands</option>
                    <option value="Uruguay">Uruguay</option>
                    <option value="Uzbekistan">Uzbekistan</option>
                    <option value="Vanuatu">Vanuatu</option>
                    <option value="Venezuela">Venezuela</option>
                    <option value="Vietnam">Viet Nam</option>
                    <option value="Virgin Islands (British)">Virgin Islands (British)</option>
                    <option value="Virgin Islands (U.S)">Virgin Islands (U.S.)</option>
                    <option value="Wallis and Futana Islands">Wallis and Futuna Islands</option>
                    <option value="Western Sahara">Western Sahara</option>
                    <option value="Yemen">Yemen</option>
                    <option value="Serbia">Serbia</option>
                    <option value="Zambia">Zambia</option>
                    <option value="Zimbabwe">Zimbabwe</option>
                </select>
            </div>
           <button type="submit" id="sub" :class="(isDisabled) ? '' : 'selected'" :disabled="isDisabled">REGISTER</button>
            <br><br>
            <router-link to="/Login">
                Already have an account ? Login
            </router-link>
        </div>
    </form>
</div>
</template>

<script>
import moment from 'moment'
import AuthenticationServices from '../services/AuthenticationService'
// import AuthenticationController from './server/controllers/AuthenticationController'
export default {
  name: 'Login',
  data () {
    return {
      error: '',
      loginform: {
        Name: '',
        nameValidity: '',
        Username: '',
        usernameValidity: '',
        Password: '',
        passwordValidity: '',
        confirmPassword: '',
        confirmPasswordValidity: '',
        Birthdate: '',
        birthdateValidity: '',
        Age: '',
        ageValidity: '',
        val2: '',
        Country: '',
        Gender: 'Male'
      }
    }
  },
  computed: {
    isDisabled () {
      console.log(this.loginform.nameValidity)
      console.log(this.loginform.usernameValidity)
      console.log(this.loginform.passwordValidity)
      console.log(this.loginform.confirmPasswordValidity)
      console.log(this.loginform.birthdateValidity)
      if (this.loginform.nameValidity && this.loginform.usernameValidity && this.loginform.passwordValidity && this.loginform.confirmPasswordValidity && this.loginform.birthdateValidity === 'valid') {
        return false
      } else {
        return true
      }
    }

  },
  methods: {

    validateName () {
      if (/[a-zA-Z]+$/.test(this.loginform.Name)) {
        this.loginform.nameValidity = 'valid'
      } else {
        this.loginform.nameValidity = 'invalid'
      }
    },
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
    validateConfirm_Password () {
      if (this.loginform.Password !== this.loginform.confirmPassword) {
        this.loginform.confirmPasswordValidity = 'invalid'
      } else {
        this.loginform.confirmPasswordValidity = 'valid'
      }
    },
    validateAge () {
      // eslint-disable-next-line no-useless-escape
      if (/^(00[1-9])|(0[1-9]\d)|(1[0-4]\d)|(150)$/.test(this.loginform.Age)) {
        this.loginform.ageValidity = 'invalid'
      } else {
        this.loginform.ageValidity = 'valid'
      }
    },

    validateBirthdate () {
      let dateMomentObject = moment(this.loginform.Birthdate, 'YYYY/MM/DD') // 1st argument - string, 2nd argument - format
      let dateObject = dateMomentObject.toDate()
      if (dateObject.getTime() > Date.now()) {
        this.loginform.birthdateValidity = 'invalid'
      } else {
        this.loginform.birthdateValidity = 'valid'
      }
    },

    async postData () {
      try {
        const response = await AuthenticationServices.register({
          Name: this.loginform.Name,
          Username: this.loginform.Username,
          Password: this.loginform.Password,
          Birthdate: this.loginform.Birthdate,
          Age: this.loginform.Age,
          Gender: this.loginform.Gender,
          Country: this.loginform.Country
        })
        console.log(response)
        alert('Adding You...Please Login to Continue')
        this.$router.push('/')
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
