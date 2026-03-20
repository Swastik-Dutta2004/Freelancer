"use client"

import { useState } from "react"
import Image from "next/image"
import { LoginForm } from "@/components/auth/login-form"
import { RegisterForm } from "@/components/auth/register-from"
import { Button } from "@/components/ui/button"

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true)

  return (
    <div className="flex min-h-screen w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm flex flex-col items-center gap-6">

        {/* Image */}
        <Image
          src="/images/logo_512.png" // fill later
          alt="auth image"
          width={100}
          height={100}
        />

        {/* Form */}
        {isLogin ? <LoginForm /> : <RegisterForm />}

        {/* Toggle */}
        <Button
          variant="ghost"
          onClick={() => setIsLogin(!isLogin)}
          className="w-full"
        >
          {isLogin
            ? "Don't have an account? Register"
            : "Already have an account? Login"}
        </Button>
      </div>
    </div>
  )
}