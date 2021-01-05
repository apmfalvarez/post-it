const sqlite3 = require('sqlite3');
const db = new sqlite3.Database(process.env.TEST_DATABASE || './database.sqlite');



db.serialize(()=>{
    db.run(
        `DROP TABLE IF EXISTS Post`
    )
    db.run(
        `CREATE TABLE IF NOT EXISTS Post (
            id INTEGER PRIMARY KEY,
            title TEXT,
            content TEXT,
            is_open INTEGER NOT NULL DEFAULT 0,
            color TEXT NOT NULL DEFAULT yellow
            )`
    );
});