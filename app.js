//second question
var express = require('express');
var nodemailer = require('nodemailer');
var app = express();
var fs = require('fs');
app.set('port', process.env.PORT || 1234);

app.use(express.static(__dirname + '/public'));


var bodyParser = require('body-parser');
// Create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })


app.post('/p_post', urlencodedParser, function(req, res) {
    var response = {
        Namein: req.body.Namein,
        Emailin: req.body.Emailin,
        Messagein:req.body.Messagein
    };
    console.log(response);
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'zayedpremier1999@gmail.com',
          pass: 'Has75771@'
        }
      });
      
      var mailOptions = {
        from:response.Emailin,
        to:'zayedpremier1999@gmail.com',
        subject: response.Namein+" has sent you a very Important Email!!",
        text: "Name:"+ response.Namein+ "\nEmail: "+response.Emailin+"\nMessage :" +response.Messagein
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) 
        {
            console.log(error);
        }
         else 
        {
            console.log(" The content has been sent " + info.response);
            res.redirect('/success.html');
        }
      });
})
// custom 404 page 
app.use(function(req, res) {
    res.type('text/plain');
    res.status(404);
    res.send('404 - Not Found');
});

// custom 500 page 
app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.type('text/plain');
    res.status(500);
    res.send('500 - Server Error');
});

app.listen(app.get('port'), function() {
    console.log('Express started on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate.');
});