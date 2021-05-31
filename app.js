const yargs = require("yargs");
const contacts = require("./contacts");

yargs.command({
command : 'add',
describe: 'Menambahkan contact Baru',
builder:{
    nama:{

        // alias: 'file',
        demandOption: true,
        // default: '/etc/passwd',
        describe: 'Nama Lengkap',
        type: 'string'

    },
    email:{
        // alias: 'file',
        demandOption: false,
        // default: '/etc/passwd',
        describe: 'Email',
        type: 'string'
    }
    , noHP: {
        
        demandOption: true, 
        describe: 'Nomor Handphone',
        type: 'string'
    },
},
// handler:function(){

// }

handler(argv){

    // const contact = {
    //     nama:argv.nama,
    //     email:argv.email,
    //     noHP:argv.noHP
    // };
    // console.log(contact);

    // simpan dengan ConstantSourceNode.js
    contacts.simpanContact(argv.nama, argv.email, argv.noHP);
}
}).demandCommand();

//menampilkan daftar semua contact
yargs.command({
    command:'list',
    describe:'Menampilkan semua nama & HP contact',
    handler(){
        contacts.listContact();

    },
});

//menampilkan detail sebuah contact
yargs.command({
    command: 'detail',
    describe: 'Menampilkan detail sebuah contact berdasarkan nama : ',
    builder:{
        nama:{
                demandOption: true,
                describe: 'Nama lengkap',
                type: 'string'
            },
    },
    handler(argv) {
    contacts.detailContact(argv.nama);
    },
});


//menghapus contact berdasarkan nama
yargs.command({
    command: 'delete',
    describe: 'Menghapus sebuah contact berdasarkan nama : ',
    builder: {
        nama: {
            demandOption: true,
            describe: 'Nama lengkap',
            type: 'string'
        },
    },
    handler(argv) {
        contacts.deleteContact(argv.nama)
    },
});




yargs.parse();


















//mengambil argumen dari comand line
// const command = process.argv[2];

// if(command === 'add'){

// } else if (command === 'remove'){

// } else if (command === 'list'){

// }

// console.log(yargs.argv);






// const contacts = require('./contacts');




// const main = async () => {
//     const nama = await contacts.tulisPertanyaan('Maukan Nama anda : ');
//     const email = await contacts.tulisPertanyaan('Masukan Email anda :');
//     const noHP = await contacts.tulisPertanyaan('Masukan No Hp anda :');
//     contacts.simpanContact(nama, email, noHP)
// }; main();










// *****************************Menggunakan Promise************************************
// ************************************************************************************
// Buat pertanyaan
// const pertanyaan1 = () => {
//     return new Promise((resolve,rejects) =>{
//         rl.question('Masukan Nama Anda : ', (nama) =>{
//             resolve(nama)
//         });
//     });

// };

// const pertanyaan2 = () => {
//     return new Promise((resolve, rejects) => {
//         rl.question('Masukan Email Anda : ', (email) => {
//             resolve(email)
//         });
//     });
// };


// // fungsi utama
// const main = async() =>{
//         const nama = await pertanyaan1();
//         const email = await pertanyaan2();

//         const contact = { nama, email };
//         const fileBuffer = fs.readFileSync('data/contacts.json', 'utf-8');
//         const contacts = JSON.parse(fileBuffer);

//         contacts.push(contact);

//         fs.writeFileSync('data/contacts.json', JSON.stringify(contacts));
//         rl.close();

//         console.log(`Terimakasih ${nama}, Sudah menginput data`);

// }; main();
// ************************************************************************************
// ************************************************************************************





// ***********************Menggunakan READ LINE****************************************
// ************************************************************************************
// rl.question('Masukan Nama Anda : ', (nama) => {
//     rl.question('Masukan no HP Anda :', (noHP) => {
//         console.log(`Terimakasih ${nama}, Sudah menginput data `);
//         const contact = { nama, noHP };
//         const fileBuffer = fs.readFileSync('data/contacts.json', 'utf-8');
//         const contacts = JSON.parse(fileBuffer);
//         contacts.push(contact);
//         fs.writeFileSync('data/contacts.json', JSON.stringify(contacts));
//         rl.close();
//     })
// });
// ************************************************************************************
// ************************************************************************************