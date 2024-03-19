const mongoose = require('mongoose');
const Chat = require("./models/chat.js");

// Establish connection
main().then( () => {
    console.log("Connection Successfully")
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

let allChats = [
    {
        from: "Ahsan",
        to: "Tasif",
        msg: "Hey, How are you",
        created_at: new Date()
    },
    {
        from: "Aman",
        to: "Tasif",
        msg: "Hey, Tasif",
        created_at: new Date()
    },
    {
        from: "Ankit",
        to: "Vishal",
        msg: "Hey, Vishal",
        created_at: new Date()
    },
    {
        from: "Mayank",
        to: "Ahsan",
        msg: "Hey Ahsan, How are you",
        created_at: new Date()
    },
    {
        from: "Tasif",
        to: "Ankit",
        msg: "Hey Ankit, How are you",
        created_at: new Date()
    },
    {
        from: "Vishal",
        to: "Mayank",
        msg: "Hey, Mayank",
        created_at: new Date()
    },
    {
        from: "Aashish",
        to: "Ankit",
        msg: "Hey, Ankit",
        created_at: new Date()
    },
    {
        from: "Aman",
        to: "Aashish",
        msg: "Hey, Aashish",
        created_at: new Date()
    },
];

Chat.insertMany(allChats);