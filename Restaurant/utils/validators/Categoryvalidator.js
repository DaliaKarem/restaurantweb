const { check} = require('express-validator');
const validatorMiddelWare=require('../../middleware/validator')

exports.validateSpecificCateg=[
    check('id').isMongoId().withMessage('Invalid Id'),
     validatorMiddelWare,
]

exports.validateAddCateg=[
    check('name').notEmpty().withMessage("Name Req").isLength({min:3}).withMessage("To Short").isLength({max:30}).withMessage("To long"),
     validatorMiddelWare,
]

exports.validateUpdateCateg=[
    check('id').isMongoId().withMessage('Invalid Id'),
     validatorMiddelWare,
]


exports.validateDeleteCateg=[
    check('id').isMongoId().withMessage('Invalid Id'),
     validatorMiddelWare,
]