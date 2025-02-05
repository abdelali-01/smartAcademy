const Class = require('../models/classModel');
const APIFeatures = require('./../utils/apiFeatures');
const catchAsync = require('./../utils/catchAsync');
const AppError = require('./../utils/appError');



exports.getAllClasses = catchAsync(async (req, res, next) => {
  const features = new APIFeatures(Class.find(), req.query)
    .filter()
    .sort()
    .limitFields()
    .paginate();
  const classes = await features.query;

  // SEND RESPONSE
  res.status(200).json({
    status: 'success',
    results: classes.length,
    data: {
      classes
    }
  });
});

exports.getClass = catchAsync(async (req, res, next) => {
  const classe = await Class.findById(req.params.id);
  // Class.findOne({ _id: req.params.id })

  if (!classe) {
    return next(new AppError('No class found with that ID', 404));
  }

  res.status(200).json({
    status: 'success',
    data: {
      classe
    }
  });
});

exports.createClass = catchAsync(async (req, res, next) => {
  const newClass = await Class.create(req.body);

  res.status(201).json({
    status: 'success',
    data: {
      class: newClass
    }
  });
});

exports.updateClass = catchAsync(async (req, res, next) => {
  const classe = await Class.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  });

  if (!classe) {
    return next(new AppError('No class found with that ID', 404));
  }

  res.status(200).json({
    status: 'success',
    data: {
      classe
    }
  });
});

exports.deleteClass = catchAsync(async (req, res, next) => {
  const classe = await Class.findByIdAndDelete(req.params.id);

  if (!classe) {
    return next(new AppError('No class found with that ID', 404));
  }

  res.status(204).json({
    status: 'success',
    data: null
  });
});
