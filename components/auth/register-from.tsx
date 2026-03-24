'use client'

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Field,
    FieldDescription,
    FieldGroup,
    FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { registerAction } from "@/action/authActions"
import { useActionState } from "react"
import AuthSubmitBtn from "./AuthSubmitBtn"

const initState = {
    status: 0,
    error: null
}

export function RegisterForm({
    className,
    ...props
}: React.ComponentProps<"div">) {

    const [state, formAction] = useActionState(registerAction, {
        status: 0,
        error: null
    })

    return (
        <div className={cn("flex flex-col gap-6 w-full", className)} {...props}>

            <Card className="w-full">
                <CardHeader className="text-center">
                    <CardTitle>Create an account</CardTitle>
                    <CardDescription>
                        Enter your details below to register
                    </CardDescription>
                </CardHeader>

                <CardContent>
                    <form action={formAction}>
                        <FieldGroup>

                            {/* NAME */}
                            <Field>
                                <FieldLabel htmlFor="name">Full Name</FieldLabel>
                                <Input id="name" type="text" name="name" />
                                <span className="text-red-600 text-sm">
                                    {state.error?.name}
                                </span>
                            </Field>

                            {/* USERNAME */}
                            <Field>
                                <FieldLabel htmlFor="username">Username</FieldLabel>
                                <Input id="username" type="text" name="username" />
                                <span className="text-red-600 text-sm">
                                    {state.error?.username}
                                </span>
                            </Field>

                            {/* EMAIL */}
                            <Field>
                                <FieldLabel htmlFor="email">Email</FieldLabel>
                                <Input id="email" type="email" name="email" />
                                <span className="text-red-600 text-sm">
                                    {state.error?.email}
                                </span>
                            </Field>

                            {/* PASSWORD */}
                            <Field>
                                <FieldLabel htmlFor="password">Password</FieldLabel>
                                <Input id="password" type="password" name="password" />
                                <span className="text-red-600 text-sm">
                                    {state.error?.password}
                                </span>
                            </Field>

                            {/* CONFIRM PASSWORD */}
                            <Field>
                                <FieldLabel htmlFor="password_confirmation">
                                    Confirm Password
                                </FieldLabel>
                                <Input
                                    id="password_confirmation"
                                    type="password"
                                    name="password_confirmation"
                                />
                                <span className="text-red-600 text-sm">
                                    {state.error?.password_confirmation}
                                </span>
                            </Field>

                            {/* BUTTONS */}
                            <Field className="flex flex-col gap-2">
                                <AuthSubmitBtn/>

                                {/* GENERAL ERROR */}
                                {state.error?.general && (
                                    <p className="text-red-600 text-center text-sm">
                                        {state.error.general}
                                    </p>
                                )}

                                <FieldDescription className="text-center">
                                    Already have an account? <a href="#">Login</a>
                                </FieldDescription>
                            </Field>

                        </FieldGroup>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}