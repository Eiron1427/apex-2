import { Metadata } from "next";
import { LoginForm } from "@/components/auth/login-form";
import { ThemeToggle } from "@/components/theme-toggle";
import { Eclipse } from "lucide-react";


export const metadata: Metadata = {
    title: 'Sign in'
}

export default async function LoginPage({searchParams} : { searchParams: Promise<{ next?: string }>}) {
    const { next } = await searchParams;
    return (
        <div className="relative flex min-h-svh w-full items-center justify-center bg-base-100 p-4 w-[10px] h-[10px]">
            <div className="absolute top-4 right-4">
                <ThemeToggle />
            </div >

            <LoginForm/>
        </div>
    );
}