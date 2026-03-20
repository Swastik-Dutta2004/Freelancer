'use server'
import { Registervalidator } from '@/Validation/authSchema';
import vine, { errors } from '@vinejs/vine'


export async function registerAction(formData: FormData) {

    try {
        const data = {
            name: formData.get("name"),
            username: formData.get("username"),
            email: formData.get("email"),
            password: formData.get("password"),
            password_confirmation: formData.get("password_confirmation"),
        }
        const payload = await Registervalidator.validate(data)
        console.log("This is the data of register", payload);

    } catch (error) {
        if (error instanceof errors.E_VALIDATION_ERROR) {
            console.log(error.messages)
        }
    }

}
