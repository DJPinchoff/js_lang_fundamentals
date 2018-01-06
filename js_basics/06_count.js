var walk = "walk";
var run = "walk, don't run";

function countChars(string) {
  return string.length;
}

function output(string, count) {
  console.log('There are ' + String(count) + ' characters in "' + string + '".');
}

output(walk, countChars(walk));
output(run, countChars(run));
