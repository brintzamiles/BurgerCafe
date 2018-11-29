const connection = require('../config/connection.js');




const orm = {
    selectAll: (table, cb) => {
        const qryString = `SELECT * FROM ??`;
        connection.query(qryString, [table], (err, data) => {
            if (err) throw err;
            //console.log(data);
            cb(data);
        });
    },

    insertOne: (table, columns, values, cb) => {
        values = [values]; 
        const qryString = `INSERT INTO ${table} (${columns.toString()}) VALUES ?`;
        connection.query(qryString, [values], (err, data) => {
            if (err) throw err;
            cb(data);
        });
    },
    
    updateOne: (table, objValue, condition, cb) => {
        const qryString = `UPDATE ${table} SET ${objValue} WHERE ${condition}`;
        console.log(qryString);
        connection.query(qryString, (err, data) => {
            if (err) throw err;
            console.log(data);
            cb(data);
        });
    }
}

module.exports = orm;