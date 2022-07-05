module.exports = (sequelize, Sequelize) => {
  const Ingredient = sequelize.define("ingredient", {
    nom: Sequelize.STRING,
    scoreeff: Sequelize.DOUBLE,
  },{
    createdAt: false,
    updatedAt: false
  });

  return Ingredient;
};