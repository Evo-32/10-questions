let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

// Remove the last string
secretMessage.pop();

// Log the updated length
console.log(secretMessage.length);

// Add 'to' and 'Program' to the end of the array
secretMessage.push('to', 'Program');

// Change 'easily' to 'right' by accessing the index
const easilyIndex = secretMessage.indexOf('easily');
secretMessage[easilyIndex] = 'right';

// Remove the first string
secretMessage.shift();

// Add 'Programming' to the beginning of the array
secretMessage.unshift('Programming');

// Remove specified strings and replace them with 'know,'
const startIndex = secretMessage.indexOf('get');
const endIndex = secretMessage.indexOf('time,');
secretMessage.splice(startIndex, endIndex - startIndex + 1, 'know,');

// Log the secret message as a sentence
console.log(secretMessage.join(' '));
