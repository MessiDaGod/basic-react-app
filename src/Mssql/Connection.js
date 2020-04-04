import React, { Component } from 'react';
import sql from 'mssql';

const config = {
    user: 'joeshakely@gmail.com',
    password: 'log-onCp9',
    server: 'localhost',
    database: 'hiid_demo70',
}

    (async function () {
        try {
            let pool = await sql.connect(config)
            let result1 = await pool.request()
                .input('input_parameter', sql.Int, value)
                .query('select * from mytable where id = @input_parameter')

            console.dir(result1)

            // Stored procedure

            let result2 = await pool.request()
                .input('input_parameter', sql.Int, value)
                .output('output_parameter', sql.VarChar(50))
                .execute('procedure_name')

            console.dir(result2)
        } catch (err) {
            // ... error checks
        }
    })()

sql.on('error', err => {
    // ... error handler
})


class Connection extends Component {


}

export default Connection;