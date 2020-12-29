const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');
const checkDate = require("../middlewares/AuthUser");
const Auth = require("../middlewares/AuthUser");
const range = require("../middlewares/range");
//Get information'bout cars
router.get('/list-all-cars',orderController.getAllCar);
router.get('/list-all-cars-by-brand/:idBrand',orderController.getAllCarByBrand) //Nên dùng <select option> trên UI
router.get('/list-all-cars-by-brand-asc',orderController.getAllCarByPriceASC)
router.get('/list-all-cars-by-brand-desc',orderController.getAllCarByPriceDESC)
//Order cars
router.post('/order-car/:idUser/:idCar',Auth.checkDate,orderController.orderCar);
router.get('/get-car-ordered-by-user/:userId',orderController.getCarOrderedByUserId);
router.get('/get-all-order',range, orderController.getAllOrders);
router.delete('/:orderId',orderController.deleteCarBooking);
router.put('/:orderId',orderController.updateCarBooking);

module.exports = router;