//Reading from std in
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
//Writing to std out
  rl.question('What do you think of Node.js? ', (answer) => {
    console.log(`Thank you for your valuable feedback: ${answer}`);
  
    rl.close();
  });

/*
Readline class has a lot of methods 
that read from input and write to output.

.question() is one such method, 
which asks for input by writing a question to output, 
waits for input, then can use that input (as argument to callback function).

.close() method closes the interface and 
relinquishes control to input and output streams.
*/ 



//Reading from filesystem

var fs = require("fs")

//using asynch read, which is default and recommended
//over sync read.

let fileContent = "";

fs.readFile('basicio.in', (err, data) =>{
    if (err){
        return console.error(err);
    }

    fileContent = data.toString();
    //Writing to filesystem

    fs.writeFile('basicio.out', fileContent, (err)=>{
        if (err){
            return console.error(err); //Already we can see streams that write to error, instead of std out
        }
        console.log("Data written successfully)");

        fs.read

    });  
});


//Reading a file, one line at a time

/* INterestingly, this operation combines both the above
* modules to work. 
*/

const rl2 = readline.createInterface({
    input: fs.createReadStream('basicio.in')
});

rl2.on('line', (line)=>{ //.on('line',<callback func>) will listen from the stream until end of line
    console.log("Line from file: ", line);
});

// ^ This doesn't just stop at one line though. It 
// keeps reading, but the inside of the body is 
// executed anytime an end of line happens,
// with that line's contents stored in "line"