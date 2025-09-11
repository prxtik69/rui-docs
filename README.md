# Rui Language Documentation

Rui is a simple, interpreted programming language designed with clean syntax and powerful features. It supports variables, functions, control flow, data structures, and comprehensive string manipulation.

## Table of Contents

1. [Installation](#installation)
2. [Basic Syntax](#basic-syntax)
3. [Data Types](#data-types)
4. [Variables](#variables)
5. [Functions](#functions)
6. [Control Flow](#control-flow)
7. [Data Structures](#data-structures)
8. [String Manipulation](#string-manipulation)
9. [Built-in Functions](#built-in-functions)
10. [Operators](#operators)
11. [Error Handling](#error-handling)
12. [Examples](#examples)
13. [Recent Additions](#recent-additions)

## Installation

### Option 1: NPM Package (Recommended)

```bash
# Install globally
npm install -g rui-lang

# Run a Rui program
rui program.rui
```


### VS Code Extension

For the best development experience, install the **Rui Support** extension from the VS Code marketplace:

1. Open VS Code
2. Go to Extensions (Ctrl+Shift+X)
3. Search for "Rui Support"
4. Install the extension

This provides:

- Syntax highlighting
- Code completion
- Error detection
- Integrated terminal support

## Basic Syntax

Rui uses a clean, readable syntax with minimal punctuation requirements:

- Statements can be terminated with newlines or semicolons
- Comments start with `//`
- Indentation is not significant (unlike Python)
- Case-sensitive language

## Data Types

### Primitive Types

- **Numbers**: `42`, `3.14`, `-10`
- **Strings**: `"Hello"`, `'World'`
- **Booleans**: `true`, `false`
- **Null**: `null`

### Complex Types

- **Arrays**: `[1, 2, 3]`, `["a", "b", "c"]`
- **Objects**: `{name: "Alice", age: 25}`
- **Functions**: First-class citizens

## Variables

### Declaration

Use `suppose` to declare variables:

```rui
suppose name = "Alice"
suppose age = 25
suppose isStudent = true
```

### Assignment

Use `=` to assign values to existing variables:

```rui
name = "Bob"
age = 30
```

## Functions

### Function Definition

```rui
define greet(person) {
    write("Hello, " + person + "!")
}
```

### Function Calls

```rui
greet("Alice")
greet(name)
```

### Return Statements

```rui
define add(a, b) {
    return a + b
}
```

## Control Flow

### Conditional Statements

```rui
if (age >= 18) {
    write("You are an adult")
} else {
    write("You are a minor")
}
```

### Loops

Rui uses `until` loops (while loops):

```rui
suppose i = 0
until (i < 5) {
    write("Count: " + i)
    i = i + 1
}
```

## Data Structures

### Arrays

#### Creation and Access

```rui
suppose numbers = [1, 2, 3, 4, 5]
suppose fruits = ["apple", "banana", "orange"]

// Access elements
write("First number: ", numbers[0])
write("Last fruit: ", fruits[-1])  // Negative indexing
```

#### Array Methods

```rui
suppose arr = [1, 2, 3]

// Add elements
arr.push(4, 5)        // [1, 2, 3, 4, 5]

// Remove elements
suppose last = arr.pop()     // last = 5, arr = [1, 2, 3, 4]
suppose first = arr.shift()  // first = 1, arr = [2, 3, 4]

// Add to beginning
arr.unshift(0)        // [0, 2, 3, 4]
```

#### Array Slicing

```rui
suppose arr = [1, 2, 3, 4, 5]

write("First 3: ", arr[:3])      // [1, 2, 3]
write("Last 2: ", arr[-2:])      // [4, 5]
write("Middle: ", arr[1:4])      // [2, 3, 4]
```

### Objects

#### Creation and Access

```rui
suppose person = {
    name: "Alice",
    age: 25,
    city: "New York"
}

// Access properties
write("Name: ", person.name)
write("Age: ", person.age)
```

#### Nested Objects

```rui
suppose company = {
    name: "TechCorp",
    employees: [
        {name: "Alice", role: "Developer"},
        {name: "Bob", role: "Designer"}
    ],
    founded: 2020
}

write("First employee: ", company.employees[0].name)
```

## String Manipulation

### String Indexing

```rui
suppose text = "Hello World"

write("First character: ", text[0])    // H
write("Last character: ", text[-1])    // d
write("Character at index 6: ", text[6])  // W
```

### String Slicing

```rui
suppose text = "Hello World"

write("First 5: ", text[:5])      // Hello
write("Last 5: ", text[-5:])      // World
write("Middle: ", text[2:8])      // llo Wo
write("From index 6: ", text[6:]) // World
```

### String Methods

```rui
suppose text = "  Hello World  "

// Case conversion
write("Upper: ", text.upper())    //   HELLO WORLD
write("Lower: ", text.lower())    //   hello world

// Whitespace
write("Trimmed: ", text.trim())   // Hello World

// Splitting
suppose words = text.split(" ")   // ["", "", "Hello", "World", "", ""]

// Replacement
write("Replaced: ", text.replace("World", "Rui"))  //   Hello Rui

// Checking
write("Starts with 'Hello': ", text.startsWith("Hello"))  // false (due to spaces)
write("Ends with 'World': ", text.endsWith("World"))      // false (due to spaces)
write("Contains 'World': ", text.indexOf("World") >= 0)   // true
```

### String Operations

```rui
// Concatenation
suppose result = "Hello" + " " + "World"  // Hello World

// Repetition
suppose repeated = "Hello" * 3            // HelloHelloHello

// Mixed types
suppose formatted = "Age: " + 25          // Age: 25
```

## Built-in Functions

### General Functions

- **`write(...args)`**: Print multiple values to console
- **`length(value)`**: Get length of strings or arrays

### String Functions

- **`join(array, delimiter)`**: Join array elements with delimiter
- **`parseInt(string)`**: Convert string to integer
- **`parseFloat(string)`**: Convert string to float

### Example Usage

```rui
suppose arr = ["a", "b", "c"]
write("Joined: ", join(arr, "-"))        // a-b-c

suppose numStr = "123"
write("Parsed: ", parseInt(numStr))      // 123

suppose text = "Hello"
write("Length: ", length(text))          // 5
```

## Operators

### Arithmetic Operators

- **`+`**: Addition (numbers) or concatenation (strings)
- **`-`**: Subtraction
- **`*`**: Multiplication (numbers) or repetition (string \* number)
- **`/`**: Division (returns decimal result)

### Comparison Operators

- **`==`**: Equality
- **`!=`**: Inequality
- **`<`**: Less than
- **`>`**: Greater than
- **`<=`**: Less than or equal
- **`>=`**: Greater than or equal

### Logical Operators

- **`and`**: Logical AND
- **`or`**: Logical OR
- **`not`**: Logical NOT

### Assignment Operators

- **`=`**: Assignment

## Error Handling

Rui provides helpful error messages with line and column information:

```rui
// This will show: "String index out of bounds: 10 (at line 2, col 20)"
suppose text = "Hello"
write(text[10])
```

Common error types:

- `RuiError`: General runtime errors
- `SyntaxError`: Parsing errors
- Index out of bounds errors
- Type errors

## Examples

### Complete Program Example

```rui
// Simple variable declaration
suppose name = "Alice"
suppose age = 25

// Function definition
define greet(person) {
    write("Hello, " + person + "!")
}

// Conditional logic
if (age >= 18) {
    write("You are an adult")
} else {
    write("You are a minor")
}

// Call function
greet(name)

// Array operations
suppose numbers = [1, 2, 3, 4, 5]
numbers.push(6, 7)
write("Numbers: ", numbers)

// String manipulation
suppose text = "Hello World"
write("First 5 chars: ", text[:5])
write("Uppercase: ", text.upper())

// Object usage
suppose person = {
    name: "Bob",
    age: 30,
    hobbies: ["reading", "coding"]
}
write("Person: ", person.name, " has ", length(person.hobbies), " hobbies")
```

### Advanced Example: Text Processing

```rui
// Process a sentence
suppose sentence = "The quick brown fox jumps over the lazy dog"
write("Original: ", sentence)

// Split into words
suppose words = sentence.split(" ")
write("Words: ", words)
write("Word count: ", length(words))

// Find longest word
suppose longest = words[0]
suppose i = 1
until (i >= length(words)) {
    if (length(words[i]) > length(longest)) {
        longest = words[i]
    }
    i = i + 1
}
write("Longest word: ", longest)

// Join with different delimiter
write("Joined with dashes: ", join(words, "-"))
```

## Recent Additions

The following features were added in the latest update:

### Data Structures (Arrays & Objects)

- **Array literals**: `[1, 2, 3]` syntax
- **Object literals**: `{key: value}` syntax
- **Array indexing**: `arr[0]`, `arr[-1]` (with negative indexing)
- **Object property access**: `obj.property`
- **Array methods**: `push()`, `pop()`, `shift()`, `unshift()`
- **Array slicing**: `arr[start:end]` syntax
- **Nested structures**: Objects containing arrays, arrays containing objects

### String Manipulation

- **String indexing**: `str[0]`, `str[-1]` (with negative indexing)
- **String slicing**: `str[start:end]` syntax
- **String methods**: `upper()`, `lower()`, `split()`, `trim()`, `replace()`, `startsWith()`, `endsWith()`, `indexOf()`, `substring()`
- **String operations**: Enhanced concatenation and repetition
- **Built-in string functions**: `join()`, `parseInt()`, `parseFloat()`

### Enhanced Features

- **Method chaining**: `text.lower().upper()` works correctly
- **Multiple arguments in write()**: `write("Hello", " ", "World")`
- **Improved error messages**: Better debugging with line/column information
- **Type safety**: Proper handling of mixed types in operations
- **Performance optimizations**: Efficient string wrapper implementation

### Syntax Improvements

- **Flexible statement termination**: Newlines or semicolons
- **Negative indexing**: `arr[-1]` for last element
- **Slice syntax**: `[start:end]` for substrings and subarrays
- **Method calls**: `object.method()` syntax

These additions make Rui a much more powerful and user-friendly programming language, comparable to modern scripting languages while maintaining its clean, readable syntax.

---

**Version**: 1.0.7  
**Author**: Pratik Deshpande
