'use server'

import { Registervalidator } from '@/Validation/authSchema'
import { errors } from '@vinejs/vine'
import { createClient } from "@/lib/supabase/SupabaseServer"
import { redirect } from 'next/navigation'

type registerState = {
    status: number
    error: Record<string, string> | null
}

export async function registerAction(
    prevState: registerState,
    formData: FormData
): Promise<registerState> {

    const supabase = await createClient();

    try {
        const data = {
            name: formData.get("name"),
            username: formData.get("username"),
            email: formData.get("email"),
            password: formData.get("password"),
            password_confirmation: formData.get("password_confirmation"),
        }

        const payload = await Registervalidator.validate(data)
        console.log("Saving user to DB...")

        const { data: userData, error } = await supabase.from("user").select("id").eq("username", payload.username)
        console.log("The user data: ", userData);
        console.log("The error is: ", error);

        if (userData && userData?.length > 0) {
            return {
                status: 400,
                error: {
                    username: "Username is already taken"
                }
            }
        }

        const { error: signupErr } = await supabase.auth.signUp({
            email: payload.email,
            password: payload.password,
            options: {
                data: {
                    name: payload.name,
                    username: payload.username
                }
            }
        })

        if (signupErr) {
            console.log("SIGNUP ERROR FULL:", signupErr)

            return {
                status: 400,
                error: {
                    general: signupErr.message
                }
            }
        }

        await supabase.auth.signInWithPassword({
            email: payload.email,
            password: payload.password
        })

        return {
            status: 200,
            error: null
        }


    } catch (error) {
        console.log("RAW ERROR:", error)

        if (error instanceof errors.E_VALIDATION_ERROR) {
            const fieldErrors: Record<string, string> = {}
            const messages = error.messages as Record<string, string[]>
            Object.entries(messages).forEach(([field, msgs]) => {
                fieldErrors[field] = Array.isArray(msgs) ? msgs[0] : msgs
            })
            return { status: 400, error: fieldErrors }
        }

        return {
            status: 500,
            error: { general: "Something went wrong" }
        }
    }

    redirect("/")  
}