const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const schema = new Schema({
    username: { type: String, unique: false, required: true },
    email: { type: String, unique: true, required: true },
    admin: { type: Boolean, unique: false, required: false, default: false },
    guest: { type: Boolean, unique: false, required: false, default: false },
    paidBeginner: { type: Boolean, unique: false, required: false, default: false },
    paidItermediate: { type: Boolean, unique: false, required: false, default: false },
    paidAdvanced: { type: Boolean, unique: false, required: false, default: false },
    hash: { type: String, required: false },
    createdDate: { type: Date, default: Date.now },
});

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('User', schema);
