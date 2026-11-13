"use client";

import { useActionState } from "react";
import { login } from "@/app/action/auth";
import type { LoginState } from "@/types";
import { Card, CardBody, FormField } from "../ui";
import { ShieldKeyhole, ShieldUser } from "lucide-react";

const initialState: LoginState = {};

export const LoginForm = ({ redirectTo = "/dashboard" }: { redirectTo?: string }) => {
    const [state, formAction, isPending] = useActionState(login, initialState);

    return (
        <Card className="rounded-md px-3 py-4">
            <CardBody>
                <h4 className="text-xl flex item-center"><ShieldUser className="mr-1" />Please login to use the service.</h4>
                { state.error ? (
                    <div role="alert" className="alert alert-error">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>{ state.error }</span>
                    </div>
                ) : null }
                <form action={formAction}>
                    <input type="hidden" value={redirectTo} />

                    <FormField label="Email:" htmlFor="email">
                        <input type="email" id="email" name="email" className="input w-full" />
                    </FormField>
                    <FormField label="Password:" htmlFor="password">
                        <input type="password" id="password" name="password" className="input w-full" />
                    </FormField>
                    <button className="btn btn-primary w-full mt-3"><ShieldKeyhole />Login</button>
                </form>
            </CardBody>
        </Card>
    );
};