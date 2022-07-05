const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = require("./user.model.js")(sequelize, Sequelize);
db.recettes = require("./recette.model.js")(sequelize, Sequelize);
db.ingredients = require("./ingredient.model.js")(sequelize, Sequelize);
db.compositions = require("./composition.model.js")(sequelize, Sequelize);
db.notations = require("./notation.model.js")(sequelize, Sequelize);


db.recettes.belongsToMany(db.users, {
  through: db.notations,
  foreignKey: "id_recette",
});

db.users.belongsToMany(db.recettes, {
  through: db.notations,
  foreignKey: "id_user",
});


db.ingredients.belongsToMany(db.recettes, {
  through: db.compositions,
  foreignKey: "id_ingredient",
});

db.recettes.belongsToMany(db.ingredients, {
  through: db.compositions,
  foreignKey: "id_recette",
});

module.exports = db;
