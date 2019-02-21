//// User model ////

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  googleId: String,
  favorites: [{
    type: Schema.Types.ObjectId,
    ref: 'favorites'
  }]
});

UserSchema.pre('remove', function(next) {
  const Favorite = mongoose.model('favorites');
  Favorite.remove({ _id: { $in: this.favorites } })
    .then(() => next());
});

const User = mongoose.model('users', UserSchema);

module.exports = User;
