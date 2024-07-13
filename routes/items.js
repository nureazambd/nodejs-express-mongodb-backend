const express = require('express');
const router = express.Router();
const itemController = require('../controllers/itemController');

// CRUD and search routes
router.post('/', itemController.createItem);
router.get('/', itemController.getItems);
router.get('/:id', itemController.getItemById);
router.put('/:id', itemController.updateItem);
router.delete('/:id', itemController.deleteItem);
router.get('/search/:name', itemController.searchItems);

module.exports = router;
