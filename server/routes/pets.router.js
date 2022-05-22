const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');
const { rejectUnauthenticated, rejectLurkers } = require('../modules/authentication-middleware')

// This route *should* return the logged in users pets
router.get('/', (req, res) => {
    if (req.isAuthenticated()) { // only logged in users can do this
        console.log('/pet GET route');
        console.log('is authenticated?', req.isAuthenticated()); // true or false, logged in?
        console.log('user', req.user); // when logged in, is the person making the request
        let queryText = `SELECT * FROM "pets" WHERE "user_id" = $1`;
        pool.query(queryText, [req.user.id]).then((result) => {
            res.send(result.rows);
        }).catch((error) => {
            console.log(error);
            res.sendStatus(500);
        });
    } else {
        res.sendStatus(403); //FORBIDDEN!
    }

});

// This route *should* add a pet for the logged in user
router.post('/', rejectUnauthenticated, rejectLurkers, (req, res) => {
    console.log('/pet POST route');
    console.log(req.body);
    console.log('is authenticated?', req.isAuthenticated());
    console.log('user', req.user);

    const query = `INSERT INTO "pets" ("name", "user_id")
                        VALUES ($1, $2)
                        `;

    pool.query(query, [req.body.name, req.user.id]).then((result) => {
        res.sendStatus(201);
    }).catch((error) => {
        console.log(error);
        res.sendStatus(500);
    });
});

module.exports = router;