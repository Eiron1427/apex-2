import { Metadata } from "next";
import { LoginForm } from "@/components/auth/login-form";
import { ThemeToggle } from "@/components/theme-toggle";


export const metadata: Metadata = {
    title: 'Sign in'
}

export default function LoginPage() {
    return (
        <div className="relative flex min-h-svh w-full items-center justify-center bg-base-100 p-4">
            <div className="absolute top-4 right-4">
                <ThemeToggle />
            </div >

            <LoginForm />
        </div>
    );
}
