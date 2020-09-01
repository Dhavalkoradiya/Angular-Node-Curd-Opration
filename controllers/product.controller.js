'use strict';

const Product = require('../models/product.model');

// exports.test = function (req, res) {
// 	res.send('Greetings from the Test controller!');
// };

exports.product_list = function (req, res) {
	Product.getAllProducts(function (err, result) {
		if (err) res.send(err.message);
		res.send(result);
	});
};

exports.product_create = function (req, res) {
	Product.createProduct(req.body,function (err, result) {
		if (!err) {
			res.status(200).json({
				last_inserted_id: result
			});
		} else { res.status(400).send(err); }
	});
};

exports.product_details = function (req, res) {
    Product.getProductbyID(req.params.id, function (err, result) {
        if (!err) {
			res.status(200).send(result);
		} else { res.status(400).send(err); }
    });
};

exports.product_update = function (req, res) {
    Product.updateProductbyId(req.params.id, req.body, function (err, result) {
        if (!err) {
			res.status(200).send(result);
		} else { res.status(400).send(err); }
    });
};

exports.product_delete = function (req, res) {
    Product.delectProductbyID(req.params.id, function (err, result) {
        if (!err) {
			res.status(200).send(result);
		} else { res.status(400).send(err); }
    });
};

// exports.create_a_task = function (req, res) {
//     var new_task = new Task(req.body);

//     //handles null error 
//     if (!new_task.task || !new_task.status) {

//         res.status(400).send({ error: true, message: 'Please provide task/status' });

//     }
//     else {

//         Task.createTask(new_task, function (err, task) {

//             if (err)
//                 res.send(err);
//             res.json(task);
//         });
//     }
// };


// exports.read_a_task = function (req, res) {
//     Task.getTaskById(req.params.taskId, function (err, task) {
//         if (err)
//             res.send(err);
//         res.json(task);
//     });
// };


// exports.update_a_task = function (req, res) {
//     Task.updateById(req.params.taskId, new Task(req.body), function (err, task) {
//         if (err)
//             res.send(err);
//         res.json(task);
//     });
// };


// exports.delete_a_task = function (req, res) {


//     Task.remove(req.params.taskId, function (err, task) {
//         if (err)
//             res.send(err);
//         res.json({ message: 'Task successfully deleted' });
//     });
// };