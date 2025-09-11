
import { Sidebar, MobileSidebar } from "@/components/sidebar"
import { ThemeToggle } from "@/components/theme-toggle"

export default function DocsLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="min-h-screen w-full bg-gradient-to-br from-yellow-100 via-white to-green-100">
            {/* Mobile header */}
            <div className="sticky top-0 z-50 flex h-16 items-center justify-between border-b-4 border-black bg-white px-4 md:hidden shadow-[0_4px_0px_0px_rgba(0,0,0,1)]">
                <MobileSidebar />
                <ThemeToggle />
            </div>

            <div className="flex w-full">
                {/* Desktop sidebar */}
                <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
                    <div className="flex flex-col flex-grow pt-5 bg-white border-r-4 border-black overflow-y-auto shadow-[4px_0px_0px_0px_rgba(0,0,0,1)]">
                        <Sidebar />
                    </div>
                </div>

                {/* Main content */}
                <div className="w-full md:pl-64 flex flex-col flex-1">
                    <main className="flex-1 w-full">
                        <div className="py-4 sm:py-6 md:py-8 w-full">
                            <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 w-full">
                                {children}
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    )
}
