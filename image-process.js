const fs = require('fs');
const events = require('events');
const path = require('path');
const sharp = require('sharp');
const emitter = new events.EventEmitter();

const defaultSizes = [[1,360], [2,720], [3,1080], [4,1440], [7,2520]];
const grab = flag => process.argv.indexOf(flag) === -1 ? false : process.argv[process.argv.indexOf(flag)+1];
const makeWebpWS = (imgOut,file,suffix = '') => fs.createWriteStream(imgOut+"/"+file+suffix+'.webp');
const input = grab('--input');


if (input){
    //grab the output path for the processed files
    const output = grab('--output');
    //read directory contents
    fs.readdir(input,(err,files)=>{
        if(err){throw err;}
        emitter.emit('readDone',files,'process');
    });
    //when done fire processSream
    emitter.on('readDone',(list,user)=>{processStream(0,list);});
    //process all files
    const processStream = (index,list) => {
        const transform = sharp().webp();
        const rs = fs.createReadStream(input+"/"+list[index]);
        const base = path.basename(list[index]).slice(0,-4);
        defaultSizes.forEach((size) => {
            const ws = makeWebpWS(output,'reception-end'+index, `-${size[0]}x`);
            transform.clone().resize(size[1]).pipe(ws);
        });
        rs.pipe(transform);
        // rs.pipe(sharp().jpeg().resize(1440)).pipe(fs.createWriteStream(output+"/"+file+suffix+'.webp'))
        index++;
        if (index >= list.length ){return;}
        processStream(index, list);
    }
}
else{
    const processFile = (data,usr) => {
        const transform = sharp().webp();
        const rs = fs.createReadStream(data.file);
        const base = path.basename(data.file).slice(0,-4);
        defaultSizes.forEach((size,index) => {
            const ws = makeWebpWS(data.output,base, `-${size[0]}x`);
            transform.clone().resize(size[1]).pipe(ws);
            if(index == (defaultSizes.length-1)){
                ws.on('finish',()=>{
                    console.log('all done!');
                    process.exit();

                });
            }   
        });
        rs.pipe(transform);
    }
    const questions = [
        'Which file would you like to process? (file path from root)',
        'Should I us the default output location? (y/n)',
        'Where would you like me to put them? (file path from root)'
    ];
    const answers = [];
    const ask = (i) =>{
        process.stdout.write(`\n${questions[i]}: `);
    }
    ask(0);
    process.stdin.on('data', data => {
        // process.stdout.write(`\nanswers: ${answers[1]}`);
        answers.push(data);
        if(answers[1] !== undefined && answers[1].toString().trim() == 'y'){
            answers.push(grab('--output'));
        }
        if(answers.length < 3){
            ask(answers.length);
        }else{
            const data = {
                file:   answers[0].toString().trim(),
                output: answers[2].toString().trim()
            }
            emitter.emit('dataCollected',data,'process');
        }
    });
    emitter.on('dataCollected',processFile);
}

// // BUSINESS END BELOW:


// CLI-------->
// if(imgDir||file){
//         //process all files
//         const processStream = (index,list) => {
//             const transform = sharp().webp();
//             const rs = fs.createReadStream(imgDir+"/"+list[index]);
//             defaultSizes.forEach((size) => {
//                 const ws = makeWebpWS(list[index], `-${size[0]}x`);
//                 transform.clone().resize(size[1]).pipe(ws);
//             });
//             rs.pipe(transform);
//             index++;
//             if (index >= list.length ){return;}
//             processStream(index, list);
//         }
//     }
// }
// module.exports = processFile;