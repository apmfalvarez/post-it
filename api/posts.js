const express = require('express');
const postsRouter = express.Router();

const sqlite3 = require('sqlite3');
const db = new sqlite3.Database(process.env.TEST_DATABASE || './database.sqlite');

const commentsRouter = require(`./comments`);

postsRouter.param('postId', (req, res, next, id)=>{
    db.get(
        "SELECT * FROM Post where id = $id",
        { $id: id},
        (error, row)=>{
            if (error){
                next(error);
            }else if (row){
                req.post = row;
                next();
            }else{
                res.status(404).send();
            }
            
        }
    );
});

postsRouter.use('/:postId/comments', commentsRouter);

postsRouter.get('/', (req, res, next)=>{
    db.all(
        `SELECT * FROM Post
            ORDER BY id DESC
        `,
        (error, rows)=>{
            if (error){
                next(error);
            }
            res.status(200).send({posts: rows});
        }
    );
});

postsRouter.get('/:postId', (req, res, next)=>{
    res.status(200).send({post:req.post});
});

postsRouter.post('/', (req, res, next)=>{
    const post = req.body.post;
    console.log(req.body);
    if (!post.title){
        return res.status(400).send()
    }
    db.run(`INSERT INTO Post
        (title, content)
        VALUES ($title, $content)`,
    {
        $title: post.title,
        $content: post.content || ''
    },
    function(error){
        if (error){
            next(error);
        }
        db.get(
            `SELECT * FROM Post WHERE id=$id`, 
            {
                $id: this.lastID
            },
            (error, row)=>{
                if (error){
                    next(error);
                }
                res.status(201).send({post: row});
            }
        )
    }
    )
});

postsRouter.put('/:postId', (req, res, next)=>{
    const post = req.body.post;
    if (!post.title){
        return res.status(400).send()
    }
    db.run(
        `UPDATE Post
            SET title = $title,
            content = $content,
            WHERE id = $id`,
        {
            $id: req.params.postId,
            $title: post.title,
            $content: post.content || ''
        },
        function(error){
            if (error){
                next(error);
            }
            db.get(
                `SELECT * FROM Post WHERE id=${req.params.postId}`,
                (error, row)=>{
                    if (error){
                        next(error);
                    }
                    res.status(200).send({post: row});
                }
            )
        }
    )
});

postsRouter.delete('/:postId', (req, res, next)=>{
    db.run(
        `DELETE FROM Post
            WHERE id = ${req.params.postId}`,
        function(error){
            if (error){
                next(error);
            }
            db.get(
                `SELECT * FROM Post WHERE id=${req.params.postId}`,
                (error, row)=>{
                    if (error){
                        next(error);
                    }
                    res.status(200).send({post: row});
                }
            )
        }
    )
});




module.exports = postsRouter;