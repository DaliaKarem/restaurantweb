const { check} = require('express-validator');
const validatorMiddelWare=require('../../middleware/validator')

exports.validateSpecificbrand=[
    check('id').isMongoId().withMessage('Invalid Id'),
     validatorMiddelWare,
]

exports.validateAddbrand=[
    check('name').notEmpty().withMessage("Name Req").isLength({min:3}).withMessage("To Short").isLength({max:30}).withMessage("To long"),
     validatorMiddelWare,
]

exports.validateUpdatebrand=[
    check('id').isMongoId().withMessage('Invalid Id'),
     validatorMiddelWare,
]


exports.validateDeletebrand=[
    check('id').isMongoId().withMessage('Invalid Id'),
     validatorMiddelWare,
]