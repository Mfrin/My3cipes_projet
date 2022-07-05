const db = require("../models");
const ingredient = db.recettes;
const Op = db.Sequelize.Op;

// Create and Save a new ingredient
exports.create = (req, res) => {
  // Validate request
  if (!req.body.nom) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a ingredient
  const ingredient = {
    nom : req.body.nom,
    scoreeff: req.body.scoreeff
  };

  // Save ingredient in the database
  ingredient.create(ingredient)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the ingredient."
      });
    });
};

// Retrieve all recettes from the database.
exports.findAll = (req, res) => {
  //console.log('you are here')
  ingredient.findAll()
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

// Find a single ingredient with an id
exports.findOne = (req, res) => {
  //console.log(req.params.id)
  const id = req.params.id
  ingredient.findByPk(id)
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

// Update a ingredient by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;
  ingredient.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: 'ingredient was updated successfully.'
        });
      } else {
        res.send({
          message: `Cannot update ingredient with id=${id}. Maybe ingredient was not found or is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: `Error updating ingredient with id=${id}`
      })
    })  
}

// Delete a ingredient with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;
  ingredient.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "ingredient was deleted successfully!"
        })
      } else {
        res.send({
          message: `Cannot delete ingredient with id=${id}. ingredient not found!`
        })
      }
    })
    .catch(err => {
      res.status(500).send({
        message: `Could not delete ingredient with id=${id}`
      })
    })
}

// Delete all recettes from the database.
exports.deleteAll = (req, res) => {
  ingredient.destroy({
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
  res.status(200).send("Public Content ingredient.");
};