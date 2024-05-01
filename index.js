const express = require('express')
const ejs = require('ejs')
const mongoose = require('mongoose');

const app = express()
app.set('view engine','ejs');
app.use(express.json()); //this is use when we  pass data in json
const userRoute = require('./routes/users')
const port = 3000
app.use(userRoute)
//connect to database

// const USERS = [
//   {
//       "id": 7,
//       "email": "michael.lawson@reqres.in",
//       "first_name": "Michael",
//       "last_name": "Lawson",
//       "avatar": "https://reqres.in/img/faces/7-image.jpg"
//   },
//   {
//       "id": 8,
//       "email": "lindsay.ferguson@reqres.in",
//       "first_name": "Lindsay",
//       "last_name": "Ferguson",
//       "avatar": "https://reqres.in/img/faces/8-image.jpg"
//   },
//   {
//       "id": 9,
//       "email": "tobias.funke@reqres.in",
//       "first_name": "Tobias",
//       "last_name": "Funke",
//       "avatar": "https://reqres.in/img/faces/9-image.jpg"
//   },
//   {
//       "id": 10,
//       "email": "byron.fields@reqres.in",
//       "first_name": "Byron",
//       "last_name": "Fields",
//       "avatar": "https://reqres.in/img/faces/10-image.jpg"
//   },
//   {
//       "id": 11,
//       "email": "george.edwards@reqres.in",
//       "first_name": "George",
//       "last_name": "Edwards",
//       "avatar": "https://reqres.in/img/faces/11-image.jpg"
//   },
//   {
//       "id": 12,
//       "email": "rachel.howell@reqres.in",
//       "first_name": "Rachel",
//       "last_name": "Howell",
//       "avatar": "https://reqres.in/img/faces/12-image.jpg"
//   }
// ];
app.get('/', (req, res) => {
  res.send('Hello World!')
})
// app.get('/about', (req, res) => {
//     res.send('About!')
//   })
// //for template engines we use render method
//   app.get('/mumbai', (req, res) => {
//     res.render('example.ejs',{cityName:'mumbai'})
//   })
//   app.get('/goa', (req, res) => {
//     res.render('example.ejs',{cityName:'goa'})
//   })
//   app.get('/delhi', (req, res) => {
//     res.render('example.ejs',{cityName:'delhi'})
//   })
//   app.get('/michael', (req, res) => {
//     res.render('user.ejs', {
//       "id": 7,
//       "email": "michael.lawson@reqres.in",
//       "first_name": "Michael",
//       "last_name": "Lawson",
//       "avatar": "https://reqres.in/img/faces/7-image.jpg",
//       "hobbies":['swimming','coding'],
//       "isPremium":true
//   })
//   })

//   app.get('/lindsay', (req, res) => {
//     res.render('user.ejs', 
//       {
//         "id": 8,
//         "email": "lindsay.ferguson@reqres.in",
//         "first_name": "Lindsay",
//         "last_name": "Ferguson",
//         "avatar": "https://reqres.in/img/faces/8-image.jpg",
//         "hobbies":["coding","cricket","drinking"],
//         "isPremium":false

//     })
//   })
//   app.get('/404', (req, res) => {
//     res.send('404 Page not found!')
//   })
//   //using request parameters
//   app.get('/:username', (req, res) => {
//     const {username} = req.params;
//     const userdetails = USERS.find((user)=>user.first_name===username);
//     if(userdetails){
//       res.render('user.ejs', userdetails)
//     }
//     else{
//       res.redirect('/404')
//     }
   
//   })

 

//   //request parameters
//   app.get('/:cityName',(req,res)=>{
//     const {cityName}=req.params;
//     res.send(cityName)
//   })






app.listen(port, () => {
  mongoose.connect('mongodb+srv://user:User123@cluster0.9q7dhwz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0').then(()=>console.log("Db is connected cuccessfully.")).catch((err)=>console.log(err))

  console.log(`Example app listening on port ${port}`)
})