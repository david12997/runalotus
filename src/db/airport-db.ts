import mysql, {PoolOptions} from 'mysql2/promise';

const config:PoolOptions = {
    host: process.env.DB_AIRPORTS_HOST,
    user: process.env.DB_AIRPORTS_USERNAME,
    password: process.env.DB_AIRPORTS_PASSWORD,
    database: process.env.DB_AIRPORTS_DATABASE,
    port: Number(process.env.DB_AIRPORTS_PORT),
    waitForConnections: true,
    connectionLimit: 50
}

export const airportDB = mysql.createPool(config);