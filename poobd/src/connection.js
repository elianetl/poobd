let Sequelize = require("sequelize");

let condb = new Sequelize("postgres://hzbadwqisspivt:8baf751f9018e39448ecf5ac51ca9b9f0df6a201213280ea362df374e7b91c64@ec2-54-198-73-79.compute-1.amazonaws.com:5432/d1q5a9plmkvncr", {
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      rejectUnauthorized: false,
    }
  }
});

module.exports= condb;
