const nodemailer = require('nodemailer');


const transporter = nodemailer.createTransport({
    service:"gmail",
    auth:{
        user:process.env.EMAIL_USERNAME,
        pass:process.env.EMAIL_PASSWORD
    }
});



const info = async(to) => {
    const mailOptions = {
        from:process.env.EMAIL_USERNAME,
        to:to,
        subject:"Email from Nodemailer",
        text:"You'r Registered successfully"
    };
    await transporter.sendMail(mailOptions,(err,data)=> {
        if(err) {
            console.log("error.....",err.msg)
        }
        console.log("data....",data)
    })
};

module.exports = info;

