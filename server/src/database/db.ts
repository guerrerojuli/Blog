import { Pool } from "pg";

export const Client = new Pool({
    host: "http://localhost:5432",
    database: "database",
    user: "user",
    password: "password" 
});
