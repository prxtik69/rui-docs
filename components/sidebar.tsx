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
    X
} from "lucide-react"
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet"

const navigation = [
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
                title: "Conditionals",
                href: "/docs/conditionals",
                icon: BookOpen,
            },
        ],
    },
    {
        title: "Advanced",
        items: [
            {
                title: "Functions",
                href: "/docs/functions",
                icon: Code,
            },
            {
                title: "Booleans & Logic",
                href: "/docs/booleans",
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
]

interface SidebarProps {
    className?: string
}

function SidebarContent() {
    const pathname = usePathname()

    return (
        <div className="px-3 py-4">
            <div className="space-y-1">
                {navigation.map((section) => (
                    <div key={section.title} className="space-y-1">
                        <h4 className="px-2 text-xs font-medium text-muted-foreground">
                            {section.title}
                        </h4>
                        {section.items.map((item) => {
                            const isActive = pathname === item.href
                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={cn(
                                        "flex items-center space-x-2 rounded-md px-2 py-1.5 text-sm transition-colors hover:bg-accent hover:text-accent-foreground",
                                        isActive && "bg-accent text-accent-foreground"
                                    )}
                                >
                                    <item.icon className="h-4 w-4" />
                                    <span>{item.title}</span>
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
            <div className="space-y-4 py-4">
                <div className="px-3 py-2">
                    <Link href="/" className="flex items-center space-x-2">
                        <Image
                            src="/logo.svg"
                            alt="Rui Logo"
                            width={32}
                            height={32}
                            className="h-8 w-8"
                        />
                        <span className="text-lg font-semibold">Rui</span>
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
                <Button variant="ghost" size="icon" className="md:hidden">
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Toggle sidebar</span>
                </Button>
            </SheetTrigger>
            <SheetContent side="left" className="p-0 w-80 max-w-[85vw]">
                <div className="flex h-full flex-col">
                    <div className="flex items-center justify-between p-4">
                        <Link href="/" className="flex items-center space-x-2">
                            <Image
                                src="/logo.svg"
                                alt="Rui Logo"
                                width={32}
                                height={32}
                                className="h-8 w-8"
                            />
                            <span className="text-lg font-semibold">Rui</span>
                        </Link>
                        <SheetClose asChild>
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                                <X className="h-4 w-4" />
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
