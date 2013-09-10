var spawn = require('child_process').spawn;
var split = require('split');

// The command that gets executed on the command line
var cmd = 'ls';

// The additional arguments that get passed to the command
var args = ['-lh'];

// Actually excute the command and save a reference to the
// created child process.
//
//     ls -lh
//
var child = spawn(cmd, args);


// Error handling
child.stderr.on('data', function (data) {
  console.error(data.toString());
});

// Actual output handling
child.stdout.pipe(split()).on('data', function (line) {
  console.log('> ' + line);
});