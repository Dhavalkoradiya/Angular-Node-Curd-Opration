'user strict';
var db = require('../db');

//Product object constructor
class Product {
    constructor() { }
    // var Product = function (product) {
    //     this.product = product.name;
    //     this.status = product.status;
    // };
    static getAllProducts(result) {
        db.query("SELECT * from products ORDER BY id DESC", function (err, res) {
            if (err) result(err, null);
            result(null, res);
        });
    }

    static createProduct(product, result) {
        db.query("INSERT INTO products set ?", product, function (err, res) {
            if (err) result(null, err);
            result(null, res.insertId);
        });
    }

    static getProductbyID(id, result) {
        db.query("SELECT * from products where id = ? ", id, function (err, res) {
            if (err) result(err, null);
            result(null, res[0]);
        });
    }

    static updateProductbyId(id,product,result){
        db.query("UPDATE products SET ? WHERE id = ?", [product, id], function (err, res) {
            if (err) result(err, null);
            result(null, res);
        });
    }

    static delectProductbyID(id,result){
        db.query("DELETE FROM products WHERE id = ?", [id], function (err, res) {
            if (err) result(err, null);
            result(null, res);
        });
    }
}
// Task.createProduct = function (newTask, result) {
//     sql.query("INSERT INTO tasks set ?", newTask, function (err, res) {

//         if (err) {
//             console.log("error: ", err);
//             result(err, null);
//         }
//         else {
//             console.log(res.insertId);
//             result(null, res.insertId);
//         }
//     });
// };
// Task.getTaskById = function (taskId, result) {
//     sql.query("Select task from tasks where id = ? ", taskId, function (err, res) {
//         if (err) {
//             console.log("error: ", err);
//             result(err, null);
//         }
//         else {
//             result(null, res);

//         }
//     });
// };

// Task.updateById = function (id, task, result) {
//     sql.query("UPDATE tasks SET task = ? WHERE id = ?", [task.task, id], function (err, res) {
//         if (err) {
//             console.log("error: ", err);
//             result(null, err);
//         }
//         else {
//             result(null, res);
//         }
//     });
// };
// Task.remove = function (id, result) {
//     sql.query("DELETE FROM tasks WHERE id = ?", [id], function (err, res) {

//         if (err) {
//             console.log("error: ", err);
//             result(null, err);
//         }
//         else {

//             result(null, res);
//         }
//     });
// };

module.exports = Product;