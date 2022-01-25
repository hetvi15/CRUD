<template>
    <div class="circular">
        <br><br>
        <h3>EMPLOYEE DETAILS</h3>
        <br>
        <div class="container">
        <div class="images">
        <router-link to="/Create">
        <img src="../assets/create.png" alt="Create_Logo"><br>
        ADD A NEW EMPLOYEE
        </router-link>
        </div>
        <div class="images">
        <router-link to="/Update">
        <img src="../assets/update.png" alt="Create_Logo"><br>
         UPDATE AN EMPLOYEE DETAIL
        </router-link>
        </div>
        </div>
        <div class="container">
        <div class="images">
        <router-link to="/Read">
        <img src="../assets/read.png" alt="Create_Logo"><br>
        READ ALL EMPLOYEE DATA
        </router-link>
        </div>
        <div class="images">
        <router-link to="/Delete">
        <img src="../assets/delete.png" alt="Create_Logo"><br>
        DELETE AN EMPLOYEE
        </router-link>
        </div>
        </div>
    </div>

</template>

<style scoped>

h3{
      font-weight: 500;
      font-size: x-large;
      text-decoration: underline;
      color: dodgerblue;
  }
.container{
    display:inline-flex;
    margin-right: 5%;
}
.images{
    padding-right: 25%;
}

img{
    width:150px;
}

</style>
