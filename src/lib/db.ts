import { Pool } from "pg";

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "postgres",
    password: "4435",
    port: 5432,
});

export async function getUserByUsername(username: string) { // Function to get user by username
    const client = await pool.connect();
    try {
        const result = await client.query("SELECT * FROM users WHERE username = $1", [username]);
        return result.rows[0];
    } finally {
        client.release();
    }
}

export async function createUser(username: string, password: string) {
    const client = await pool.connect();
    try {
        const result = await  client.query("INSERT INTO users (username, password) VALUES ($1, $2) RETURNING *", [username, password]);
        return result.rows[0];
    } finally {
        client.release();
    }
}
