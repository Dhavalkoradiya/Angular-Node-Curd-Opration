const express = require('express');
const router = express.Router();

// Require the controllers
const product_controller = require('../controllers/product.controller');

// router.get('/test', product_controller.test); // to get data

router.get('/list', product_controller.product_list); // to get data
router.post('/create', product_controller.product_create);  // to insert data
router.get('/id/:id', product_controller.product_details); // to get data
router.put('/update/:id', product_controller.product_update);  // to update data
router.delete('/delete/:id', product_controller.product_delete);   // to delete data

module.exports = router;