var express = require('express');
var app = express();
var braintree = require("braintree");
var path = require("path");

var gateway = braintree.connect({
  environment: braintree.Environment.Sandbox,
  merchantId: "z3mswkskqhyhkb8n",
  publicKey: "36ck5b3qvnxbzq53",
  privateKey: "ae1852f6077555dc8ff62838d11696ee"
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname+'/payment.html'));
});

var server = app.listen(3010, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});

app.get("/client_token", function (req, res) {
  gateway.clientToken.generate({}, function (err, response) {
    res.send(response.clientToken);
  });
});

app.use(require('body-parser').urlencoded());
app.post("/checkout", function (req, res) {
  console.log(req.body)
  var nonce = req.body.payment_method_nonce;
  // Use payment method nonce here
  gateway.transaction.sale({
    amount: req.body.amount,
    paymentMethodNonce: "fake-valid-nonce",
  }, function (err, result) {
  	console.log(result)
  	if(result.success){
  		res.send("complete")
  	}
  	else{
  		res.send("failed")
  	}
  });
});