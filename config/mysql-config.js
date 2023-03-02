import mysql from "mysql2";

export const pool = mysql
  .createPool({
    host: "127.0.0.1",
    port: 3307,
    user: "root",
    password: "",
    database: "morning",
  })
  .promise();
