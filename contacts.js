const fs = require('fs');


const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const dirPath = './data';
//membuat folder data
if (!fs.existsSync(dirPath)) {

    fs.mkdirSync(dirPath);
}

//membuat file contact.json jika belum ada
const dataPath = './data/contacts.json';
if (!fs.existsSync(dataPath)) {

    fs.writeFileSync(dataPath, '[]', 'utf-8');
}



const tulisPertanyaan = (pertanyaan) => {
    return new Promise((resolve, rejects) => {
        rl.question(pertanyaan, (nama) => {
            resolve(nama)
        });
    });

};


const simpanContact = (nama, email, noHP) =>{

    //menulis oject tipe lama
    // const contact = { nama :nama, email:email, noHP:noHP };

    //karna key dan value nya sama maka bisa di tulis seperti ini (ES6)
    const contact = { nama, email, noHP };
    const fileBuffer = fs.readFileSync('data/contacts.json', 'utf-8');
    const contacts = JSON.parse(fileBuffer);

    contacts.push(contact);

    fs.writeFileSync('data/contacts.json', JSON.stringify(contacts));
    console.log(`Terimakasih ${nama}, Sudah menginput data`);
    rl.close();

};



// module.exports = { tulisPertanyaan: tulisPertanyaan, 
//                    simpanContact: simpanContact 
//                   }
module.exports ={tulisPertanyaan, simpanContact}