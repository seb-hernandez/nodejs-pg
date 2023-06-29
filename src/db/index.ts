import { Pool } from 'pg';

const pool = new Pool({
    host: 'localhost',
    user: 'root',
    database: 'simple_bank',
    password: 'secret',
    port: 5432,
});

export { pool };
