const sqlite3 = require('sqlite3').verbose()
const path = require('path')

const dbPath = path.resolve(__dirname, 'database', 'tasks.db')
const db = new sqlite3.Database(dbPath, (error) => {
    if (error) {
        console.log('SQLite connection error', error.message)
    } else {
        console.log('SQlite connection')
    }
})

db.serialize(() => {
    db.run(`
        CREATE TABLE IF NOT EXISTS tasks (
            id INTEGER PRIMARY KEY,
            name TEXT NOT NULL,
            description TEXT NOT NULL,
            dueDate DATE,
            status TEXT NOT NULL,
            priority TEXT NOT NULL,
        )
    `)
})

module.exports = db;
