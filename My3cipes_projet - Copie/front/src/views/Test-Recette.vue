<template>
  <div class="test">
  <div v-for="(recette,i) in recetteinv" :key="recette.lien_image">
  <p> {{ i }} </p>

  <p> ok </p>
    <img :src="recette.lien_image">
  </div>
  
  </div>
</template>

<script>
import RecetteDataService from '@/services/RecetteDataService'

export default {
  name: "Test-Recette",
  data() {
    return{
    recetteinv: []
    }
  },
  mounted () {
    RecetteDataService.getAll()
      .then(response => {
        this.recetteinv = response.data
        console.log(response.data)
      })
      .catch(e => {
        console.log(e)
      })
  }
}
</script>

<style>

</style>