<template>
<div id="overall">
  
  <div id="cadre">
    <!-- Titre Recette -->
    <div id="top_part">
    <h2 id="recette-titre">{{recette.nom}}</h2>

    <!-- Recette img -->
    <section class='recette-hero'>
        <img :src="recette.lien_image" class='recette-hero-img' alt='pancakes'>
        <!-- recette icon -->
        <div class="recette-icons">
            <article>
                <font-awesome-icon icon="faClock" />
                <h5>Points Eco</h5>
                <p>{{recette.score}}</p>
            </article>
            <article>
                <i class="fas fa-clock"></i>
                <h5>Temps total</h5>
                <p>{{tps_total}}</p>
            </article>
            <article>
                <i class="far fa-clock"></i>
                <h5>Temps de préparation</h5>
                <p>{{recette.tps_preparation}}</p>
            </article>
            <article>
                <i class="far fa-clock"></i>
                <h5>Temps de cuisson</h5>
                <p>{{recette.tps_cuisson}}</p>
            </article>
        </div>
    </section>
    </div>

    <!-- Ingrédient -->
    <section class="recette-content">
      <div class="ingredients">
      <h4>Ingredients</h4>
        <article class="second-column">
          
            <div v-for="(ingredient) in recette.ingredients" :key="ingredient.nom">
                <p class="single-ingredient">{{ingredient.nom}}</p>
            </div>
        </article>
      </div>
        <article class="preparation">
            <h4 id="h_presentation">Préparation</h4>
            <p class="text_preparation">
                {{recette.preparation}}
            </p>
        </article>
    </section>
  </div>
</div>
</template>

<script>
import RecetteDataService from '@/services/RecetteDataService'

export default {
  name:"my-recette",
  data() {
    return{
      recetteinv:"",
      recette:"",
      temp_total:"",
    }
  },
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    }
  },
  mounted () {
    RecetteDataService.getAll()
      .then(response => {
        this.recetteinv = response.data
        this.getrecette()
        this.setColor()
        this.isMounted = true
      })
      .catch(e => {
        console.log(e)
      });

  },
methods: {
  getrecette () {
      const recette = this.recetteinv.find((r) => {
        return r.id == this.$route.params.id
      })
      this.recette = recette
      this.tps_total = (recette.tps_cuisson + recette.tps_preparation)
    },
    setColor() {
    var x = 0
    var y = 0

    var colors = [["#4f8432","#63b800","#e3ffe8","#63e6ff","#043888"],
    ['#84A59D','#F6BD60','#F5CAC3','#F7EDE2','#F28482'],
    ['#FF1B1C','#FFFFFC','#BEB7A4','#FF7F11','#CBE896'],
    ['#D4A373','#E9EDC9','#FEFAE0','#FAEDCD','#CCD5AE'],
    ['#264653','#2A9D8F','#E9C46A','#F4A261','#E76F51'],
    ['#003049','#D62828','#F77F00','#FCBF49','#EAE2B7']];
    var col = colors[Math.floor(Math.random() * colors.length)];


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
}
}
</script>

<style>
#overall{
  display:flex;
  align-items: center;
}
  #cadre{
    opacity:0.9;
    z-index:10;
    position:absolute;
    margin:auto;
    display:flex;
    flex-direction: column;
    width:70%;
    height:auto;
    background:#FAF8F4;
    border:1px solid white;
    border-radius:1em;
}
.cadre h2{
    text-align: center;
}
.recette-titre {
    color: black;
    font-size: xx-large;
    text-align: center;
}
.recette-hero-img {
    
    margin-left: auto;
    margin-right: auto;
    height: 300px;
    width:auto;
    border-radius: 1rem;
    z-index:20;
}
.recette-hero {
    display: grid;
    gap: 3rem;
}
.recette-icons {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;
    margin: 2rem 0;
    text-align: center;
}
.recette-icons i {
    font-size: 1.5rem;
    color: #2ECC71;
}
.recette-icons h5,p{
    margin-bottom: 0;
    font-size: 0.85em;
}
.recette-content {
  display:flex;
  flex-direction: column;

}
.second-column{
  display:flex;
  flex-direction:row;
}
.ingredients{
  margin:auto;
  text-align: center;
}
.single-ingredient {
    border-right: 1px solid #1AF90F;
    border-left: 1px solid #1AF90F;

    padding-right: 0.75rem;
    padding-left: 0.75rem;

    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size:16px;
}

#top_part{
  width:80%;
  margin:auto;
  justify-content: center;
  text-align: center;
}
.recette-icons{
  justify-content:space-evenly;
  margin:auto;
  width:90%;
}

.preparation{

  text-align: center;
  justify-content: justify;
  margin:5px;
}
.text_preparation{
  font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  font-size:14px;
  text-justify:auto;
}

</style>