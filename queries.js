const Pool = require('pg').Pool
const pool = new Pool({
    user: 'me',
    host: 'localhost',
    database: 'api',
    password: '123456',
    port: 5432
})

const createTransaction = (request, response) => {

    const { idTransaction, accountNumber, status} = request.body;

    pool.query('INSERT INTO transactions (id_transaction, account_number, status) VALUES ($1, $2, $3) RETURNING *', [idTransaction, accountNumber, status], (error, results) =>{

        if(error){
            throw error
        }

        response.status(201).send('transaction saved')

    })


}

module.exports = {
    createTransaction

}