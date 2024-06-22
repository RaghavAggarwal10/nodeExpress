const {readFileSync, writeFileSync}=require('fs')
// const fs=require('fs')
// fs.readFile alternate waay to do this 
console.log('Start')
const first= readFileSync('./content/first.txt','utf-8')//it takes 2 inputs one is encoding and the other one is the file path  
const second= readFileSync('./content/second.txt','utf-8')//it takes 2 inputs one is encoding and the other one is the file path  
console.log(first,second)
writeFileSync('./content/third.txt',`Here is the reult ${first},${second}`)//rember if the file is not present node creates the file 
//also it takes 2 parameters one is file path  and other one is the text which we want to add and if the file is already there thennode will overwrite the file and if we want to append it in the file we can 
//just pass a third paramete {flag:'a'}
writeFileSync('./content/third.txt',`Here is the reult ${first},${second}`,{flag:'a'})// this will append in the existing file 
console.log('done with this task')
console.log('starting the next one')
// The main difference between synchronous (sync) and asynchronous (async) operations in a filesystem (fs) context lies in how these operations handle execution and waiting for results.

// ### Synchronous (Sync) Operations

// 1. **Blocking Execution**: In synchronous operations, the code execution waits for the filesystem operation to complete before moving on to the next line of code. This means the program is blocked until the operation finishes.

// 2. **Sequential Flow**: Since each operation waits for the previous one to complete, the execution follows a straightforward, sequential flow. This can make the code easier to understand and debug, but it can also lead to performance bottlenecks.

// 3. **Usage**:
//    - Typically used in scripts or applications where simplicity is preferred over performance.
//    - Suitable for small, quick tasks where the blocking time is negligible.

// 4. **Example**:
//    ```javascript
//    const fs = require('fs');

//    // Synchronous read
//    const data = fs.readFileSync('file.txt', 'utf8');
//    console.log(data);

//    // Code here waits until the read operation completes
//    ```

// ### Asynchronous (Async) Operations

// 1. **Non-Blocking Execution**: In asynchronous operations, the code does not wait for the filesystem operation to complete. Instead, it continues executing the next lines of code. The result of the operation is handled via callbacks, promises, or async/await.

// 2. **Concurrency**: Asynchronous operations allow multiple tasks to be initiated and processed concurrently, which can lead to better performance, especially in I/O-bound applications. This is particularly important in environments where the application needs to remain responsive.

// 3. **Usage**:
//    - Commonly used in web servers, applications with I/O-bound operations, or any scenario where performance and responsiveness are critical.
//    - Suitable for handling large-scale or time-consuming tasks without blocking the execution.

// 4. **Example**:
//    ```javascript
//    const fs = require('fs');

//    // Asynchronous read using callback
//    fs.readFile('file.txt', 'utf8', (err, data) => {
//        if (err) throw err;
//        console.log(data);
//    });

//    // Code here executes immediately, without waiting for the read operation to complete
//    console.log('This will log before the file data');
//    ```

// ### Key Points to Remember

// - **Blocking vs. Non-Blocking**: Sync operations block the execution until completion, while async operations do not.
// - **Performance**: Async operations can improve performance by allowing other tasks to run while waiting for the filesystem operation to complete.
// - **Complexity**: Sync code is simpler and more straightforward, whereas async code can be more complex due to the need for callbacks, promises, or async/await.
// - **Use Case Suitability**: Choose sync operations for simpler, quick tasks and async operations for performance-critical, I/O-bound tasks.