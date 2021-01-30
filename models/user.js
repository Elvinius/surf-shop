const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
const Schema = mongoose.Schema;

// We don't add username and passwords as passport does it automatically
const UserSchema = new Schema({
  email: String,
  image: String,
  posts: [
      {
          type: Schema.Types.ObjectId,
          ref: 'Post'
      }
  ]
});

UserSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model('User', UserSchema);