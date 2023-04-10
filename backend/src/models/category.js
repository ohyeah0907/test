import { DataTypes } from "sequelize";
import PostGresSequelize from "../connector/postgres/index.js";

const Model = PostGresSequelize.define("Category", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    autoIncrementIdentity: true,
  },
  name: {
    type: DataTypes.TEXT,
    allowNull: false,
    unique: true,
  },
}, {tableName:"catogries", paranoid: true});

export default Model;
