const args = process.argv.slice(2);
console.log(`${args[0] === undefined ? 'undefined' : args[0]} is ${args[1] === undefined ? 'undefined' : args[1]}`);