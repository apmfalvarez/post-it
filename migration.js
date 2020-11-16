const sqlite3 = require('sqlite3');
const db = new sqlite3.Database(process.env.TEST_DATABASE || './database.sqlite');



db.serialize(()=>{
    db.run(
        `CREATE TABLE IF NOT EXISTS Post (
            id INTEGER PRIMARY KEY,
            name TEXT NOT NULL,
            content TEXT
            )`
    );
    db.run(
        `CREATE TABLE IF NOT EXISTS Comment (
            id INTEGER PRIMARY KEY,
            content TEXT NOT NULL,
            post_id INTEGER NOT NULL,
            FOREIGN KEY(post_id) REFERENCES Post(id)
            )`
    );
});