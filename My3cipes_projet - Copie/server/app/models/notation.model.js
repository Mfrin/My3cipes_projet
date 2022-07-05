module.exports = (sequelize, Sequelize) => {
  const Notation = sequelize.define("notation", {
    note: Sequelize.INTEGER,
    
  },{
    createdAt: false,
    updatedAt: false
  });

  return Notation;
};