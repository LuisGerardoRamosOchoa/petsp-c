const { check, validationResult } = require("express-validator");
const res = require("express/lib/response");

const generateUserValidators = () => [
check('name').notEmpty().isLength({max:50}).withMessage("Invalid name"),
check('lastname').notEmpty().isLength({max:50}).withMessage("Invalid lastname"),
check('phone').notEmpty().isLength({min:10,max:10}).isNumeric().withMessage("Invalid phone (10 numbers) "),
check('address').notEmpty().isLength({max:150}).withMessage("Invalid address")

]
const generateidValidators= () =>[
    check('id').notEmpty().isNumeric().withMessage("Invalid id")
]

const updateUserValidators = () => [
check('id').notEmpty().isNumeric().withMessage("Invalid id"),
check('name').isLength({max:50}).withMessage("Invalid name"),
check('lastname').isLength({max:50}).withMessage("Invalid lastname"),
check('phone').optional().isLength({min:10,max:10}).isNumeric().withMessage("Invalid phone (10 numbers) "),
check('address').isLength({max:150}).withMessage("Invalid address")

]

const report =(req,res,next) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(404).json({
           "success" : false,
           "code" : 404,
           "message" : errors,
           "data" : []


        });
    } next()
}
module.exports = {
    add:[
        generateUserValidators(),
        report
    ],
    id:[
        generateidValidators,
        report
    ],
    update:[
        updateUserValidators(),
        report
    ]

};