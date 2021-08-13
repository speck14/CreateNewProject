const fs = require('fs');
const folderName = process.argv[2] || 'New Folder'

// mkdir('/tmp/a/apple', { recursive: true }, (err) => {
//     if (err) throw err;
//   });

try {
    fs.mkdirSync(folderName);
    fs.writeFileSync(`${folderName}/app.js`, '');
    fs.writeFileSync(`${folderName}/index.html`, '');
    fs.writeFileSync(`${folderName}/styles.css`, '');
} catch (e) {
    console.log('something went wrong', e)
}