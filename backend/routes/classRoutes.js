const express = require('express');
const classController = require('../controllers/classController');
const authController = require('../controllers/authController');

const router = express.Router();

// router.param('id', classController.checkID);

router
  .route('/')
  .get(authController.protect, classController.getAllClasses) 
  .post(classController.createClass);

router
  .route('/:id')
  .get(classController.getClass)
  .patch(classController.updateClass)
  .delete(
    authController.protect,
    classController.deleteClass
  );

module.exports = router;
