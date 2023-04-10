import { DataTypes } from "sequelize";
import PostGresSequelize from "../connector/postgres/index.js";
import CategoryModel from "./category.js";

const Model = PostGresSequelize.define("Post", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    autoIncrementIdentity: true,
  },
  title: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  handle: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  publish: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
  status: {
    type: DataTypes.ENUM("ACTIVE", "DRAFT", "ARCHIVED"),
    defaultValue: "DRAFT",
  },
  thumbnail: {
    type: DataTypes.TEXT,
    defaultValue: "",
  },
  images: {
    type: DataTypes.ARRAY(DataTypes.TEXT),
    defaultValue: [],
  },
}, {tableName: 'posts', paranoid: true});

CategoryModel.hasOne(Model, {
  foreignKey: 'categoryId'
});
Model.belongsTo(CategoryModel, {
  foreignKey: 'categoryId'
});

CategoryModel.sync({alter: true})
Model.sync({alter: true})

export default Model;