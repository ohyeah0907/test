import PostgresSequelize from "../connector/postgres/index.js";
import { DataTypes } from "sequelize";

const Model = PostgresSequelize.define(
  "Product",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      autoIncrementIdentity: true
    },
    name: {
      type: DataTypes.TEXT,
      unique: true,
      allowNull: false,
    },
    price: {
      type: DataTypes.BIGINT,
      defaultValue: 0,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      defaultValue: "Nice!",
      allowNull: false,
    },
    image: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  { tableName: "products" }
);

Model.sync({ alter: true });

export default Model;
