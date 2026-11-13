"use server";

import { redirect } from "next/navigation";
import { clearSession, setSession } from "@/lib/session";
import type { LoginState } from "@/types";


const DEMO_USER = {
    email: 'admin@qeci.com',
    name: 'Administrator'
}

const DEMO_PASSWORD = 'p@ssword';

export async function login( prevState: LoginState, formData: FormData): Promise<LoginState> {
    const email = formData.get("email")?.toString().trim().toLowerCase();
    const password = formData.get("password")?.toString();


    if(!email || !password){
        return { error: 'Please ensure that all fields has value.' };
    }

    if( email !== DEMO_USER.email || password !== DEMO_PASSWORD ) {
        return { error: 'Username or Password Mismatch.' };
    }

    await setSession({email: DEMO_USER.email, name: DEMO_USER.name});

    
    const next = formData.get("next")?.toString() ?? '/dashboard';
    const safexNext = next.startsWith('/') && !next.startsWith('//') ? next : '/dashboard';
    redirect(safexNext);
}

export async function logout() {
    await clearSession();
    redirect('/login');
}