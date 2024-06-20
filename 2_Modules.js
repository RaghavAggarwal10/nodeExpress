//Modules- we use this so that we have to run just one file but we can split our code in multiple files 
//CommonJs ,every file is module (by default )
//Modules- Encapsulated Code(only share minimum meaning sharing the thing which we want )
// Certainly! Let's break down the concepts of CommonJS modules and how every file is treated as a module in Node.js, along with the idea of encapsulated code.

// ### CommonJS Modules

// **CommonJS** is a module system used in Node.js to manage dependencies and organize code. In CommonJS, each file is considered a module. This system provides a simple and synchronous way to include and export functionality between different parts of your application.

// #### Key Concepts of CommonJS:

// 1. **Every File is a Module**:
//    - In Node.js, every JavaScript file is treated as a separate module. This means that each file has its own scope, and variables or functions defined in one file are not automatically accessible in other files.
//    - This modularity helps in organizing code into smaller, manageable, and reusable components.

// 2. **Encapsulated Code**:
//    - Encapsulation in the context of modules means that each module (file) has its own scope. Variables, functions, and objects defined in a module are not visible outside of it unless explicitly exported.
//    - This prevents naming conflicts and ensures that the code within a module does not unintentionally interfere with other parts of the application.

// ### Example of CommonJS Module System

// #### Creating a Module

// Let's create a simple module in a file named `math.js`:

// ```javascript
// // math.js
// const add = (a, b) => a + b;
// const subtract = (a, b) => a - b;

// module.exports = {
//   add,
//   subtract
// };
// ```

// - **Definition**: In `math.js`, we define two functions, `add` and `subtract`.
// - **Exporting**: We use `module.exports` to export these functions, making them accessible to other files.

// #### Using a Module

// Now, let's use this module in another file named `app.js`:

// ```javascript
// // app.js
// const math = require('./math');

// const sum = math.add(5, 3);
// const difference = math.subtract(5, 3);

// console.log(`Sum: ${sum}`); // Output: Sum: 8
// console.log(`Difference: ${difference}`); // Output: Difference: 2
// ```

// - **Requiring**: We use the `require` function to include the `math` module.
// - **Using**: We can now use the `add` and `subtract` functions from the `math` module in `app.js`.

// ### Benefits of Encapsulation and Modularity

// 1. **Organized Code**: By breaking the code into modules, you keep each part of your application organized and maintainable.
// 2. **Reusability**: Modules can be reused across different parts of the application or even in different projects.
// 3. **Scope Isolation**: Variables and functions in one module are isolated from others, reducing the risk of conflicts.
// 4. **Ease of Testing**: Modular code is easier to test because each module can be tested independently.

// ### Summary

// - **CommonJS**: A module system used in Node.js where each file is treated as a module.
// - **Encapsulation**: Each module has its own scope, and code within a module is not accessible outside unless explicitly exported.
// - **Modules**: Help in organizing code, enhancing reusability, preventing naming conflicts, and making testing easier.

// By using the CommonJS module system, Node.js enables developers to build large and complex applications in a structured and maintainable way.
const peter="peter"
const john="john"
const sayHi=(name)=>{
    console,log(`Hello there ${name}`)
}
sayHi('susan')
sayHi(peter)
sayHi(john)