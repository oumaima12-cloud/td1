const express = require("express");
const app = express();
const port =3000;
app.get('/',(req,res) => {
    res.send('hello 3lig');
});
app.listen(port,() =>{
console.log(`application sur le port ${port}`)
});