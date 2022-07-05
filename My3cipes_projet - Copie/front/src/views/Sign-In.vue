<template>
<head>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
</head>
<div id="overall">
  <div id="all">
  <Form @submit="handleRegister" :validation-schema="schema" id="questionnaire">
    <img id = "logo" class="flip-2-hor-top-1" src="..\assets\logo.png">
    <div class="form-group">
      <Field type="email" name="email" class="form-control" placeholder="Enter email"/>
    </div>
    <div class="form-group">
      <Field name="password" type=password class="form-control" placeholder="Password"/>
    </div>
    <button  type="btn" class="btn btn-light" id="signin" :disabled="loading">
      <span v-show="loading" class="spinner-border spinner-border-sm"></span>Sign up !</button>
      <div class="form-group">
          <div v-if="message" class="alert alert-danger" role="alert">
            {{ message }}
          </div>
    </div>
  </Form>
  </div>
</div>
</template>

<script>
import UserDataService from "../services/UserDataService";
import { Form, Field} from "vee-validate";
import * as yup from "yup";


export default {
  name:"Sign-in",
  components: {
    Form,
    Field,
  },
  data() {
    const schema = yup.object().shape({
      email: yup
        .string()
        .required("Email is required!")
        .email("Email is invalid!")
        .max(50, "Must be maximum 50 characters!"),
      password: yup
        .string()
        .required("Password is required!")
        .min(0, "Must be at least 6 characters!")
        .max(40, "Must be maximum 40 characters!"),
    });
      return {
      successful: false,
      loading: false,
      message: "",
      schema,
    };
    },
    computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
    },
    mounted() {
    if (this.loggedIn) {
      this.$router.push({path : "/home"});
    }
    this.setColor()
  },
  methods : {
    handleRegister(user) {
      this.message = "";
      this.successful = false;
      this.loading = true;

      this.$store.dispatch("auth/register", user).then(
        (data) => {
          this.message = data.message;
          this.successful = true;
          this.loading = false;
          this.$router.push({path : "/login"});
        },
        (error) => {
          console.log("pas cool")
          this.message =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
          this.successful = false;
          this.loading = false;
        }
      );
    },
    setColor() {
    let signin = document.getElementById('signin');

    var x = 0
    var y = 0
    var colors = [["#4f8432","#63b800","#e3ffe8","#63e6ff","#043888"],
    ['#84A59D','#F6BD60','#F5CAC3','#F7EDE2','#F28482'],
    ['#FF1B1C','#FFFFFC','#BEB7A4','#FF7F11','#CBE896'],
    ['#D4A373','#E9EDC9','#FEFAE0','#FAEDCD','#CCD5AE'],
    ['#264653','#2A9D8F','#E9C46A','#F4A261','#E76F51'],
    ['#003049','#D62828','#F77F00','#FCBF49','#EAE2B7']];
    var col = colors[Math.floor(Math.random() * colors.length)];
    signin.style.color = col[0]

    for(x = 1; x < 30; x++) {
      for(y = 1; y < 30 ;y++)  {

        var c = document.createElement('div');
        c.className = "circle";
        var ctop = (-50) + ((y-1) * 100);
        var cleft = (-50) + ((x-1) * 100);
        c.style.marginTop = ctop.toString() + "px";
        c.style.marginLeft = cleft.toString() +"px";

        c.style.background = col[Math.floor(Math.random() * col.length)];
        c.style.opacity = "0.6";
        c.style.zIndex = "0";
        document.getElementById('overall').appendChild(c);
      }
    }
    },
    saveUser() {
      var data = {
        email: this.user.email,
        password: this.user.password
      };
      console.log("data :",data)
      UserDataService.create(data)
        .then(response => {
          this.user.id = response.data.id;
          console.log(response.data);
          this.submitted = true;
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
};
</script>

<style scoped>
  body,html{
    height:100%;
    padding:0;
    margin:0;
  }
  #overall{
    position:fixed;
    left:0;
    width:100%;
    height:100%;
    display:flex;
    justify-content: center;
    align-content: center;
  }
  #all{
    position:relative;
    z-index:2;
    margin:auto;
    width:50%;
    height:100%;
    justify-content: center;
  }
  #questionnaire{
    position:relative;
    margin:auto;
    margin-top:20%;
    display:flex;
    align-items: center;
    flex-direction: column;
    width:80%;
  }
  .circle {
    position:fixed;
    top:0;
    left:0;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    z-index: 1;
  }
  #logo{
    margin-bottom: 30px;
    width: 200px;
    height: 200px;
    border-radius: 50%;
  }
  .form-group{
    margin-top:10px;
    width:80%;
  }
  .form-link{
    margin-top:10px;
  }
  a:link{
    color:white;
    text-decoration: none;
  }
  a:hover{
    color: white;
    background-color: transparent;
    text-decoration: underline;
  }
  a:visited{
    color:white;
  }
  #signin{
    margin-top:10px;
  }
 

</style>