const { check} = require('express-validator');
const validatorMiddelWare=require('../../middleware/validator')

exports.validateSpecificSubCateg=[
    check('id').isMongoId().withMessage('Invalid Id'),
     validatorMiddelWare,
]

exports.validateAddSubCateg=[
    check('name').notEmpty().withMessage("Name Req").isLength({min:3}).withMessage("To Short").isLength({max:30}).withMessage("To long"),
    check('category').notEmpty().withMessage("subCate must belong to Category").isMongoId().withMessage("Category Req"),
    validatorMiddelWare,
]

exports.validateUpdateSubCateg=[
    check('id').isMongoId().withMessage('Invalid Id'),
     validatorMiddelWare,
]


exports.validateDeleteSubCateg=[
    check('id').isMongoId().withMessage('Invalid Id'),
     validatorMiddelWare,
]