import dotenv from 'dotenv';

dotenv.config();

// const MYSQL_HOST = process.env.MYSQL_HOST || 'localhost';
// const MYSQL_DATABASE = process.env.MYSQL_DATABASE || 'supercooldb';
// const MYSQL_USER = process.env.MYSQL_HOST || 'superuser';
// const MYSQL_PASS = process.env.MYSQL_HOST || 'roseville';
const MYSQL_HOST = 'taein-project.cfj1fue23mbt.ap-northeast-2.rds.amazonaws.com' || 'localhost';
const MYSQL_DATABASE = 'taein-project' || 'supercooldb';
const MYSQL_USER = 'taein' || 'superuser';
const MYSQL_PASS = 'nodejstaein' || 'roseville';

const MYSQL = {
    host: MYSQL_HOST,
    database: MYSQL_DATABASE,
    user: MYSQL_USER,
    pass: MYSQL_PASS
};
/*
const SERVER_HOSTNAME = process.env.SERVER_HOSTNAME || 'localhost';
const SERVER_PORT = process.env.SERVER_PORT || 1337;

const SERVER = {
    hostname: SERVER_HOSTNAME,
    port: SERVER_PORT
};
*/
const config = {
    mysql: MYSQL,
    //server: SERVER
};

export default config;