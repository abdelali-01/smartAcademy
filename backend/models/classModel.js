const mongoose = require('mongoose');

const classSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'A class must have a name'],
      unique: true,
      trim: true,
      maxlength: [40, 'A class name must have less or equal to 40 characters'],
      minlength: [10, 'A class name must have more or equal to 10 characters']
    },
    subtitle: {
      type: String,
      required: [true, 'A class must have a subtitle'],
      unique: true,
      trim: true,
      maxlength: [40, 'A subtitle must have less or equal to 40 characters'],
      minlength: [10, 'A subtitle must have more or equal to 10 characters']
    },
    description: {
      type: String,
      required: [true, 'A class must have a description'],
      trim: true,
      maxlength: [200, 'A class description must have less or equal to 200 characters'],
      minlength: [10, 'A class description must have more or equal to 10 characters']
    },
    duration: {
      type: Number,
      required: [true, 'A class must have a duration']
    },
    difficulty: {
      type: String,
      required: [true, 'A class must have a difficulty'],
      enum: {
        values: ['beginner', 'intermediate', 'pro'],
        message: 'Difficulty must be either: beginner, intermediate, or pro'
      }
    },
    price: {
      type: Number,
      required: [true, 'A class must have a price']
    },
    images: [String],
    instructor: {
      type: String,
      required: [true, 'A class must have an instructor'],
      trim: true,
      maxlength: [40, 'An instructor name must have less or equal to 40 characters'],
      minlength: [5, 'An instructor name must have more or equal to 5 characters']
    },
    curriculum: [
      {
        title: { type: String, required: true },
        lessons: [
          {
            title: { type: String, required: true },
            duration: { type: Number, required: true } // Fix: duration should be a Number
          }
        ]
      }
    ],
    categories: {
      type: String
    },
    subCategories: {
      type: String
    },
    courseTopic: {
      type: String
    },
    courseLang: String,
    courseSubtitle: String
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  }
);


const Class = mongoose.model('Class', classSchema);

module.exports = Class;
