const { DataTypes } = require('sequelize');
const sequelize = require('../utils/db');

const User = sequelize.define('users', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  isAdmin: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false
  }
})

const DataInfo = sequelize.define('dataInfos', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  tel1: {
    type: DataTypes.STRING,
  },
  tel2: {
    type: DataTypes.STRING,
  },
  rezhim: {
    type: DataTypes.STRING,
  },
  h1: {
    type: DataTypes.STRING,
  },
  h2: {
    type: DataTypes.STRING,
  },
  h3: {
    type: DataTypes.STRING,
  },
  h4: {
    type: DataTypes.STRING,
  },
  img_fon: {
    type: DataTypes.STRING,
  },
  alt: {
    type: DataTypes.STRING,
  },
  p: {
    type: DataTypes.STRING,
  },
  info: {
    type: DataTypes.TEXT,
  },
  content: {
    type: DataTypes.TEXT,
  },
});

const Service = sequelize.define('services', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  h2: {
    type: DataTypes.STRING,
  },
  img: {
    type: DataTypes.STRING,
  },
  alt: {
    type: DataTypes.STRING,
  },
  description: {
    type: DataTypes.STRING,
  },
  subscription: {
    type: DataTypes.STRING,
  },
  list: {
    type: DataTypes.TEXT,
  },
  info: {
    type: DataTypes.STRING,
  },
  info2: {
    type: DataTypes.STRING,
  },
  badge: {
    type: DataTypes.STRING,
  },
  price: {
    type: DataTypes.INTEGER,
  },
  discount: {
    type: DataTypes.INTEGER,
  },
});

module.exports = { User, DataInfo, Service }
