{
  "name": "learnjavascript",
  "version": "1.0.0",
  "description": "Learning Javascript",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
   "build": "babel src -d lib"
},
  "author": "",
  "license": "ISC"
}


// to be able to transpile our code, we need to specify a script in package.json that initiates the transpilation.
// to add the script, we would add a property to the script object called build. The build property's value will transpile the code from ES6 to ES5
// the script includes the babel command line that transpiles the code, src which tells tells Babel to transpile the code in the src folder, -d tells Bable to write the code into a directory and the lib is the directory that the code is written into.
