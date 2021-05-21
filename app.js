const fs = require('fs');



const readline = require('readline');
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout,
});

const dirPath = './data';
//membuat folder data
if (!fs.existsSync(dirPath)){

    fs.mkdirSync(dirPath);
}

//membuat file contact.json jika belum ada
const dataPath = './data/contacts.json';
if (!fs.existsSync(dataPath)) {

    fs.writeFileSync(dataPath, '[]','utf-8');
}

rl.question('Masukan Nama Anda : ', (nama) =>{

    rl.question('Masukan no HP Anda :', (noHP) =>{
        console.log(`Terimakasih ${nama}, Sudah menginput ${noHP}`);
        const contact = {nama,noHP };

        const fileBuffer = fs.readFileSync('data/contacts.json','utf-8');
        const contacts = JSON.parse(fileBuffer);
        contacts.push(contact);

        fs.writeFileSync('data/contacts.json', JSON.stringify(contacts));
       
        rl.close();
        
    })
   

});