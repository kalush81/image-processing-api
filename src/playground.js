const path = require("path");
const fs = require('fs').promises;

console.log(path.resolve(__dirname));

const folderName = "KURWA"

const mkDir = async() => {
    // try {
    //     await fs.mkdir(path.join(__dirname, folderName));
    //     console.log('created')
    // } catch (error) {
    //     console.error('UUPsss')
    // }
    try {
        await fs.mkdir(path.join(__dirname, 'pizda', 'dupa'), {recursive: true});
    } catch (error) {
        console.log(error)
    }
    
}

mkDir()

//console.log(path.join(__dirname, 'pizda', 'dupa'))



