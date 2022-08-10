// 5 kyuHuman Readable Time
// Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)
// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999 (99:59:59)
// You can find some examples in the test fixtures.
//Parameters: non-negative integer (seconds)
//Return: Return the time in a human readable format (HH:MM:SS)
//Examples:
// strictEqual(humanReadable(0), '00:00:00', 'humanReadable(0)');
// strictEqual(humanReadable(59), '00:00:59', 'humanReadable(59)');
// strictEqual(humanReadable(60), '00:01:00', 'humanReadable(60)');
// strictEqual(humanReadable(90), '00:01:30', 'humanReadable(90)');
// strictEqual(humanReadable(3599), '00:59:59', 'humanReadable(3599)');
// strictEqual(humanReadable(3600), '01:00:00', 'humanReadable(3600)');
// strictEqual(humanReadable(45296), '12:34:56', 'humanReadable(45296)');
// strictEqual(humanReadable(86399), '23:59:59', 'humanReadable(86399)');
// strictEqual(humanReadable(86400), '24:00:00', 'humanReadable(86400)');
// strictEqual(humanReadable(359999), '99:59:59', 'humanReadable(359999)');
//Pseudocode:
        //There will be three main conditions. If seconds are within this range/digits:
            //find out how many hours will need to be returned and have an HH variable
                    //HH will be seconds / 60 * 60
            //find out how many minutes will need to be returned and have a MM variable
            //find out how many seconds will need to be returned and have a SS variable
            //Make sure all floats are integers. We can do this using parseInt(string, radix) for all HH MM SS, but omit radix parameter since we are using base 10 numbers
            //Have a string leading '0' for each HH MM SS
            //We can use a template literal for the function return, example `${HH}:${MM}:${SS}`
//My solution:
function humanReadable (seconds) {
    let HH = ('0' + parseInt(seconds / (60 * 60))).slice(-2)
    let MM = ('0' + parseInt(seconds / 60 % 60)).slice(-2)
    let SS = ('0' + parseInt(seconds % 60)).slice(-2)
    return `${HH}:${MM}:${SS}`
  }
//Test case
console.log(humanReadable(3601))