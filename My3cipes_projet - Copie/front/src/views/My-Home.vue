<template>
<div id="content">
  <div id="rnav">
    <div id = "btn-date" class="btn-group"> 
      <button type="button" class="btn btn-outline-secondary" @click="toInfo()">Informations</button>
      <button type="button" class="btn btn-outline-secondary" @click="toHome()">Home</button>
    </div>
    <div id = "btn-info" class="btn-group">
      <button type="button" class="btn btn-outline-secondary">Profil</button>
      <button type="button" class="btn btn-outline-secondary" @click="logout()">Logout</button>
    </div>
  </div>
    <div id="all_rubriques">

      <ShowMeal 
      v-if="isMounted"
      :name="matin"
      :recetteinv="matins"
      :color="matin_color"
      />
       <ShowMeal 
      v-if="isMounted"
      :name="midi"
      :recetteinv="midis"
      :color="midi_color"
      />
       <ShowMeal 
      v-if="isMounted"
      :name="dessert"
      :recetteinv="desserts"
      :color="dessert_color"
      />
      <ShowMeal 
      v-if="isMounted"
      :name="soir"
      :recetteinv="soirs"
      :color="soir_color"
      />
  </div>
</div>
</template>

<script>

import ShowMeal from "../components/Show-Meal";
import RecetteDataService from '@/services/RecetteDataService'


export default {
  name: "My-Home",
  components:{
    ShowMeal
  },
  data() {
    return{
      isMounted: false,
      recetteinv: [],
      matins: [],
      midis: [],
      desserts: [],
      soirs:[],
      matin: "Matin",
      midi:"Midi",
      soir:"Soir",
      dessert:"Dessert",
      matin_color:{
        background: ""
      },
      midi_color:{
        background:""
      },
      dessert_color:{
        background:""
      },
      soir_color:{
        background:"",
      }
    }
  },
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
  },
  methods: {
    logout() {
      this.$store.dispatch('auth/logout');
      this.$router.push('/login');
    },
    toInfo() {
      this.$router.push({path: "/info"})
    },
    toHome(){
      this.$router.push({path: "/home"})
    },
    computeinv() {
      for (let i=0;i<this.recetteinv.length;i++){
        if (this.recetteinv[i].categorie == "Dessert"){
          this.desserts.push(this.recetteinv[i])
        }
        else if (this.recetteinv[i].categorie == "Petit-déjeuner"){
            this.matins.push(this.recetteinv[i])
        }
        else if (this.recetteinv[i].categorie == "Entrée" || this.recetteinv[i].categorie == "Plat" ){
            this.midis.push(this.recetteinv[i])
            this.soirs.push(this.recetteinv[i])
        }
      }
    },
    getMultipleRandom(array, num) {
      for(let i = array.length - 1; i >= 1; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = array[j];
      array[j] = array[i];
      array[i] = temp;

      return array.slice(0, num);
}
  },
  btn_color(){
  let rnav = document.getElementById("rnav")
  let colors = [['#EDE6DB','#417D7A','#1D5C63','#1A3C40'],
  ['#FFE3A9','#FFC3C3','#FF8C8C','#FF5D5D'],
  ['#F6E3C5','#A0D995','#6CC4A1','#4CACBC']]
  var col = colors[Math.floor(Math.random() * colors.length)];
  rnav.style.background = col[0]

  this.matin_color.background = col[0]
  this.midi_color.background = col[1]
  this.dessert_color.background = col[2]
  this.soir_color.background = col[3]

  }
  },
  mounted () {
    RecetteDataService.getAll()
      .then(response => {
        this.recetteinv = response.data
        console.log(response.data)
        this.computeinv()
        this.btn_color()
        this.isMounted = true
      })
      .catch(e => {
        console.log(e)
      });
  },
}
</script>

<style scoped>
#content{
  display:flex;
  width:100%;
  height:100%;
  flex-direction:column;
}
 #rnav{
  display:flex;
  position:relative;
  width:100%;
  height:40px;
  justify-content: space-between;
  padding-left:10px;
  padding-right:10px;
  opacity:0.7;
 }

 #btn-group{
  height:100%;
 }

 .btn{
  width:auto;
  height:auto;
 }

 #all_rubriques{
  position:relative;
  display:flex;
  flex-direction: column;
  width:100%;
  height:100%;
 }
</style>