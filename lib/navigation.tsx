import { NavItem } from "../types";
import { Table2 } from "lucide-react";

export const NAV_ITEMS: NavItem[] = [
    {
        href: '/dashboard',
        label: 'Dashboard',
        icon: <Table2 />
    }
];

export const getTitle = (pathname: string) : string => {
    return NAV_ITEMS.find((item) => item.href === pathname)?.label ?? 'Dashboard';

}