const express = require('express');
const router = express.Router();
const PersonControler = require('./../controller/personController');

router.get('/', PersonControler.person_all);
router.post('/', PersonControler.person_create);
router.get('/:personId/',PersonControler.person_edit);
router.patch('/:personId/',PersonControler.person_update);
router.delete('/:personId/',PersonControler.person_delete);


module.exports = router;
