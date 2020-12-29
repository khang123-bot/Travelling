//config
const queryBuilder = require('../config/database');
const uuid = require('uuid');
//class
class carService {
    static async createCarService(req) {
        try {
            let params = req.body;
            let dataInsert = {
                car_id: uuid.v4(),
                created_date: new Date(),
                brand: params.brand,
                price: params.price,
                image: params.image,    
                type_car: params.type_car,
                production_year: params.production_year,
                available: params.available,
                description: params.description
            }
            await queryBuilder('cars').insert(dataInsert);
            return "SUCCESS";
        } catch (e) {
            console.log(e);
            return e;
        }
    }
    static async updateCarService(req) {
        try {
            let carid = req.params.car_id;
            let params = req.body;
            let dataInsert = {
                updated_date: new Date(),
                brand: params.brand,
                price: params.price,
                image: params.image,
                type_car: params.type_car,
                production_year: params.production_year,
                available: params.available
            }
            await queryBuilder('cars').where("car_id",carid).update(dataInsert);
            return "SUCCESS";
        } catch (e) {
            console.log(e);
            return e;
        }
    }
    static async deleteCarService(req) {
        try {
            let carid = req.params.car_id;
            await queryBuilder('cars').where("car_id",carid).del();
            return "SUCCESS";
        } catch (e) {
            console.log(e);
            return e;
        }
    }
    
    // static async checkUserUpdatedService(req) {
    //     try {
    //         let id = req.params.idUser;
    //         let data = await queryBuilder('user_description').where("user_id",`${id}`).first();
    //         if(typeof(data)==="undefined" || !data){
    //             return "UNEXISTED";
    //         }
    //         return "EXISTED"
    //     } catch (e) {
    //         console.log(e);
    //         return e;
    //     }
    // }
    // static async checkEmailExistService(req) {
    //     try {
    //         let email = req.body.email;
    //         let data = await queryBuilder('user').where("username",`${email}`).first();
    //         if(typeof(data)==="undefined" || !data){
    //             return "UNEXISTED";
    //         }
    //         return "EXISTED"
    //     } catch (e) {
    //         console.log(e);
    //         return e;
    //     }
    // }
    // static async createUserDescService(req) {
    //     try {
    //         let id = req.params.userId;
    //         let params = req.body;
    //         let dataInsert = {
    //             user_id: id,
    //             firstname: params.firstname,
    //             lastname: params.lastname,
    //             address: params.address,
    //             phone: params.phone,
    //             img: params.img,
    //             dateOfBirth: params.dateOfBirth,
    //             country: params.country,
    //             gender: params.gender
    //         }
    //         await queryBuilder('user_description').insert(dataInsert);
    //         return "SUCCESS";
    //     } catch (e) {
    //         console.log(e);
    //         return e;
    //     }
    // }
    // static async getUserByIdService(req) {
    //     try {
    //         const id = req.params.idUser;
    //         let data = await queryBuilder('user').where({user_id: `${id}`}).select('username','displayName')
    //         return data;
    //     } catch (e) {
    //         console.log(e);
    //         return e;
    //     }
    // }
    // static async updateUserPasswordService(req) {
    //     try {
    //         let idUser = req.params.user_id;
    //         let dataUpdate = { password: req.body.password };
    //         await queryBuilder('user').where("user_id", idUser).update(dataUpdate);
    //         return "SUCCESS";
    //     } catch (e) {
    //         console.log(e);
    //         return e;
    //     }
    // }
    // static async updateUserInforService(req) {
    //     try {
    //         let idUser = req.params.user_id;
    //         let params = req.body;
    //         let dataUpdate = {
    //             firstname: params.firstname,
    //             lastname: params.lastname,
    //             address: params.address,
    //             phone: params.phone,
    //             img: params.img,
    //             dateOfBirth: params.dateOfBirth,
    //             country: params.country,
    //             gender: params.gender
    //         };
    //         await queryBuilder('user_description').where("user_id", idUser).update(dataUpdate);
    //         return "SUCCESS";
    //     } catch (e) {
    //         console.log(e);
    //         return e;
    //     }
    // }
    // static async loginByUserAccountService(req) {
    //     try {
    //         let params = req.body;
    //         let email = params.email;
    //         let password = params.password;

    //         let checkEmail = await queryBuilder('user').where("username", email).first();

    //         let checkPass = await queryBuilder('user').where("password", password).first();
            
    //         let dataId = await queryBuilder('user').where({username:`${email}`,password:`${password}`}).select('user_id');  
    //         if(typeof(checkEmail)==='undefined' || typeof(checkPass)==='undefined'){
    //             return "FAIL";
    //         }else{
    //             if(email==checkEmail.username && password==checkPass.password){
    //                 return dataId} else return "FAIL";
    //         }
    //     } catch (e) {
    //         console.log(e);
    //         return e;
    //     }
    // }
    // static async deleteUserService(req) {
    //     try {
    //         let userid = req.params.user_id;
    //         await queryBuilder('user').where("user_id",userid).del();
    //         await queryBuilder('user_description').where("user_id",userid).del();
    //         return "SUCCESS";
    //     } catch (e) {
    //         console.log(e);
    //         return e;
    //     }
    // }
}

module.exports = carService;