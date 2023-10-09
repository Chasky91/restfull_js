import mysql from 'mysql'
import { configDB } from './ db.config.js'

// Create a connection to the database
export const connection = mysql.createConnection({
    host: configDB.HOST,
    user: configDB.USER,
    password:configDB.PASSWORD,
    database: configDB.DB
})

// open the MySQL connection
connection.connect(error => {
    if(error) throw error
    console.log("Successfully connected to the database.")
})