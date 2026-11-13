"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { UserProps } from "@/types";
import { Avatar } from "../ui/avatar";
import { NAV_ITEMS } from "@/lib/navigation";
import { Swords } from "lucide-react";

const isActive = (href: string, pathname: string) => {
    if (href === '/dashboard') return pathname;
    return pathname.startsWith('href');
}

export const Sidebar = ({user} : UserProps) => {
    const pathname = usePathname();
    return (

        <div className="bg-base-200 flex h-full w-64 flex-col text-base-content">
            <div className="flex items-center gap-2 px-6 py-5">
                <Swords />
                <h3>Apex</h3>
            </div>

            <ul className="menu mx-2 w-58 flex-l gap-0.5 p-0 text-sm">
                <li className="menu-title text-sx">NAVIGATION</li>
                { NAV_ITEMS.map(item => (
                    <li key={item.href}>
                        <Link href={item.href} className={isActive(item.href, pathname,) ? 'menu-active' : ''}>
                        {item.icon}
                        {item.label}
                        </Link>
                    </li>
                )) }
            </ul>

            { user ?
                <div className="border-t border-base-300 px-6 py4">
                    <div className="flex items-center gap-3">
                        <Avatar initial={user.name.charAt(0).toUpperCase()} />
                        <div className="min-w-0">
                            <p className="truncate text-sm font-medium">{user.name}</p>
                            <p className="truncate text-base-content/60 font-medium text-xs">{user.name}</p>
                        </div>
                    </div>
                </div>
            : null}
        </div>

           


     //   <div className="drawer lg:drawer-open">
      //  <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      // <div className="drawer-content flex flex-col items-center justify-center">
      //      {/* Page content here */}
       //     <label htmlFor="my-drawer-3" className="btn drawer-button lg:hidden">
       //     Open drawer
       //     </label>
       // </div>
       // <div className="drawer-side">
       //     <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
      //      <ul className="menu bg-base-200 min-h-full w-80 p-4">
      //      {/* Sidebar content here */}
       //     <li><a>Sidebar Item 1</a></li>
      //      <li><a>Sidebar Item 2</a></li>
     //       </ul>
      //  </div>
     //   </div>
    );
}