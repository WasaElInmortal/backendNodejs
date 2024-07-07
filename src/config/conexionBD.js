const sqlConn = require('mssql');;


const BD_Conn = {
    user: "usuario",
    password: "pass",
    database: "bd",
    server: "server",
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