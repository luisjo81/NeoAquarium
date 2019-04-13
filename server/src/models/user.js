import mongoose from 'mongoose'
const Schema = mongoose.Schema

const UserSchema = new Schema({
    userName: String,
    name: String,
    lastName: String,
    password: String,
    email: String,
    cell: String
})

export default mongoose.model('User', UserSchema)
