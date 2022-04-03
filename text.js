const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// connect DB
mongoose.connect('mongodb://localhost/pcat-test-db');

//create schema
const PhotoSchema = new Schema({
  title: String,
  description: String,
});

const Photo = mongoose.model('Photo', PhotoSchema);

//create a photo
// Photo.create({
//   title: 'Photo Title 2',
//   description: 'Photo description 2 lorem ipsum',
// });

//read a photo
// Photo.find({}, (err, data) => {
//   console.log(data);
// });

//update photo
// const id = "6249c75eee1ace94fec9106d"

// Photo.findByIdAndUpdate(
//   id,
//   {
//     title: 'Photo Title 1 updated',
//     description: 'Photo description 1 updated',
//   },
//   {
//       new: true
//   },
//   (err, data) => {
//     console.log(data);
//   }
// );

//delete a photo
const id = "6249c8c1b9b3008816b678ca"
Photo.findByIdAndDelete(id, (err,data) => {
    console.log('Photo is removed..')
})


