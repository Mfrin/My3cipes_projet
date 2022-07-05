<template>
  <div class="rubrique" id="r_" :style="color" > 
          <div id="pictures">
            <div class="single_element" v-for="(recette) in mylist" :key="recette.id">
            <img class="recette_img"  :src="recette.lien_image" @click="goToPic(recette.id)">
             <p class="r_name" @click="goToPic(recette.id)"><strong>{{recette.nom}}</strong><br>Preparation : {{recette.tps_preparation}} minutes<br>Score : {{recette.score}}</p>
            </div>
          </div>
          <div id="r_overlay" :style="color">
            <p id="r_text">{{name}}</p>
          </div>
        </div>
</template>

<script>
//import UserService from "../services/user.service";

export default {
  name: "Show-Meal",
  props:["name","recetteinv","color"],
  data() {
    return{
      mylist: [],
      isMounted: false
    }
  },
  mounted () {
    this.getrandom()
      console.log("mylist",this.mylist)
  },
  methods:{
  get3random(){
    var selid = []
    var idout = []
    for (let i = 0; i< this.recetteinv.length;i++){
      selid.push(this.recetteinv[i].id)
    }
    for (let i=0;i<3;i++){
      const randomElement = selid[Math.floor(Math.random() * selid.length)];

      do {
      const randomElement = selid[Math.floor(Math.random() * selid.length)];
      idout.push(randomElement)
      }while (randomElement in idout)

      this.mylist = idout

    }
  },
  getrandom() {
    let temp = this.recetteinv
   for (let i=0;i<3;i++){

    var index = Math.floor(Math.random() * temp.length)
    var randomElement = temp[index];
    this.mylist.push(randomElement)
    temp.splice(index,1) 
  }
  },
  goToPic(id) {
    this.$router.push({path: '/recette/' + id.toString()});
  }
}
}
</script>

<style scoped>
  #r_{
  position:relative;
  display:flex;
  justify-content: center;
  align-items: center;
  width:100%;
  height:25%;
  font-size: 40px;
  font-family: Georgia, 'Times New Roman', Times, serif;
  overflow:hidden;
  opacity:0.7;
  background:#F6E3C5;
  }
  .recette_img{
  width:150px;
  height:150px;
  margin:auto;
  border-radius:5%;
}
.recette_img:hover{
  cursor:pointer;
}
.single_element{
  display:flex;
  width:33%;
}
 #r_text{
  position:absolute;
  display:block;
  overflow: hidden;
 }
 .r_name{
  font-size: 16px;
  margin:auto;
  margin-left:10px;
 }
 #r_overlay{
  position:absolute;
  justify-content: center;
  align-items: center;
  top:0;
  display:flex;
  overflow:hidden;
  width:100%;
  height:100%;
  transition: .5s ease;
  background:#F6E3C5;
 }
 #pictures{
  display:flex;
  position:relative;
  flex-direction: row;
  margin:auto;
  width:100%;
  display:flex;
  justify-content:space-around ;
  height:80%;
 }
 #r_:hover #r_overlay{
  height:0;
 }
</style>