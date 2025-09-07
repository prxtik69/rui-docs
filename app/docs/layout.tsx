import { Sidebar, MobileSidebar } from "@/components/sidebar"
import { ThemeToggle } from "@/components/theme-toggle"

export default function DocsLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="min-h-screen bg-background">
            {/* Mobile header */}
            <div className="sticky top-0 z-50 flex h-16 items-center justify-between border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-4 md:hidden">
                <MobileSidebar />
                <ThemeToggle />
            </div>

            <div className="flex">
                {/* Desktop sidebar */}
                <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
                    <div className="flex flex-col flex-grow pt-5 bg-background border-r overflow-y-auto">
                        <Sidebar />
                    </div>
                </div>

                {/* Main content */}
                <div className="md:pl-64 flex flex-col flex-1">
                    <main className="flex-1">
                        <div className="py-6">
                            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                                {children}
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    )
}
