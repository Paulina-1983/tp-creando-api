const express = require('express');
const router = express.Router();
const {list , detail, createActor, updateActor, destroyActor } = require('../../controllers/api/actorsController');


/* /api/actors */
router
    .get('/', list)
    .get('/:id', detail)
//Rutas exigidas para la creación del CRUD
    .post('/', createActor)
    .put('/:id', updateActor)
    .delete('/:id', destroyActor)

module.exports = router;