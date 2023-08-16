import { createPool } from "mysql2/promise";

export const pool = createPool({
    host: "localhost",
    user: "root",
    password: "Tuyyosomos1mismo@",
    port: 3306,
    database: "companydb",
});