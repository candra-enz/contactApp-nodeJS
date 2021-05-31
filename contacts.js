const fs = require('fs');
const validator = require('validator');


// const readline = require('readline');
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
// });

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



// const tulisPertanyaan = (pertanyaan) => {
//     return new Promise((resolve, rejects) => {
//         rl.question(pertanyaan, (nama) => {
//             resolve(nama)
//         });
//     });

// };

const loadContact = () => {
    const fileBuffer = fs.readFileSync('data/contacts.json', 'utf-8');
    const contacts = JSON.parse(fileBuffer);
    return contacts;

}


const simpanContact = (nama, email, noHP) =>{

    //menulis oject tipe lama
    // const contact = { nama :nama, email:email, noHP:noHP };

    //karna key dan value nya sama maka bisa di tulis seperti ini (ES6)
    const contact = { nama, email, noHP };
    
    const contacts =loadContact();

    // cek Duplikat
    const duplikat = contacts.find ((contact) => contact.nama === nama);
    if (duplikat){
        console.log('Contact sudah terdaftar, gunakan nama lain');
        return false;
    }

    //cek imail
    if(email){
        if(!validator.isEmail(email)){
            console.log('Email tidak valid');
            return false;
        }
            
      
    }

    //cek nomor hp
        if (!validator.isMobilePhone(noHP,'id-ID')){
            console.log('Nomor Handphone tidak valid');
            return false;
        }

    contacts.push(contact);
    fs.writeFileSync('data/contacts.json', JSON.stringify(contacts));
    console.log(`Terimakasih ${nama}, Sudah menginput data`);
    // rl.close();
};


//tampil contact
const listContact = () =>{
    const contacts = loadContact();
    console.log('Daftar Kontak : ');

    contacts.forEach( (contact,i) => {
    console.log(`${i + 1}.${contact.nama} - ${contact.noHP}`);
        
    });

}

const detailContact = (nama) => {
    const contacts = loadContact();

    const contact = contacts.find((contact) => contact.nama.toLowerCase() === nama.toLowerCase());

   if(!contact){
       console.log(`${nama}  Tidak Ditemukan`);
   }else{
       console.log(contact.nama);
       console.log(contact.noHP);

       if(contact.email){
           console.log(contact.email);
       }
   }

};



const deleteContact = (nama) => {
    const contacts = loadContact();

    const newContacts = contacts.filter((contact) => contact.nama.toLowerCase() !== nama.toLowerCase());

    if (contacts.length == newContacts.length){
        console.log(`${nama}  Tidak Ditemukan`);
        return false
    };

    fs.writeFileSync('data/contacts.json', JSON.stringify(newContacts));
    console.log(`Data contact ${nama}, Berhasil di hapus`);

};

module.exports = { simpanContact, listContact, detailContact, deleteContact}








//  module.exports = { tulisPertanyaan: tulisPertanyaan,  simpanContact: simpanContact  }
