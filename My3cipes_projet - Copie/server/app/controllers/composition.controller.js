const db = require("../models");
const composition = db.recettes;
const Op = db.Sequelize.Op;

// Create and Save a new composition
exports.create = (req, res) => {
  // Validate request
  if (!req.body.nom) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a composition
  const composition = {
    nom : req.body.nom,
    scoreeff: req.body.scoreeff
  };

  // Save composition in the database
  composition.create(composition)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the composition."
      });
    });
};

// Retrieve all recettes from the database.
exports.findAll = (req, res) => {
  //console.log('you are here')
  composition.findAll()
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

// Find a single composition with an id
exports.findOne = (req, res) => {
  //console.log(req.params.id)
  const id = req.params.id
  composition.findByPk(id)
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

// Update a composition by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;
  composition.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: 'composition was updated successfully.'
        });
      } else {
        res.send({
          message: `Cannot update composition with id=${id}. Maybe composition was not found or is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: `Error updating composition with id=${id}`
      })
    })  
}

// Delete a composition with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;
  composition.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "composition was deleted successfully!"
        })
      } else {
        res.send({
          message: `Cannot delete composition with id=${id}. composition not found!`
        })
      }
    })
    .catch(err => {
      res.status(500).send({
        message: `Could not delete composition with id=${id}`
      })
    })
}

// Delete all recettes from the database.
exports.deleteAll = (req, res) => {
  composition.destroy({
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
  res.status(200).send("Public Content composition.");
};