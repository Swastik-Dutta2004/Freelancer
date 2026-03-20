import vine from '@vinejs/vine'
import {cusrtomErrorReporter} from "@/Validation/customErrorRepoter"

vine.errorReporter = () => new cusrtomErrorReporter()

const registerSchema = vine.object({
  name: vine.string().minLength(2).maxLength(150),
  username: vine.string().minLength(2).maxLength(50),
  email: vine.string().email(),

  password: vine
    .string()
    .minLength(8)
    .maxLength(32)
    .confirmed(),

  password_confirmation: vine.string() 
})

export const Registervalidator = vine.create(registerSchema)