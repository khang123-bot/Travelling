const passwordValidator = require('password-validator');
const emailValidator = require('email-validator');
const dateValidator = require("validate-date");

class Auth {
    static checkUsername(req, res, next) {
        var schema = new passwordValidator();
        schema
            .is().min(8)
            .is().max(32)
            .has().uppercase()
            .has().lowercase()
            .has().digits(1)
            .has().not().spaces()
        if (emailValidator.validate(req.body.username) && schema.validate(req.body.password)) {
            if (req.body.password !== req.body.confirmPassword) {
                res.status(200).json({
                    status: "INVALID PASSWORD",
                    errors: [{
                        code: 1000,
                        message: "INVALID PASSWORD"
                    }],
                    data: null
                })
            }
            else {
                next();
            }
        } else {
            res.status(200).json({
                status: "INVALID",
                errors: [{
                    code: 1000,
                    message: "INVALID FORMAT"
                }],
                data: null
            })
        }
    }
    static checkUsernameOnly(req, res, next) {
        if (emailValidator.validate(req.body.username)) {
            next();
        } else {
            res.status(200).json({
                status: "INVALID",
                errors: [{
                    code: 1000,
                    message: "INVALID EMAIL"
                }],
                data: null
            })
        }
    }
    static checkDate(req, res, next) {
        const pickupdate = req.body.pick_up_date;
        const dropoffdate = req.body.drop_off_date;
        if (isValidDate(pickupdate) && isValidDate(dropoffdate)) {
            var d1 = new Date(pickupdate);
            var d2 = new Date(dropoffdate);
            if (d1 <= d2) {
                next();
            }
            else {
                res.status(200).json({
                    status: "INVALID",
                    errors: [{
                        code: 1000,
                        message: "DROP OFF DATE CAN NOT BE OCCURED BEFORE HIRING DATE"
                    }],
                    data: null
                })
            }
        } else {
            res.status(200).json({
                status: "INVALID",
                errors: [{
                    code: 1000,
                    message: "INVALID DATE FORMAT"
                }],
                data: null
            })
        }
    }
}
function isValidDate(date) {
    var matches = /(\d{4})[-\/](\d{2})[-\/](\d{2})/.exec(date);
    if (matches == null) return false;
    var day = matches[3];
    var month = matches[2] - 1;
    var year = matches[1];
    var composedDate = new Date(year, month, day);
    return composedDate.getDate() == day &&
        composedDate.getMonth() == month &&
        composedDate.getFullYear() == year;
}

module.exports = Auth;
