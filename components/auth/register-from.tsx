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
import Image from "next/image"
import { registerAction } from "@/action/authActions"

const initState = {
    status: 0,
    error: {}
}

export function RegisterForm({
    className,
    ...props
}: React.ComponentProps<"div">) {
    return (
        <div className={cn("flex flex-col gap-6 w-full", className)} {...props}>
            {/* Logo */}
            <div className="flex flex-col items-center text-center">
                <p className="font-bold text-lg mt-2">Freelancer</p>
                <p className="text-sm text-muted-foreground">
                    Create your account
                </p>
            </div>

            {/* Card */}
            <Card className="w-full">
                <CardHeader className="text-center">
                    <CardTitle>Create an account</CardTitle>
                    <CardDescription>
                        Enter your details below to register
                    </CardDescription>
                </CardHeader>

                <CardContent>
                    <form action={registerAction}>
                        <FieldGroup>
                            <Field>
                                <FieldLabel htmlFor="name">Full Name</FieldLabel>
                                <Input id="name" type="text" name="name" 
                                 />
                            </Field>

                            <Field>
                                <FieldLabel htmlFor="usernmae">Username</FieldLabel>
                                <Input id="name" type="text" name="username" 
                                 />
                            </Field>

                            <Field>
                                <FieldLabel htmlFor="email">Email</FieldLabel>
                                <Input id="email" type="email" name="email" 
                                 />
                            </Field>    

                            <Field>
                                <FieldLabel htmlFor="password">Password</FieldLabel>
                                <Input id="password" type="password" name="password" 
                                 />
                            </Field>

                            <Field>
                                <FieldLabel htmlFor="password_confirmation">
                                    Confirm Password
                                </FieldLabel>
                                <Input
                                    id="confirmPassword"
                                    type="password"
                                    name="password_confirmation"  // ✅ MUST be this
                                    
                                    
                                />
                            </Field>

                            <Field className="flex flex-col gap-2">
                                <Button className="w-full">Register</Button>
                                <Button variant="outline" className="w-full">
                                    Sign up with Google
                                </Button>

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