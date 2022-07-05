import axios from 'axios';
import http from "../http-common";
const API_URL = 'http://localhost:8080/api/recette/';

class RecetteDataService {
  getAll() {
    return axios.get(API_URL);
  }
  getOne(id) {
    return(axios.get(API_URL + id))
  }
  findByDessert() {
    return http.get(`/recette?categorie=dessert`);
  }
}


/*
class RecetteDataService {
  getAll () {
    return http.get('/recette')
  }

  get (id) {
    return http.get(`/recette/${id}`)
  }

  create (data) {
    return http.post('/recette', data)
  }

  update (id, data) {
    return http.put(`/recette/${id}`, data)
  }

  delete (id) {
    return http.delete(`/recette/${id}`)
  }
}
*/
export default new RecetteDataService()
