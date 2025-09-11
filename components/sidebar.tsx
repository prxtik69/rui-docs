"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
    BookOpen,
    Code,
    Play,
    Settings,
    Zap,
    Terminal,
    FileCode,
    Heart,
    Menu,
    X,
    GitBranch
} from "lucide-react"
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet"

interface NavigationItem {
    title: string
    href: string
    icon: React.ComponentType<{ className?: string }>
    badge?: string
}

const navigation: Array<{
    title: string
    items: NavigationItem[]
}> = [
        {
            title: "Getting Started",
            items: [
                {
                    title: "Installation",
                    href: "/docs/installation",
                    icon: Settings,
                },
                {
                    title: "Hello World",
                    href: "/docs/hello-world",
                    icon: Play,
                },
            ],
        },
        {
            title: "Language Basics",
            items: [
                {
                    title: "Data Types",
                    href: "/docs/data-types",
                    icon: Code,
                },
                {
                    title: "Variables",
                    href: "/docs/variables",
                    icon: Code,
                },
                {
                    title: "Operators",
                    href: "/docs/operators",
                    icon: Zap,
                },
                {
                    title: "Functions",
                    href: "/docs/functions",
                    icon: BookOpen,
                },
                {
                    title: "Booleans & Logic",
                    href: "/docs/booleans",
                    icon: Heart,
                },
                {
                    title: "Conditionals",
                    href: "/docs/conditionals",
                    icon: FileCode,
                },
            ],
        },
        {
            title: "Data Structures",
            items: [
                {
                    title: "Arrays & Objects",
                    href: "/docs/data-structures",
                    icon: Code,
                    badge: "NEW",
                },
                {
                    title: "Strings",
                    href: "/docs/strings",
                    icon: FileCode,
                    badge: "NEW",
                },
                {
                    title: "Built-in Functions",
                    href: "/docs/built-in-functions",
                    icon: Zap,
                },
            ],
        },
        {
            title: "Advanced Topics",
            items: [
                {
                    title: "Error Handling",
                    href: "/docs/error-handling",
                    icon: Heart,
                },
                {
                    title: "Examples",
                    href: "/docs/examples",
                    icon: BookOpen,
                },
                {
                    title: "Recent Additions",
                    href: "/docs/recent-additions",
                    icon: Zap,
                },
            ],
        },
        {
            title: "Tools",
            items: [
                {
                    title: "CLI Usage",
                    href: "/docs/cli",
                    icon: Terminal,
                },
                {
                    title: "VS Code Integration",
                    href: "/docs/vscode",
                    icon: FileCode,
                },
            ],
        },
        {
            title: "Community",
            items: [
                {
                    title: "Contributing",
                    href: "/docs/contributing",
                    icon: Heart,
                },
            ],
        },
        {
            title: "Releases",
            items: [
                {
                    title: "Releases & Changelog",
                    href: "/docs/releases",
                    icon: GitBranch,
                },
            ],
        },
    ]

interface SidebarProps {
    className?: string
}

function SidebarContent() {
    const pathname = usePathname()

    return (
        <div className="px-4 py-6">
            <div className="space-y-6">
                {navigation.map((section) => (
                    <div key={section.title} className="space-y-3">
                        <h4 className="px-3 py-2 text-xs font-black text-black uppercase tracking-wider bg-yellow-200 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                            {section.title}
                        </h4>
                        {section.items.map((item) => {
                            const isActive = pathname === item.href
                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={cn(
                                        "flex items-center justify-between px-3 py-2 text-sm font-bold transition-all duration-150 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]",
                                        isActive
                                            ? "bg-green-400 text-black"
                                            : "bg-white text-black hover:bg-yellow-200"
                                    )}
                                >
                                    <div className="flex items-center space-x-3">
                                        <item.icon className="h-5 w-5" />
                                        <span>{item.title}</span>
                                    </div>
                                    {item.badge && (
                                        <span className="px-2 py-1 text-xs font-black text-white bg-red-500 border border-black shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] uppercase tracking-wider">
                                            {item.badge}
                                        </span>
                                    )}
                                </Link>
                            )
                        })}
                    </div>
                ))}
            </div>
        </div>
    )
}

export function Sidebar({ className }: SidebarProps) {
    return (
        <div className={cn("pb-12", className)}>
            <div className="space-y-6 py-6">
                <div className="px-4 py-4 border-b-4 border-black">
                    <Link href="/" className="flex items-center space-x-3">
                        <Image
                            src="/logo.svg"
                            alt="Rui Logo"
                            width={32}
                            height={32}
                            className="h-8 w-8"
                        />
                        <span className="text-2xl font-black text-black">Rui</span>
                    </Link>
                </div>
                <SidebarContent />
            </div>
        </div>
    )
}

export function MobileSidebar() {
    const [open, setOpen] = React.useState(false)
    const pathname = usePathname()

    // Close sidebar when route changes
    React.useEffect(() => {
        setOpen(false)
    }, [pathname])

    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden border-2 border-black bg-yellow-400 text-black hover:bg-yellow-500 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Toggle sidebar</span>
                </Button>
            </SheetTrigger>
            <SheetContent side="left" className="p-0 w-80 max-w-[85vw] bg-white border-r-4 border-black">
                <div className="flex h-full flex-col">
                    <div className="flex items-center justify-between p-6 border-b-4 border-black">
                        <Link href="/" className="flex items-center space-x-3">
                            <Image
                                src="/logo.svg"
                                alt="Rui Logo"
                                width={32}
                                height={32}
                                className="h-8 w-8"
                            />
                            <span className="text-2xl font-black text-black">Rui</span>
                        </Link>
                        <SheetClose asChild>
                            <Button variant="ghost" size="icon" className="h-10 w-10 border-2 border-black bg-red-400 text-black hover:bg-red-500">
                                <X className="h-5 w-5" />
                                <span className="sr-only">Close sidebar</span>
                            </Button>
                        </SheetClose>
                    </div>
                    <div className="flex-1 overflow-auto">
                        <SidebarContent />
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    )
}
