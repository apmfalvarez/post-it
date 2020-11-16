const express = require('express');
const commentsRouter = express.Router({mergeParams: true});

const sqlite3 = require('sqlite3');
const db = new sqlite3.Database(process.env.TEST_DATABASE || './database.sqlite');

commentsRouter.param('commentId', (req, res, next, id)=>{
    db.get(
        "SELECT * FROM Comment where id = $id",
        { $id: id},
        (error, row)=>{
            if (error){
                next(error);
            }else if (!row){
                res.status(404).send();
            }else{
                req.comment = row;
                next();
            }
            
        }
    );
});

commentsRouter.get('/', (req, res, next)=>{
    db.all(
        `SELECT * FROM Comment WHERE comment.post_id = $post_id`,
        {
            $post_id: req.params.postId
        },
        (error, rows)=>{
            if (error){
                next(error);
            }
            res.status(200).send({comments: rows});
        }
    );
});

commentsRouter.post('/', (req, res, next)=>{
    const comment = req.body.comment;
    if (!comment.content){
        return res.status(400).send()
    }
    
    db.run(`INSERT INTO Comment
            (content, post_id)
            VALUES ($content, $post_id)`,
        {
            $content: comment.content,
            $post_id: req.params.postId
        },
        function(error){
            if (error){
                next(error);
            }
            db.get(
                `SELECT * FROM Comment WHERE id=${this.lastID}`, 
                (error, row)=>{
                    if (error){
                        next(error);
                    }
                    res.status(201).send({comment: row});
                }
            )
        }
    );
});

commentsRouter.put(`/:commentId`, (req, res, next)=>{
    const comment = req.body.comment;
    if (!comment.content){
        return res.status(400).send()
    }
    db.run(
        `UPDATE Comment
            SET content = $content,
            WHERE id = $id`,
        {
            $content: comment.content,
            $id: req.params.commentId
        },
        function(error){
            if (error){
                next(error);
            }
            db.get(
                `SELECT * FROM Comment WHERE id = ${req.params.commentId}`,
                (error, row)=>{
                    if (error){
                        next(error);
                    }
                    res.status(200).send({comment: row});
                }
            )
        }
    );
});

commentsRouter.delete(`/:commentId`, (req, res, next)=>{
    db.run(
        `DELETE FROM Comment
            WHERE id = ${req.params.commentId}`,
        (error)=>{
            if (error){
                next(error);
            }
            res.status(204).send();
        }
    );
});





module.exports = commentsRouter;