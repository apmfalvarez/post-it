const sqlite3 = require('sqlite3');
const db = new sqlite3.Database(process.env.TEST_DATABASE || './database.sqlite');



db.serialize(()=>{
    db.run(
        `DROP TABLE IF EXISTS Post`
    )
    db.run(
        `CREATE TABLE IF NOT EXISTS Post (
            id INTEGER PRIMARY KEY,
            title TEXT NOT NULL,
            content TEXT,
            is_open INTEGER DEFAULT 0
            )`
    );
    db.run(
        `DROP TABLE IF EXISTS Comment`
    )
});