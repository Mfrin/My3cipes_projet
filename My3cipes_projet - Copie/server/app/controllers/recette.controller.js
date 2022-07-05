const db = require("../models");
const Recette = db.recettes;
const Op = db.Sequelize.Op;
const Ingredient = db.ingredients

// Create and Save a new recette
exports.create = (req, res) => {
  // Validate request
  if (!req.body.nom) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a recette
  const recette = {
    nom : req.body.nom,
    categorie : req.body.categorie,
    score : req.body.score,
    nbr_personnes : req.body.nbr_personnes,
    tps_preparation : req.body.tps_préparation,
    tps_cuisson : req.body.tps_cuisson,
    sourcee : req.body.sourcee,
    outils : req.body.outils,
    desc_prep : req.body.desc_prep,
    lien_img : req.body.lien-img
  };

  // Save recette in the database
  Recette.create(recette)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the recette."
      });
    });
};

// Retrieve all recettes from the database.
exports.findAll = (req, res) => {
  //console.log('you are here')
  Recette.findAll({
    include: [
      {
        model: Ingredient,
        as: "ingredients",
        attributes: ["id", "nom", "scoreeff"],
        through: {
          attributes: [],
        }
      },
    ],
  })
  .then(data => {
      res.send(data)
  })
  .catch(err => {
      res.status(500).send({
          message:
              err.message || 'Some error occurred while loading the data'
      })
  })   
}

// Find a single recette with an id
exports.findOne = (req, res) => {
  //console.log(req.params.id)
  const id = req.params.id
  Recette.findByPk(id, {
    include: [
      {
        model: Ingredient,
        as: "ingredients",
        attributes: ["id", "nom", "scoreeff"],
        through: {
          attributes: [],
        }
      },
    ],
  })
  .then(data => {
      res.send(data)
  })
  .catch(err => {
      res.status(500).send({
          message:
              err.message || `Some error occurred while loading the data id ${id}`
      })
  }) 
}

// Update a recette by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;
  Recette.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: 'Recette was updated successfully.'
        });
      } else {
        res.send({
          message: `Cannot update recette with id=${id}. Maybe recette was not found or is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: `Error updating recette with id=${id}`
      })
    })  
}

// Delete a recette with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;
  Recette.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "recette was deleted successfully!"
        })
      } else {
        res.send({
          message: `Cannot delete recette with id=${id}. recette not found!`
        })
      }
    })
    .catch(err => {
      res.status(500).send({
        message: `Could not delete recette with id=${id}`
      })
    })
}

// Delete all recettes from the database.
exports.deleteAll = (req, res) => {
  recette.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} recettes were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all recettes."
      });
    });
};

exports.allAccess = (req, res) => {
  res.status(200).send("Public Content recette.");
};