# Rui Programming Language

A simple, expressive programming language designed for clarity and ease of use.

## Table of Contents

- [Language Basics](#language-basics)
- [Data Types](#data-types)
- [Variables](#variables)
- [Operators](#operators)
- [Control Structures](#control-structures)
- [Functions](#functions)
- [Data Structures](#data-structures)
- [Built-in Functions](#built-in-functions)
- [Comments](#comments)
- [Error Handling](#error-handling)
- [Installation](#installation)
- [Getting Started](#getting-started)

## Language Basics

### Syntax Overview

Rui uses a clean, readable syntax with minimal punctuation requirements.

```rui
// Simple program
write("Hello, World!")
suppose name = "Alice"
write("Hello " + name)
```

### Statement Termination

Statements can be terminated with newlines or semicolons (optional).

```rui
suppose x = 10
suppose y = 20;
write(x + y)
```

## Data Types

### Numbers

Rui supports both integers and floating-point numbers.

```rui
suppose integer = 42
suppose decimal = 3.14
suppose negative = -10

write("Integer: " + integer)
write("Decimal: " + decimal)
write("Negative: " + negative)
```

### Strings

Strings can be created with single or double quotes.

```rui
suppose single = 'Hello'
suppose double = "World"
suppose escaped = "He said \"Hello\""

write(single + " " + double)
write(escaped)
```

### Booleans

Boolean values are `true` and `false`.

```rui
suppose isTrue = true
suppose isFalse = false

write("True: " + isTrue)
write("False: " + isFalse)
```

### Null

The `null` value represents the absence of a value.

```rui
suppose empty = null
write("Empty: " + empty)
```

## Variables

### Variable Declaration

Use the `suppose` keyword to declare variables.

```rui
suppose name = "Alice"
suppose age = 25
suppose isStudent = true

write("Name: " + name)
write("Age: " + age)
write("Student: " + isStudent)
```

### Variable Assignment

Variables can be reassigned using the `=` operator.

```rui
suppose count = 0
write("Initial: " + count)

suppose count = 10
write("Updated: " + count)
```

### Variable Naming Rules

- Must start with a letter or underscore
- Can contain letters, numbers, and underscores
- Cannot use reserved words
- Cannot contain hyphens

```rui
// Valid variable names
suppose validName = "Hello"
suppose name123 = "World"
suppose _private = "Private"
suppose snake_case = "Snake"

// Invalid variable names (will cause errors)
// suppose 123name = "invalid"     // Cannot start with number
// suppose first-name = "invalid"   // Cannot contain hyphens
// suppose if = "invalid"          // Cannot use reserved words
```

## Operators

### Arithmetic Operators

```rui
suppose a = 10
suppose b = 3

write("Addition: " + (a + b))      // 13
write("Subtraction: " + (a - b))   // 7
write("Multiplication: " + (a * b)) // 30
write("Division: " + (a / b))     // 3.333...
```

### Comparison Operators

```rui
suppose x = 10
suppose y = 5

write("Equal: " + (x == y))        // false
write("Not equal: " + (x != y))    // true
write("Greater: " + (x > y))       // true
write("Less: " + (x < y))          // false
write("Greater or equal: " + (x >= y)) // true
write("Less or equal: " + (x <= y))     // false
```

### Logical Operators

```rui
suppose a = true
suppose b = false

write("AND: " + (a and b))         // false
write("OR: " + (a or b))           // true
write("NOT: " + (not a))           // false
```

### String Operations

```rui
suppose str = "Hello"
suppose num = 3

write("Concatenation: " + (str + " World"))  // "Hello World"
write("Repetition: " + (str * num))           // "HelloHelloHello"
```

## Control Structures

### If Statements

```rui
suppose age = 18

if (age >= 18) {
    write("You are an adult")
} else {
    write("You are a minor")
}
```

### Else If Statements

```rui
suppose score = 85

if (score >= 90) {
    write("Grade: A")
} else if (score >= 80) {
    write("Grade: B")
} else if (score >= 70) {
    write("Grade: C")
} else {
    write("Grade: F")
}
```

### Until Loops

```rui
suppose count = 0

until (count >= 5) {
    write("Count: " + count)
    suppose count = count + 1
}
```

## Functions

### Function Definition

Use the `define` keyword to create functions.

```rui
define greet(name) {
    write("Hello, " + name + "!")
}

greet("Alice")
greet("Bob")
```

### Function with Return

```rui
define add(a, b) {
    return a + b
}

define multiply(x, y) {
    return x * y
}

write("Sum: " + add(5, 3))        // 8
write("Product: " + multiply(4, 6)) // 24
```

### Recursive Functions

```rui
define factorial(n) {
    if (n <= 1) {
        return 1
    } else {
        return n * factorial(n - 1)
    }
}

write("Factorial of 5: " + factorial(5)) // 120
```

## Data Structures

### Arrays

```rui
suppose numbers = [1, 2, 3, 4, 5]
suppose fruits = ["apple", "banana", "orange"]
suppose mixed = [1, "hello", true, 3.14]

write("Numbers: " + numbers)
write("Fruits: " + fruits)
write("Mixed: " + mixed)
```

### Array Methods

```rui
suppose arr = [1, 2, 3]

// Add elements
arr.push(4)
write("After push: " + arr)  // [1, 2, 3, 4]

// Remove last element
write("Pop result: " + arr.pop())  // 4
write("After pop: " + arr)        // [1, 2, 3]

// Add to beginning
arr.unshift(0)
write("After unshift: " + arr)    // [0, 1, 2, 3]

// Remove from beginning
write("Shift result: " + arr.shift()) // 0
write("After shift: " + arr)          // [1, 2, 3]
```

### Array Indexing

```rui
suppose arr = [10, 20, 30, 40, 50]

write("First element: " + arr[0])    // 10
write("Last element: " + arr[-1])    // 50
write("Middle element: " + arr[2])  // 30
```

### Array Slicing

```rui
suppose arr = [1, 2, 3, 4, 5]

write("Slice [1:4]: " + arr[1:4])   // [2, 3, 4]
write("Slice [:3]: " + arr[:3])     // [1, 2, 3]
write("Slice [2:]: " + arr[2:])     // [3, 4, 5]
```

### Objects

```rui
suppose person = {
    name: "Alice",
    age: 25,
    city: "New York"
}

write("Person: " + person)
write("Name: " + person.name)
write("Age: " + person.age)
```

### Object Property Access

```rui
suppose config = {
    host: "localhost",
    port: 3000,
    debug: true
}

write("Host: " + config.host)
write("Port: " + config.port)
write("Debug: " + config.debug)
```

## Built-in Functions

### Output Functions

```rui
write("Hello, World!")
write("Multiple", "arguments", "supported")
```

### Type Checking

```rui
suppose str = "Hello"
suppose num = 42
suppose arr = [1, 2, 3]
suppose obj = {name: "Alice"}

write("String type: " + type(str))  // string
write("Number type: " + type(num))  // number
write("Array type: " + type(arr))   // array
write("Object type: " + type(obj))  // object
```

### String Functions

```rui
suppose text = "Hello World"

write("Original: " + text)
write("Upper: " + text.upper())     // HELLO WORLD
write("Lower: " + text.lower())     // hello world
write("Split: " + text.split(" "))  // ["Hello", "World"]
```

### Array Functions

```rui
suppose arr = [1, 2, 3, 4, 5]

write("Length: " + length(arr))     // 5
write("Array: " + arr)
```

### Utility Functions

```rui
suppose str = "123"
suppose arr = ["a", "b", "c"]

write("Parse int: " + parseInt(str))        // 123
write("Parse float: " + parseFloat("3.14")) // 3.14
write("Join array: " + join(arr, "-"))      // a-b-c
```

## Comments

### Single-line Comments

```rui
// This is a single-line comment
suppose name = "Alice"  // Inline comment
write("Hello " + name)
```

### Multiline Comments

```rui
/*
   This is a multiline comment
   that can span multiple lines
   and is completely ignored
*/

suppose age = 25

/* Another multiline comment */

write("Age: " + age)
```

## Error Handling

### Variable Name Errors

```rui
// These will cause clear error messages:

// suppose 123name = "invalid"     // Error: variable names cannot start with a number
// suppose first-name = "invalid"  // Error: variable names cannot contain hyphens
// suppose if = "invalid"         // Error: 'if' is a reserved word
```

### Type Errors

```rui
suppose str = "hello"
suppose num = 42

// These will cause runtime errors:
// write(str + num)  // Works due to automatic conversion
// write(str - num)  // Error: cannot subtract number from string
```

## Installation

### Prerequisites

- Node.js (version 14 or higher)
- npm (comes with Node.js)

### Install Rui

```bash
npm install -g rui-lang
```

### Verify Installation

```bash
rui --version
```

## Getting Started

### Your First Program

Create a file called `hello.rui`:

```rui
write("Hello, World!")
```

Run it:

```bash
rui hello.rui
```

### Basic Calculator

```rui
define add(a, b) {
    return a + b
}

define subtract(a, b) {
    return a - b
}

write("Calculator Demo:")
write("5 + 3 = " + add(5, 3))
write("10 - 4 = " + subtract(10, 4))
```

### Array Operations

```rui
suppose numbers = [1, 2, 3, 4, 5]

write("Original: " + numbers)

// Add elements
numbers.push(6, 7)
write("After push: " + numbers)

// Remove elements
write("Popped: " + numbers.pop())
write("Final: " + numbers)
```

### String Manipulation

```rui
suppose text = "Hello World"

write("Original: " + text)
write("Upper: " + text.upper())
write("Lower: " + text.lower())
write("Split: " + text.split(" "))
```

### Control Flow Example

```rui
suppose scores = [85, 92, 78, 96, 88]

suppose i = 0
until (i >= length(scores)) {
    suppose score = scores[i]

    if (score >= 90) {
        write("Score " + score + ": A")
    } else if (score >= 80) {
        write("Score " + score + ": B")
    } else {
        write("Score " + score + ": C")
    }

    suppose i = i + 1
}
```

## Language Features Summary

- ✅ **Clean Syntax**: Minimal punctuation, readable code
- ✅ **Multiple Data Types**: Numbers, strings, booleans, arrays, objects
- ✅ **Flexible Variables**: Easy declaration and assignment
- ✅ **Rich Operators**: Arithmetic, comparison, logical operations
- ✅ **Control Structures**: If/else, until loops
- ✅ **Functions**: First-class functions with recursion
- ✅ **Data Structures**: Arrays and objects with methods
- ✅ **Built-in Functions**: Type checking, string manipulation, utilities
- ✅ **Comments**: Single-line and multiline support
- ✅ **Error Handling**: Clear, helpful error messages
- ✅ **Type System**: Runtime type checking with `type()` function

---

_Rui Language - Simple, expressive, and powerful._
