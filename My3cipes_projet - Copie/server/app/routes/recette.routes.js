/*
module.exports = app => {
  const recette = require('../controllers/recette.controller.js')

  const router = require('express').Router()
  //insert new data
  router.post('/', recette.create)
  // retrieve all data
  router.get('/', recette.findAll)
  //get one data
  router.get('/:id', recette.findOne)
  //updat data
  router.put('/:id', recette.update)
  //delete by id
  router.delete('/:id', recette.delete)
  //test
  router.get('/test', recette.allAccess)

  app.use('/api/recette', router)
}
*/
const recette = require('../controllers/recette.controller.js')

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/api/recette", recette.findAll);
  app.get("/api/recette/:id", recette.findOne);
};