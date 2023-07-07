import Sequelize from "sequelize";

export const sequelize = new Sequelize("Skhive", 
"postgres", 
"Santivilla23?", {
  host: "localhost",
  dialect: "postgres", // or'mariadb' if you are using MariaDB instead of MySQL.
});
