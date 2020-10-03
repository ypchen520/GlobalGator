# Event Loop
* V8
* Javascript Runtime
  * heap
  * call stack
# Web API
* AJAX
  * JQuery
* DOM
* setTimeout
# JS
* single thread
* Call Stack
  * data structure
  * record where you are in a program
  * push --> perform function --> pop
  * *RangeError: Maximum call stack size exceeded*
# Blocking
  * what happens when things are slow?
  * synchronous
    * $.getSync*()
  * why is this a problem
    * we're running the program in browsers
  * __solution__
    * asynchronous callbacks 
# asynchronous callbacks 
  * setTimeout(cb, 5000)
  * Concurrency & the Event Loop
# Concurrency & the Event Loop
  * the browser is more than just the runtime
  * __WebAPIs__
    * similar to nodes for backend
    * setTimeout
      * provided by the browser
      * e.g. 5000
      * after 5 seconds
        * push the callback to task queue
        * event loop push the first thing on the task queue to stack, when __stack is empty__
      * ```setTimeout(function cb(){console.log('there');}, 0);```
        * defer the execution of the function until the stack is cleared
    * ajax
      * $.get('url', ...)
# *callback*
  * any function that another function calls 
  * an asynchronous callback
    * will get pushed back on the callback queue in the future
# rendering
  * render queue
  * don't block the event loop with a slow code
    * *so the render can jump in to make the UI flow well*
      * __rendering is like a callback
# scroll
  * easy to flood the callback queue
# Notes
  * You can Run your JavaScript File from your Terminal only if you have installed __NodeJs runtime__. 
    * If you have Installed it then Simply open the terminal and type “node FileName
