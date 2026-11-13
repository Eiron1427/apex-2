import { getSession } from "@/lib/session";
import { Sidebar } from "@/components/layout/side-nav";
import { ThemeToggle } from "@/components/theme-toggle";
import type { layoutProps } from "@/types";

export default async function AppLayout({ children }: layoutProps) {
    const user = await getSession();

    return (
        <div className="drawer lg:drawer-open">
            <div className="absolute top-4 right-4">
                <ThemeToggle />
            </div >
            <input
                id="dashboard-drawer"
                type="checkbox"
                className="drawer-toggle" />


            <div className="drawer-content flex min-h-svh flex-col">
                <main className="flex-l p-4 sm:p-6 lg:p-8">{children}</main>
            </div>

            <div className="drawer-side z-40">
                <label
                    htmlFor="dashboard-drawer"
                    className="drawer-overlay"
                    aria-label="Toggle Drawer"
                />

                <Sidebar user={user} />
            </div>
        </div>
    );
}

