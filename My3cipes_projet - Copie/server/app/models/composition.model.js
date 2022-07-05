module.exports = (sequelize, Sequelize) => {
  const Composition = sequelize.define("composition", {
    quantite: Sequelize.INTEGER,
    poid: Sequelize.INTEGER,
    
  },{
    createdAt: false,
    updatedAt: false
  });

  return Composition;
};