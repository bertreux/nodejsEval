import mysql from 'mysql2/promise';

const db_connection = async () => {
    const { DB_HOST, DB_NAME, DB_USER, DB_PASSWORD } = process.env;

    return mysql.createPool({
        host: DB_HOST,
        user: DB_USER,
        database: DB_NAME,
        password: DB_PASSWORD,
        namedPlaceholders: true,
    });
}

export default db_connection;