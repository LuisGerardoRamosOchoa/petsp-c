const { check, validationResult } = require("express-validator");
const res = require("express/lib/response");

const generatePetsValidators = () => [
check('alias').notEmpty().isLength({max:50}).withMessage("Invalid alias"),
check('type').notEmpty().isIn(['DOG','CAT']).withMessage("Invalid type"),
check('color').notEmpty().isLength({max:50}).withMessage("Invalid color"),
check('notes').notEmpty().isLength({max:150}).withMessage("Invalid notes")


]
const generateidValidators= () =>[
    check('id').notEmpty().isNumeric().withMessage("Invalid id")
]

const updatePetsValidators = () => [
check('id').notEmpty().isNumeric().withMessage("Invalid id"),
check('alias').isLength({max:50}).withMessage("Invalid alias"),
check('type').isIn(['DOG','CAT']).withMessage("Invalid type"),
check('color').isLength({max:50}).withMessage("Invalid color")
check('notes').isLength({max:150}).withMessage("Invalid notes")

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
        generatePetsValidators(),
        report
    ],
    id:[
       generateidValidators,
        report
    ],
    update:[
        updatePetsValidators(),
        report
    ]

};