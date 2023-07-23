import * as fs from 'node:fs';


export function readFileContent() {
fs.readFile('src/file.txt', "utf8", (err, data)=>{
    console.log(data)
})
}
