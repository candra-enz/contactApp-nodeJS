const yargs = require("yargs");
//mengambil argumen dari comand line
// const command = process.argv[2];

// if(command === 'add'){

// } else if (command === 'remove'){

// } else if (command === 'list'){

// }

console.log(yargs.argv);






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