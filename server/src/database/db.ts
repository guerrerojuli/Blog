import { Pool } from "pg";

export const Client = new Pool({
    host: "localhost",
    database: "database",
    user: "user",
    password: "password" 
});
