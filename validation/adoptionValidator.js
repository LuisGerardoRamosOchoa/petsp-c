const { check, validationResult } = require("express-validator");
const res = require("express/lib/response");

const generateAdoptionValidators = () => [
check('user_id').notEmpty().isLength({max:50}).isNumeric().withMessage("Invalid user"),
check('pet_id').notEmpty().isLength({max:50}).isNumeric().withMessage("Invalid pet"),
check('date').notEmpty().isLength({min:10,max:10}).isNumeric().withMessage("Invalid date "),


]
const generateidValidators= () =>{
    check('id').notEmpty().isNumeric().withMessage("Invalid id")
}

const updateAdoptionValidators = () => {
check('id').notEmpty().isNumeric().withMessage("Invalid id"),
check('iser_id').isLength({max:50}).isNumeric().withMessage("Invalid user"),
check('pet_id').isLength({max:50}).isNumeric().withMessage("Invalid "),
check('date').isLength({min:10,max:10}).isNumeric().withMessage("Invalid date")

}

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
        generateAdoptionValidators(),
        report
    ],
    id:[
        generateidValidators,
        report
    ],
    update:[
        updateAdoptionValidators(),
        report
    ]

};