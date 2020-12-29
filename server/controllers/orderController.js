const orderService = require('../services/orderService');
class orderController {
    static async getAllCar(req, res, next) {
        try {
            let data = await orderService.getAllCarService(req);
            res.status(200).json({
                status: "SUCCESS",
                errors: null,
                data: {
                    result: data
                }
            });
        } catch (e){
            res.status(200).json({
                status: "FAIL",
                errors: [{
                    code: 1000,
                    message: "SERVER ERROR"
                }],
                data: null
            });
        }
    }
    static async getAllOrders(req, res, next) {
        try {
            let data = await orderService.getAllOrdersService(req);
            res.status(200).json({
                status: "SUCCESS",
                errors: null,
                data: {
                    result: data
                }
            });
        } catch (e){
            res.status(200).json({
                status: "FAIL",
                errors: [{
                    code: 1000,
                    message: "SERVER ERROR"
                }],
                data: null
            });
        }
    }
    static async getAllCarByBrand(req, res, next) {
        try {
            let data = await orderService.getAllCarByBrandService(req);
            res.status(200).json({
                status: "SUCCESS",
                errors: null,
                data: {
                    result: data
                }
            });
        } catch (e){
            res.status(200).json({
                status: "FAIL",
                errors: [{
                    code: 1000,
                    message: "SERVER ERROR"
                }],
                data: null
            });
        }
    }
    static async getAllCarByPriceASC(req, res, next) {
        try {
            let data = await orderService.getAllCarByPriceASCService(req);
            res.status(200).json({
                status: "SUCCESS",
                errors: null,
                data: {
                    result: data
                }
            });
        } catch (e){
            res.status(200).json({
                status: "FAIL",
                errors: [{
                    code: 1000,
                    message: "SERVER ERROR"
                }],
                data: null
            });
        }
    }
    static async getAllCarByPriceDESC(req, res, next) {
        try {
            let data = await orderService.getAllCarByPriceDESCService(req);
            res.status(200).json({
                status: "SUCCESS",
                errors: null,
                data: {
                    result: data
                }
            });
        } catch (e){
            res.status(200).json({
                status: "FAIL",
                errors: [{
                    code: 1000,
                    message: "SERVER ERROR"
                }],
                data: null
            });
        }
    }
    static async orderCar(req, res, next) {
        try {
            let data = await orderService.orderCarService(req);
            res.status(200).json({
                status: "SUCCESS",
                errors: null,
                data: {
                    result: data
                }
            });
        } catch (e){
            res.status(200).json({
                status: "FAIL",
                errors: [{
                    code: 1000,
                    message: "SERVER ERROR"
                }],
                data: null
            });
        }
    }
    static async getCarOrderedByUserId(req, res, next) {
        try {
            let data = await orderService.getCarOrderedByUserIdService(req);
            res.status(200).json({
                status: "SUCCESS",
                errors: null,
                data: {
                    result: data
                }
            });
        } catch (e){
            res.status(200).json({
                status: "FAIL",
                errors: [{
                    code: 1000,
                    message: "SERVER ERROR"
                }],
                data: null
            });
        }
    }
    static async deleteCarBooking(req, res, next) {
        try {
            let data = await orderService.deleteCarBookingService(req);
            res.status(200).json({
                status: "SUCCESS",
                errors: null,
                data: {
                    result: data
                }
            });
        } catch (e){
            res.status(200).json({
                status: "FAIL",
                errors: [{
                    code: 1000,
                    message: "SERVER ERROR"
                }],
                data: null
            });
        }
    }
    static async updateCarBooking(req, res, next) {
        try {
            let data = await orderService.updateCarBookingService(req);
            res.status(200).json({
                status: "SUCCESS",
                errors: null,
                data: {
                    result: data
                }
            });
        } catch (e){
            res.status(200).json({
                status: "FAIL",
                errors: [{
                    code: 1000,
                    message: "SERVER ERROR"
                }],
                data: null
            });
        }
    }
}

module.exports = orderController;