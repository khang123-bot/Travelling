const adminService = require('../services/adminService');
class adminController {
    static async getOrder(req, res, next) {
        console.log(11111);
        try {
            let data = await adminService.getOrderService(req);
            res.status(200).json({
                status: "SUCCESS",
                errors: null,
                data: {
                    result: data
                }
            });
        } catch (e) {
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
    static async getAllUser(req, res, next) {
        try {
            let data = await adminService.getAllUserService(req);
            res.status(200).json({
                status: "SUCCESS",
                errors: null,
                data: {
                    result: data
                }
            });
        } catch (e) {
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
    static async searchUser(req, res, next) {
        try {
            let data = await adminService.searchUserService(req);
            res.status(200).json({
                status: "SUCCESS",
                errors: null,
                data: {
                    result: data
                }
            });
        } catch (e) {
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
    static async updateCar(req, res, next) {
        try {
            let data = await carService.updateCarService(req);
            res.status(200).json({
                status: "SUCCESS",
                errors: null,
                data: {
                    result: data
                }
            });
        } catch (e) {
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
    static async deleteCar(req, res, next) {
        try {
            let data = await carService.deleteCarService(req);
            res.status(200).json({
                status: "SUCCESS",
                errors: null,
                data: {
                    result: data
                }
            });
        } catch (e) {
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
    // static async checkEmailExist(req, res, next) {
    //     try {
    //         let data = await userService.checkEmailExistService(req);
    //         res.status(200).json({
    //             status: "SUCCESS",
    //             errors: null,
    //             data: {
    //                 result: data
    //             }
    //         });
    //     } catch (e) {
    //         res.status(200).json({
    //             status: "FAIL",
    //             errors: [{
    //                 code: 1000,
    //                 message: "SERVER ERROR"
    //             }],
    //             data: null
    //         });
    //     }
    // }
    static async createAdmin(req, res, next) {
        try {
            let data = await adminService.createAdminService(req);
            res.status(200).json({
                status: "SUCCESS",
                errors: null,
                data: {
                    result: data
                }
            });
        } catch (e) {
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
    static async deleteUser(req, res, next) {
        try {
            let data = await adminService.deleteUserService(req);
            res.status(200).json({
                status: "SUCCESS",
                errors: null,
                data: {
                    result: data
                }
            });
        } catch (e) {
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
    // static async checkUserUpdated(req, res, next) {
    //     try {
    //         let data = await userService.checkUserUpdatedService(req);
    //         res.status(200).json({
    //             status: "SUCCESS",
    //             errors: null,
    //             data: {
    //                 result: data
    //             }
    //         });
    //     } catch (e) {
    //         res.status(200).json({
    //             status: "FAIL",
    //             errors: [{
    //                 code: 1000,
    //                 message: "SERVER ERROR"
    //             }],
    //             data: null
    //         });
    //     }
    // }
    // static async updateUserPassword(req, res, next) {
    //     try {
    //         let data = await userService.updateUserPasswordService(req);
    //         res.status(200).json({
    //             status: "SUCCESS",
    //             errors: null,
    //             data: {
    //                 result: data
    //             }
    //         });
    //     } catch (e) {
    //         res.status(200).json({
    //             status: "FAIL",
    //             errors: [{
    //                 code: 1000,
    //                 message: "SERVER ERROR"
    //             }],
    //             data: null
    //         });
    //     }
    // }
    // static async updateUserInfor(req, res, next) {
    //     try {
    //         let data = await userService.updateUserInforService(req);
    //         res.status(200).json({
    //             status: "SUCCESS",
    //             errors: null,
    //             data: {
    //                 result: data
    //             }
    //         });
    //     } catch (e) {
    //         res.status(200).json({
    //             status: "FAIL",
    //             errors: [{
    //                 code: 1000,
    //                 message: "SERVER ERROR"
    //             }],
    //             data: null
    //         });
    //     }
    // }
    // static async deleteUser(req, res, next) {
    //     try {
    //         let data = await userService.deleteUserService(req);
    //         res.status(200).json({
    //             status: "SUCCESS",
    //             errors: null,
    //             data: {
    //                 result: data
    //             }
    //         });
    //     } catch (e) {
    //         res.status(200).json({
    //             status: "FAIL",
    //             errors: [{
    //                 code: 1000,
    //                 message: "SERVER ERROR"
    //             }],
    //             data: null
    //         });
    //     }
    // }
    // static async loginByUserAccount(req, res, next) {
    //     try {
    //         let data = await userService.loginByUserAccountService(req);
    //         res.status(200).json({
    //             status: "SUCCESS",
    //             errors: null,
    //             data: {
    //                 result: data
    //             }
    //         });
    //     } catch (e) {
    //         res.status(200).json({
    //             status: "FAIL",
    //             errors: [{
    //                 code: 1000,
    //                 message: "SERVER ERROR"
    //             }],
    //             data: null
    //         });
    //     }
    // }
    // static async getUserById(req, res, next) {
    //     try {
    //         let data = await userService.getUserByIdService(req);
    //         res.status(200).json({
    //             status: "SUCCESS",
    //             errors: null,
    //             data: {
    //                 result: data
    //             }
    //         });
    //     } catch (e) {
    //         res.status(200).json({
    //             status: "FAIL",
    //             errors: [{
    //                 code: 1000,
    //                 message: "SERVER ERROR"
    //             }],
    //             data: null
    //         });
    //     }
    // }
}

module.exports = adminController;