const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function addNumbers(sum, numsLeft, completionCallback) {

    if (numsLeft === 0) {
        completionCallback(sum);
        reader.close();
        
    } else if (numsLeft > 0) {
        reader.question("Give me a number!", (answer) => {
            p = parseInt(answer);
            sum += p;
            console.log(`The new sum is: ${sum}`);
            addNumbers(sum, numsLeft - 1, completionCallback);
        })
    }
    
}


addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));

