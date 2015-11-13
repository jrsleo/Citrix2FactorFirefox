// Listen for pageMod attach and then initiate code entry
self.port.on("solve", function(storage) {
    var challenge_question = document.getElementById('lblChallenge').innerHTML;
    translate(parse(challenge_question), storage);
});

// takes String input and returns Array of strings in output
function parse (input) {
	var output = [];
	input = input.trim();
	input = input.split(" ");

	for (var i = 0; i < input.length; i++) {
		if (input[i].charAt(0) == "[") {
			output.push(input[i].slice(1,3));
		};
	};

	return output;
};

// Solve challenge: takes parsed array and grid and returns corresponding code value
function translate(inputcode, ss) {
    var text = "";
    var output = [];

    // Create array of matched code values
    for (var i = 0; i < inputcode.length; i++) {
    	output.push(ss.storage[inputcode[i]]);
    };

    // Create text string of those values
    for (var i = 0; i < output.length; i++) {
    	text += output[i];
    };

    // publish the output code in case of manual typing
    document.getElementById('lblChallenge').innerHTML = document.getElementById('lblChallenge').innerHTML + "The secret code is: " + text;

    // input the code into the field
    document.getElementById('ID_CHALLENGE_RESPONSE').value = text;
};