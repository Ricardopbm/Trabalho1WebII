import Database from "better-sqlite3";

const db = new Database("database.db", {
    verbose : console.log,
    timeout : 10000
});

export default db;