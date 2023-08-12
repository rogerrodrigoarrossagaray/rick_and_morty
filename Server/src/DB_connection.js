require('dotenv').config();
const { Sequelize } = require('sequelize');
const FavoriteModel = require("./models/Favorite");
const UserModel = require("./models/User");


const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_BDD } = process.env;

// EJERCICIO 03
// A la instancia de Sequelize le falta la URL de conexión. ¡Agrégala!
// Recuerda pasarle la información de tu archivo '.env'.

// URL ----> postgres://DB_USER:DB_PASSWORD@DB_HOST/rickandmorty
const sequelize = new Sequelize(
   `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_BDD}`,
   { logging: false, native: false }
);

// EJERCICIO 05
// Debajo de este comentario puedes ejecutar la función de los modelos.
FavoriteModel(sequelize);
UserModel(sequelize);
// Ejercicio 06
// ¡Relaciona tus modelos aquí abajo!
const { User, Favorite } = sequelize.models;
User.belongsToMany(Favorite, { through: "UserFavorite" });
Favorite.belongsToMany(User, { through: "UserFavorite" });
module.exports = {
   User,
   Favorite,
   conn: sequelize,
};
