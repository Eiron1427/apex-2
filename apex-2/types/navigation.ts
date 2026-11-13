import { ReactNode} from 'react';
import type { SessionUser } from "./auth";

export type NavItem = {
    href: string;
    label: string;
    icon: ReactNode
}

export type UserProps = {
    user?: SessionUser | null;
}