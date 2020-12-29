//config
const queryBuilder = require('../config/database');
const uuid = require('uuid');
const { select } = require('../config/database');
//class
class orderService {
    static async getAllCarService(req) {
        try {
            let result = await queryBuilder.select().table('cars');
            return result;
        } catch (e) {
            console.log(e);
            return e;
        }
    }
    static async getAllOrdersService(req) {
        try {
            let result = await queryBuilder.select().table('order');
            return result;
        } catch (e) {
            console.log(e);
            return e;
        }
    }
    static async getAllCarByBrandASCService(req) {
        try {
            let brand = req.params.idBrand;
            console.log(brand);
            let result = await queryBuilder('cars').where('brand',brand);
            return result;
        } catch (e) {
            console.log(e);
            return e;
        }
    }
    static async getAllCarByPriceASCService(req) {
        try {
            let result = await queryBuilder('cars').orderBy('price')
            return result;
        } catch (e) {
            console.log(e);
            return e;
        }
    }
    static async getAllCarByPriceDESCService(req) {
        try {
            let result = await queryBuilder('cars').orderBy('price','desc');
            return result;
        } catch (e) {
            console.log(e);
            return e;
        }
    }
    static async orderCarService(req) {
        try {
            let param = req.body;
            let userId = req.params.idUser;
            let carId = req.params.idCar;
            let dataInsert = {
                order_id: uuid.v4(),    
                created_date: new Date(),
                pick_location: param.pick_location,
                pick_up_date: param.pick_up_date,
                drop_off_date: param.drop_off_date,
                phone: param.phone,
                user_id: userId,
                car_id: carId
            }
            await queryBuilder('order').insert(dataInsert);
            return "SUCCESS";
        } catch (e) {
            console.log(e);
            return e;
        }
    }
    static async getCarOrderedByUserIdService(req) {
        try {
            let userId = req.params.userId;
            let result = await queryBuilder.select("pick_location","pick_up_date","drop_off_date","created_date","phone").from("order").where('user_id',userId);

            return result;
        } catch (e) {
            console.log(e);
            return e;
        }
    }
    static async deleteCarBookingService(req) {
        try {
            let orderId = req.params.orderId;
            await queryBuilder('orders').where('order_id',orderId).del();
            return "SUCCESS";
        } catch (e) {
            console.log(e);
            return e;
        }
    }
    static async updateCarBookingService(req) {
        try {
            let orderId = req.params.orderId;
            let param = req.body;
            let dataUpdate = {
                pick_location: param.pick_location,
                pick_up_date: param.pick_up_date,
                drop_off_date: param.drop_off_date
            }
            await queryBuilder('orders').where('order_id',orderId).update(dataUpdate);
            let result = await queryBuilder('orders').where('order_id',orderId);
            return result;
        } catch (e) {
            console.log(e);
            return e;
        }
    }
    
}
module.exports = orderService;