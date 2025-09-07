import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ThemeToggle } from "@/components/theme-toggle"
import { Code, Zap, BookOpen, Terminal, FileCode, Heart } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
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
      <section className="container py-24 md:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <Badge variant="secondary" className="mb-4">
            Simple • Beginner-friendly • Python-inspired
          </Badge>
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6">
            Welcome to{" "}
            <span className="text-primary">Rui</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            A beginner-friendly, lightweight programming language inspired by JavaScript.
            Perfect for learning programming fundamentals with intuitive and readable syntax.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/docs/installation">
              <Button size="lg" className="w-full sm:w-auto">
                Get Started
              </Button>
            </Link>
            <Link href="/docs/hello-world">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                Hello World
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose Rui?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <Code className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Simple Syntax</CardTitle>
                <CardDescription>
                  Clean, readable syntax inspired by JavaScript. No complex syntax rules to remember.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <Zap className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Beginner Friendly</CardTitle>
                <CardDescription>
                  Perfect for learning programming fundamentals. No overwhelming complexity.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <BookOpen className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Easy to Learn</CardTitle>
                <CardDescription>
                  Comprehensive documentation and examples to get you started quickly.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <Terminal className="h-8 w-8 text-primary mb-2" />
                <CardTitle>CLI Tools</CardTitle>
                <CardDescription>
                  Simple command-line interface for running your Rui programs.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <FileCode className="h-8 w-8 text-primary mb-2" />
                <CardTitle>VS Code Support</CardTitle>
                <CardDescription>
                  Full VS Code integration with syntax highlighting and IntelliSense.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <Heart className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Open Source</CardTitle>
                <CardDescription>
                  Contribute to the language and help make it better for everyone.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Quick Start Section */}
      <section className="container py-16 bg-muted/50">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-8">Quick Start</h2>
          <div className="bg-background rounded-lg p-6 text-left">
            <pre className="text-sm overflow-x-auto">
              <code>{`# Install Rui
npm install -g rui-lang

# Create your first program
echo 'write("Hello, Rui!")' > hello.rui

# Run it
rui hello.rui`}</code>
            </pre>
          </div>
          <p className="text-muted-foreground mt-4">
            That&apos;s it! You&apos;re ready to start programming in Rui.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Image
                src="/logo.svg"
                alt="Rui Logo"
                width={24}
                height={24}
                className="h-6 w-6"
              />
              <span className="font-semibold">Rui</span>
            </div>
            <div className="flex space-x-6 text-sm text-muted-foreground">
              <Link href="/docs/installation" className="hover:text-foreground">
                Documentation
              </Link>
              <Link href="/docs/contributing" className="hover:text-foreground">
                Contributing
              </Link>
              <a href="https://github.com" className="hover:text-foreground">
                GitHub
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
