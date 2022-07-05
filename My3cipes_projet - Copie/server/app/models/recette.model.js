module.exports = (sequelize, Sequelize) => {
  const Recettes = sequelize.define("recette", {
    nom: {
      type: Sequelize.STRING
    },
    categorie: {
      type: Sequelize.STRING
    },
    score:{
      type: Sequelize.DOUBLE
    },
    nbr_personnes : {
      type: Sequelize.INTEGER
    },
    tps_preparation: {
      type: Sequelize.INTEGER
    },
    tps_cuisson: {
      type: Sequelize.INTEGER
    },
    source:{
      type : Sequelize.STRING
    },
    outils: {
      type: Sequelize.STRING
    },
    preparation:{
      type: Sequelize.TEXT
    },
    lien_image:{
      type: Sequelize.TEXT
    },


  },
  { 
    createdAt: false,
    updatedAt: false

  });

  return Recettes;
};