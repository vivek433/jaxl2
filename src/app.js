const path=require('path')
const express=require('express')
const hbs=require('hbs')

const { generateOTP } = require('../public/js/otp.js'); 
//const User = require('./mongoose');

const port =process.env.PORT || 3000
const app=express()
const publicDirectoryPath=path.join(__dirname,'../public')

app.set('view engine','hbs')
app.use(express.json())
app.use(express.static(publicDirectoryPath))

app.get('',(req,res)=>
{
res.render('index')
})
const OTP = () => {
  
  let otp = Math.random();
otp = otp * 1000000;
otp = parseInt(otp);
  return otp;
};
app.post('/otp',(req,res)=>
 {
     
//return this.signUpUser()
        
const email = req.body.email; 
console.log(req.body)
res.render('otp');

 

})

    
    
    



// app.get('/users',(req,res)=>
// {
  
// })
app.post('/verify',(req,res)=>
{
  //  if(req.body.input==OTP)
  //  {
  //       res.send("ITs ok")
  //  }
 console.log(req.body)
   return res.send("iit")
})
app.listen(port,()=>
{
    console.log('Server is up')
})



//.........................................................................



// module.exports.signUpUser = async (req, res) => {
//   const { email} = req.body; 
//   const isExisting = await findUserByEmail(email);
//   if (isExisting) {
//     return res.send(email);
//   }
//   // create new user
//   const newUser = await createUser(email);
//   if (!newUser[0]) {
//     return res.status(400).send({
//       message: 'Unable to create new user',
//     });
//   }
//   res.send(newUser[1].email);
// };
// const createUser = async (email) => {
  
//     const otpGenerated = generateOTP();

//     const newUser = await User.create({
//       email,
//       otp: otpGenerated,
//     });
//     if (!newUser) {
//       return [false, 'Unable to sign you up'];
//     }
//     return [true, newUser];
//   };
// module.exports.verifyEmail = async (req, res) => {
//   const { email, otp } = req.body;
//   const user = await validateUserSignUp(email, otp);
//   res.send(user);
// };
// const validateUserSignUp = async (email, otp) => {
//     const user = await User.findOne({
//       email,
//     });
//     if (!user) {
//       return [false, 'User not found'];
//     }
//     if (user && user.otp !== otp) {
//       return [false, 'Invalid OTP'];
//     }
   
  
//   };
// const findUserByEmail = async (email) => {
//   const user = await User.findOne({
//     email,
//   });
//   if (!user) {
//     return false;
//   }
//   return user;
// };



