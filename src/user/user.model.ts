import { model, Schema } from 'mongoose'

const userSchema = new Schema({
  login: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    default: null,
  },
  name: {
    type: String,
    default: null,
  },
  surname: {
    type: String,
    default: null,
  },
  patronymic: {
    type: String,
    default: null,
  },
})

export default model('users', userSchema)
