<template>
<head>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
</head>
<div id="overall">
  <div id="all">
    <Form @submit="handleLogin" :validation-schema="schema" id="questionnaire">
    <img id = "logo" class="flip-2-hor-top-1" src="..\assets\logo.png">
    <div class="form-group">
      <Field type="email" name="email" class="form-control" placeholder="Enter email"/>
    </div>
    <div class="form-group">
      <Field name="password" type=password class="form-control" placeholder="Password"/>
    </div>
    <div class="form-link">
      <button type ="btn" class="btn btn-light" id="signlink" @click="redirectSign()"> Not yet registred ? Sign up !</button>
    </div>
    <button  type="btn" class="btn btn-light" id="signin" :disabled="loading">
      <span v-show="loading" class="spinner-border spinner-border-sm"></span>Login</button>
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
import { Form, Field} from "vee-validate";
import * as yup from "yup";

export default {
  name: "Log-in",
    components: {
    Form,
    Field,
  },
  data() {
    const schema = yup.object().shape({
      email: yup.string().required("email is required!"),
      password: yup.string().required("Password is required!"),
    });
      return {
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
  created() {
    if (this.loggedIn) {
      this.$router.push({path: '/home'});
    }
  },
  methods : {
    handleLogin(user) {
      this.loading = true;
      this.$store.dispatch("auth/login", user).then(
        () => {
          this.$router.push({path: '/home'});
        },
        (error) => {
          this.loading = false;
          this.message =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
        }
      );
    },
    setColor() {
    let signlink = document.getElementById('signlink')
    var x = 0
    var y = 0

    var colors = [["#4f8432","#63b800","#e3ffe8","#63e6ff","#043888"],
    ['#84A59D','#F6BD60','#F5CAC3','#F7EDE2','#F28482'],
    ['#FF1B1C','#FFFFFC','#BEB7A4','#FF7F11','#CBE896'],
    ['#D4A373','#E9EDC9','#FEFAE0','#FAEDCD','#CCD5AE'],
    ['#264653','#2A9D8F','#E9C46A','#F4A261','#E76F51'],
    ['#003049','#D62828','#F77F00','#FCBF49','#EAE2B7']];
    var col = colors[Math.floor(Math.random() * colors.length)];
    signlink.style.color = col[0]


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
    redirectSign() {
      this.$router.push({path : '/signup'})
    }
  },
    mounted() {
      this.setColor()
    }
};
</script>

<style>
label{
  margin:0px;
}
  body,html{
    height:100%;
    padding:0;
    margin:0;
  }
  #overall{
    border: 1px solid black;
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
    margin-top:0px;
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