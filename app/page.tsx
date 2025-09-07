import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ThemeToggle } from "@/components/theme-toggle"
import { Zap, Terminal, FileCode } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 flex h-16 items-center justify-between max-w-7xl">
          <div className="flex items-center space-x-2">
            <Image
              src="/logo.svg"
              alt="Rui Logo"
              width={32}
              height={32}
              className="h-8 w-8"
            />
            <span className="text-xl font-bold">Rui</span>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/docs/installation">
              <Button variant="ghost">Docs</Button>
            </Link>
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden h-screen flex items-center justify-center">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />

        <div className="relative container mx-auto px-4 py-24 md:py-32 lg:py-40">
          <div className="mx-auto max-w-5xl text-center">
            <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm font-medium">
              Simple • Beginner-friendly
            </Badge>
            <h1 className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl mb-8 leading-tight">
              Welcome to{" "}
              <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Rui
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
              A beginner-friendly, lightweight programming language inspired by JavaScript.
              Perfect for learning programming fundamentals with intuitive and readable syntax.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/docs/installation">
                <Button size="lg" className="w-full sm:w-auto px-8 py-3 text-lg font-semibold">
                  Get Started
                </Button>
              </Link>
              <Link href="/docs/hello-world">
                <Button variant="outline" size="lg" className="w-full sm:w-auto px-8 py-3 text-lg font-semibold">
                  Hello World
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Code Example Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Simple, Readable Code
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Rui&apos;s syntax is designed to be intuitive and easy to understand.
                Write clean, readable code without complex syntax rules.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="text-sm text-muted-foreground">No semicolons required</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="text-sm text-muted-foreground">Implicit typing</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="text-sm text-muted-foreground">Clear, descriptive keywords</span>
                </div>
              </div>
            </div>
            <div className="bg-background rounded-lg border p-6 shadow-sm">
              <pre className="text-sm overflow-x-auto">
                <code className="text-slate-800 dark:text-slate-200">{`// Simple variable declaration
suppose name = "Alice"
suppose age = 25

// Easy function definition
define greet(person) {
    write("Hello, " + person + "!")
}

// Clean conditional logic
if (age >= 18) {
    write("You are an adult")
} else {
    write("You are a minor")
}

// Call the function
greet(name)`}</code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}


      {/* Quick Start Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Get Started in Minutes</h2>
            <p className="text-lg text-muted-foreground">
              Install Rui and write your first program in just a few steps.
            </p>
          </div>
          <div className="bg-background rounded-xl border shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Terminal className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">1. Install</h3>
                <p className="text-sm text-muted-foreground">Install Rui globally</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <FileCode className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">2. Create</h3>
                <p className="text-sm text-muted-foreground">Write your first program</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">3. Run</h3>
                <p className="text-sm text-muted-foreground">Execute your code</p>
              </div>
            </div>
            <div className="bg-muted rounded-lg p-6">
              <pre className="text-sm overflow-x-auto">
                <code className="text-slate-800 dark:text-slate-200">{`# Install Rui
npm install -g rui-lang

# Create your first program
echo &apos;write(&quot;Hello, Rui!&quot;)&apos; > hello.rui

# Run it
rui hello.rui`}</code>
              </pre>
            </div>
            <div className="text-center mt-6">
              <Link href="/docs/installation">
                <Button size="lg" className="px-8">
                  Start Learning
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-background/50">
        <div className="container mx-auto px-4 py-12 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <Image
                  src="/logo.svg"
                  alt="Rui Logo"
                  width={32}
                  height={32}
                  className="h-8 w-8"
                />
                <span className="text-xl font-bold">Rui</span>
              </div>
              <p className="text-muted-foreground mb-4 max-w-md">
                A beginner-friendly programming language designed to make coding accessible and enjoyable for everyone.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Learn</h3>
              <div className="space-y-2 text-sm">
                <Link href="/docs/installation" className="block text-muted-foreground hover:text-foreground">
                  Installation
                </Link>
                <Link href="/docs/hello-world" className="block text-muted-foreground hover:text-foreground">
                  Hello World
                </Link>
                <Link href="/docs/variables" className="block text-muted-foreground hover:text-foreground">
                  Variables
                </Link>
                <Link href="/docs/functions" className="block text-muted-foreground hover:text-foreground">
                  Functions
                </Link>
              </div>
            </div>

          </div>
          <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p> 2025 Rui. Made with ❤️ by
              <Link href="https://pratik.social" className="text-white"> Pratik</Link>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
