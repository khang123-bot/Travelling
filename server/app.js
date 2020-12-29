const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
let app = express();

app.use(cors());
//Router
let userRouter = require('./routes/userRouter');
let orderRouter = require('./routes/orderRouter');
let carRouter = require('./routes/carRouter');
let adminRouter = require('./routes/adminRouter');

//bodyParser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//api
app.get('/api',(req,res,next)=>{
    res.status(200).json({
        status:"SUCCESS",
        errors: null,
        data:{
            result: "Truy cap thanh cong API"
        }
    });
});

//use router
app.use('/user',userRouter);
app.use('/order',orderRouter);
app.use('/car',carRouter);
app.use('/admin',adminRouter);

//URL typed incorrect with API
app.use('*',(req,res,next)=>{
    res.status(200).json({
        status: "SUCCESS",
        errors: [
            {
                code: 404,
                message: "Khong tim thay API"
            }
        ],
        data: null
    });
});

module.exports = app;