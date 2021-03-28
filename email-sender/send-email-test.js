var nodemailer = require("nodemailer");

var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "your_email@gmail.com",
    pass: "your_pass",
  },
});

var mailOptions = {
  from: "your_email@gmail.com",
  to: "woxefab474@bombaya.com, myfriend@yahoo.com, myotherfriend@yahoo.com",
  subject: "Sending Email using Node.js",
  text: "That was wild!",
};

/**
 * Para enviar texto formatado em HTML em seu e-mail, use a propriedade "html" em vez da propriedade "text":
 * 
 * var mailOptions = {
  from: 'youremail@gmail.com',
  to: 'myfriend@yahoo.com',
  subject: 'Sending Email using Node.js',
  html: '<h1>Welcome</h1><p>That was easy!</p>'
  }
 */

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent: " + info.response);
  }
});

/**
 * obs: se nao funcionar, tente alterar as configuracoes do seu gmail.
 *
 * check Richard A answer: https://stackoverflow.com/questions/51217785/i-get-a-error-error-invalid-login-535-5-7-8-username-and-password-not-accep/51218909
 *
 */
