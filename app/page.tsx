import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ThemeToggle } from "@/components/theme-toggle"
import { Zap, Terminal, FileCode } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-yellow-100 via-white to-green-100">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b-4 border-black bg-white shadow-[0_4px_0px_0px_rgba(0,0,0,1)]">
        <div className="container mx-auto px-4 sm:px-6 flex h-14 sm:h-16 items-center justify-between max-w-7xl">
          <div className="flex items-center space-x-2">
            <Image
              src="/logo.svg"
              alt="Rui Logo"
              width={32}
              height={32}
              className="h-6 w-6 sm:h-8 sm:w-8"
            />
            <span className="text-lg sm:text-xl font-black text-black">Rui</span>
          </div>
          <div className="flex items-center space-x-2 sm:space-x-4">
            <Link href="/docs/installation">
              <Button
                variant="ghost"
                size="sm"
                className="text-sm font-bold border-2 border-black bg-yellow-200 text-black hover:bg-yellow-300 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] transition-all duration-150"
              >
                Docs
              </Button>
            </Link>
            {/* <ThemeToggle /> */}
          </div>
        </div>
      </header>



      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-screen flex items-center justify-center">
        <div className="relative container mx-auto px-4 sm:px-6 py-16 sm:py-24 md:py-32 lg:py-40">
          <div className="mx-auto max-w-5xl text-center">

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight mb-6 sm:mb-8 leading-tight text-black">
              Welcome to{" "}
              <span className="bg-green-400 text-black px-2 py-1 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                Rui
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-800 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed px-4 font-medium">
              A beginner-friendly, lightweight programming language inspired by JavaScript.
              Perfect for learning programming fundamentals with intuitive and readable syntax.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4">
              <Link href="/docs/installation">
                <Button
                  size="lg"
                  className="w-full sm:w-auto px-6 sm:px-8 py-2 sm:py-3 text-base sm:text-lg font-black border-2 border-black bg-green-400 text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all duration-150"
                >
                  Get Started
                </Button>
              </Link>
              <Link href="/docs/hello-world">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto px-6 sm:px-8 py-2 sm:py-3 text-base sm:text-lg font-black border-2 border-black bg-white text-black hover:text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all duration-150"
                >
                  Hello World
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Code Example Section */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-2xl sm:text-3xl font-black text-black mb-4 sm:mb-6 border-b-2 border-black pb-2">
                Simple, Readable Code
              </h2>
              <p className="text-base sm:text-lg text-gray-800 mb-6 sm:mb-8 font-medium">
                Rui&apos;s syntax is designed to be intuitive and easy to understand.
                Write clean, readable code without complex syntax rules.
              </p>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-center space-x-3 p-2 bg-yellow-200 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  <div className="w-3 h-3 bg-green-400 border border-black flex-shrink-0" />
                  <span className="text-sm text-black font-bold">No semicolons required</span>
                </div>
                <div className="flex items-center space-x-3 p-2 bg-yellow-200 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  <div className="w-3 h-3 bg-green-400 border border-black flex-shrink-0" />
                  <span className="text-sm text-black font-bold">Implicit typing</span>
                </div>
                <div className="flex items-center space-x-3 p-2 bg-yellow-200 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  <div className="w-3 h-3 bg-green-400 border border-black flex-shrink-0" />
                  <span className="text-sm text-black font-bold">Clear, descriptive keywords</span>
                </div>
              </div>
            </div>
            <div className="bg-gray-900 border-4 border-black p-4 sm:p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] order-1 lg:order-2">
              <pre className="text-xs sm:text-sm overflow-x-auto text-green-400 font-mono">
                <code>{`// Simple variable declaration
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
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-black text-black mb-3 sm:mb-4 border-b-2 border-black pb-2 inline-block">Get Started in Minutes</h2>
            <p className="text-base sm:text-lg text-gray-800 font-medium">
              Install Rui and write your first program in just a few steps.
            </p>
          </div>
          <div className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-6 sm:p-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
              <div className="text-center p-4 bg-yellow-200 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-400 border-2 border-black flex items-center justify-center mx-auto mb-2 sm:mb-3 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  <Terminal className="h-5 w-5 sm:h-6 sm:w-6 text-black" />
                </div>
                <h3 className="font-black mb-1 sm:mb-2 text-sm sm:text-base text-black">1. Install</h3>
                <p className="text-xs sm:text-sm text-gray-800 font-bold">Install Rui globally</p>
              </div>
              <div className="text-center p-4 bg-yellow-200 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-400 border-2 border-black flex items-center justify-center mx-auto mb-2 sm:mb-3 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  <FileCode className="h-5 w-5 sm:h-6 sm:w-6 text-black" />
                </div>
                <h3 className="font-black mb-1 sm:mb-2 text-sm sm:text-base text-black">2. Create</h3>
                <p className="text-xs sm:text-sm text-gray-800 font-bold">Write your first program</p>
              </div>
              <div className="text-center p-4 bg-yellow-200 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-400 border-2 border-black flex items-center justify-center mx-auto mb-2 sm:mb-3 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  <Zap className="h-5 w-5 sm:h-6 sm:w-6 text-black" />
                </div>
                <h3 className="font-black mb-1 sm:mb-2 text-sm sm:text-base text-black">3. Run</h3>
                <p className="text-xs sm:text-sm text-gray-800 font-bold">Execute your code</p>
              </div>
            </div>
            <div className="bg-gray-900 border-4 border-black p-4 sm:p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <pre className="text-xs sm:text-sm overflow-x-auto text-green-400 font-mono">
                <code>{`# Install Rui
npm install -g rui-lang

# Create your first program
write("Hello, Rui!")

# Run it
rui hello.rui`}</code>
              </pre>
            </div>
            <div className="text-center mt-4 sm:mt-6">
              <Link href="/docs/installation">
                <Button
                  size="lg"
                  className="px-6 sm:px-8 font-black border-2 border-black bg-green-400 text-black hover:bg-green-500 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all duration-150"
                >
                  Start Learning
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white">
        <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-3 sm:mb-4">
                <Image
                  src="/logo.svg"
                  alt="Rui Logo"
                  width={32}
                  height={32}
                  className="h-6 w-6 sm:h-8 sm:w-8"
                />
                <span className="text-lg sm:text-xl font-black text-black">RUI</span>
              </div>
              <p className="text-gray-800 mb-3 sm:mb-4 max-w-md text-sm sm:text-base font-medium">
                A beginner-friendly programming language designed to make coding accessible and enjoyable for everyone.
              </p>
            </div>
            <div>
              <h3 className="font-black mb-3 sm:mb-4 text-sm sm:text-base text-black border-b-2 border-black pb-1 inline-block">Learn</h3>
              <div className="space-y-1 sm:space-y-2 text-xs sm:text-sm">
                <Link href="/docs/installation" className="block text-gray-800 hover:text-black font-bold transition-colors">
                  Installation
                </Link>
                <Link href="/docs/hello-world" className="block text-gray-800 hover:text-black font-bold transition-colors">
                  Hello World
                </Link>
                <Link href="/docs/variables" className="block text-gray-800 hover:text-black font-bold transition-colors">
                  Variables
                </Link>
                <Link href="/docs/functions" className="block text-gray-800 hover:text-black font-bold transition-colors">
                  Functions
                </Link>
              </div>
            </div>

          </div>
          <div className="border-t-2 border-black mt-6 sm:mt-8 pt-6 sm:pt-8 text-center text-xs sm:text-sm text-gray-800 font-bold">
            <p> 2025 Rui. Made with ❤️ by
              <Link href="https://pratik.social" className="text-black hover:text-green-600 font-black transition-colors"> Pratik</Link>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
