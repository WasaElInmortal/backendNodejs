const sqlConn = require('mssql');;


const BD_Conn = {
    user: process.env.USER_BD,
    password: process.env.PASS_BD,
    database: process.env.NAME_BD,
    server: process.env.DOMINIO,
    options: {
        trustedconnerction: false,
        enableArithbort: true,
        TrustServerCertificate: true,
        encrypt: false

    }
}


async function exeQuery(query) {
    try {
        console.log("realizando conexion...");
        const pool = await sqlConn.connect(BD_Conn);
        console.log("realizando query...");
        const result = await pool.request().query(query);
        console.log("Query realizado...");
        return result.recordset;

    } catch (error) {
        console.log("error exeQuery: " + error);
        throw error

    }
}


module.exports = {exeQuery};