const sass = require('node-sass');
const fs = require('fs');

const outputFile = 'lib/SlidingContainer.css';

sass.render({
  file: 'assets/initial.scss',
  outFile: outputFile,
  outputStyle: 'compressed'
}, function(error, result) {
    if (error) {
        console.log(error.status); // used to be "code" in v2x and below
        console.log(error.column);
        console.log(error.message);
        console.log(error.line);
    } else {
        // No errors during the compilation, write this result on the disk
        fs.writeFile(outputFile, result.css, function(err) {
            console.log(result.stats);
            if(!err){
             //file written on disk
            }
        });
    }
});