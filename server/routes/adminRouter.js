const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');
const range = require('../middlewares/range');

router.get('/getOrder',range, adminController.getOrder);
router.get('/',adminController.getAllUser)
router.post("/",adminController.createAdmin)
router.post("/search-user",adminController.searchUser)
router.delete("/:idUser",adminController.deleteUser);
// router.post('/create-car', carController.createCar);
// router.put('/update-car/:car_id',carController.updateCar);
// router.delete('/delete-car/:car_id',carController.deleteCar);
// router.post('/login',userController.loginByUserAccount)

// router.get('/get-user-by-id/:idUser',userController.getUserById);
// router.get('/update-checked/:idUser',userController.checkUserUpdated)    
// router.put('/update-user-password-api/:user_id',userController.updateUserPassword);

// router.post('/create-user-desc/:userId', userController.createUserDesc)
// router.put('/update-user-information-api/:user_id',userController.updateUserInfor)

// router.post('/check-email-exist',userController.checkEmailExist)
// router.delete('/delete-user/:user_id',userController.deleteUser)

module.exports = router;