<template>
<div id="overall">
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
    <div class="rubrique" id="r_who"> 
      <div>
        <h1 id="titre">
            Qui sommes nous?
        </h1>
        <p id="r_block">
          My3cipes est un projet étudiant développé par Martin Frin, Paul Cavrois , Luca Pascal, Clément Dauvois, Thomas Legros et Nicolas Gamberini.
          Nous sommes cinq étudiants à l'école d'ingénieur EFREI Paris et en tant que tel, nous sommes extrêmement concernés par les problématiques écologiques du monde moderne.
          Chacun d'entre nous aimerait laisser un magnifique futur à la prochaine génération.
        </p>
      </div>
      <div id="r_overlay_who">
        <p id="r_text"><br>Qui somme nous? </p>
      </div>
    </div>

    <div class="rubrique" id="r_objo">
      <div>
        <h1 id="titre">
            Objectif
        </h1>
        <p id="r_block">
          Pour aider dans la lutte contre le réchauffement climatique ce site web qui suggére des recettes saines et durables mettant en avant des aliments bio et locaux.
          l'idée est de faciliter et d'encourager la cuisine éco-responsable.
          En proposant trois recettes par repas, nous espérons donner aux utilisateurs un choix varié basé sur leurs sélections précédentes afin de toujours mieux correspondre à leurs goûts.
        </p>
      </div>
      <div id="r_overlay_objo">
        <p id="r_text">Nos Objectifs </p>
      </div>
    </div>
    <div class="rubrique" id="r_source">
      <div>
        <h1 id="titre">
            Sources
        </h1>
        <p id="r_block">
          Pour crée ce site nous nous somme basé sur différente donnée. la partie des donnée concernant la composition de l'écoscore provient de la base de donnée agribalyse.
            
        </p>

        
      </div>
      <div id="r_overlay_source">
        <p id="r_text">Nos Source </p>
      </div>
    </div>
    <div class="rubrique" id="r_produit">
      <div >
        <h1 id="titre">
            Bien choisir les produits 
        </h1>
        <p id="r_block">
            L'écoscre calculé pour vous recomendé vos recette est basé sur des donnée francaise avec des ingrédients naturel. Il est donc important pour suivre la démarche de faire attention au ingrédient que vous acheter. il est conseillé de s'approvisionné en produit écologiuement résponsble.
        </p>
    </div>
      <div id="r_overlay_produit">
        <p id="r_text">Choix des produits </p>
      </div>
    </div> 
  </div>
  </div>
</template>

<script>
export default {
  name:"My-info",
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
  }

}
</script>
  
<style scoped>
#overall{
    height:100%;
    margin:0;
  }
 #header{ 

  display:block;
  text-align: center;
  margin:0;
  width:100%;
  min-height:80px;
  background: linear-gradient(to right,#A7E9AF 10%,#4E944F 90%);
  border-bottom: 2px solid black;
 }
 #logo{
  position:relative;
  z-index:10;
  border:1px solid gray;
  border-radius: 50%;
  float:left;
  width:100px;
  height:100px;
  margin-left:30px;
 }
 #profile_img{
  width:60px;
  height:60px;
  border-radius: 50%;
  background-color: white;
 }
 #spread_head{
  width:70%;
  float:right;
  margin-top:10px;
  margin-right:10px;
  display:flex;
  align-items: center;
  justify-content: space-between;
 }
 .head_link:link, .head_link:visited, .head_link:hover{
  font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  color:#474747;
  font-size:28px;
  font-weight: 600;
 }
 .head_link:hover{
  text-decoration: underline;
  /*font-weight: 550;*/
 }
 #rnav{
  z-index:10;
  
  display:flex;
  position:absolute;
  width:100%;
  height:40px;
  justify-content: space-between;
  padding-left:10px;
  padding-right:10px;
  opacity:0.7;
  top:0;
 }

 #btn-group{
  height:100%;
 }

 .btn{
  width:auto;
  height:auto;
 }


 .btn:hover{
  transform: scale(1.01) perspective(1px);
  font-weight: 600;
  font-size: large;
 }

 #all_rubriques{
  position:absolute;
  display:flex;
  flex-direction: column;
  width:100%;
  height:100%;
 }
 #r_who,#r_objo,#r_source,#r_produit{
  position:relative;
  display:flex;
  justify-content: center;
  align-items: center;
  width:100%;
  height:25%;
  font-size: 20px;
  font-family: Georgia, 'Times New Roman', Times, serif;
  color:black;
  overflow:hidden;
 }
 #r_who{
  padding-top:50px;
  height:32%;
  background: #F6E3C5;
  opacity:0.7;
 }
 #r_objo{
  background:#A0D995;
  opacity:0.7;
 }
 #r_source{
  background:#6CC4A1;
  opacity:0.7;

 }
 #r_produit{
  background:#4CACBC;
  opacity:0.7;
 }

 #r_text{
  position:absolute;
  font-size: 40px;
  display:block;
  overflow: hidden;
 }
 .r_name{
  font-size: 20px;
  margin:auto;
  margin-left:-20px;
 }

 #r_overlay_who, #r_overlay_objo, #r_overlay_source,#r_overlay_produit{

  position:absolute;
  justify-content: center;
  align-items: center;
  top:0;
  display:flex;
  overflow:hidden;
  width:100%;
  height:100%;
  transition: .5s ease;
 }
 #r_overlay_who{
  border:1px solid #eee1ce;
  background:#eee1ce;
 }

 #pictures{
  position:absolute;
  display:inline-block;
  margin:auto;
  width:100%;
  display:flex;
  justify-content:space-around ;
  height:80%;
 }

 #r_who:hover #r_overlay_who{
  height:0;
 }

 #r_overlay_objo{
  border:1px solid #A0D995;
  background:#A0D995;
 }
 
 #r_objo:hover #r_overlay_objo{
  height:0;
 }

 #r_overlay_source{
  border:1px solid #6CC4A1;
  background:#6CC4A1;
 }

 #r_source:hover #r_overlay_source{
  height:0;
 }

 #r_overlay_produit{
  border:1px solid #4CACBC;
  background:#4CACBC;
 }

 #r_produit:hover #r_overlay_produit{
  height:0;
 }

 #titre{
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
 }
 #r_block{
  text-align: center;
  margin-left: 5%;
  margin-right: 5%;
 }
</style>