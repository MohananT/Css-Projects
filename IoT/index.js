var aws = require("aws-iot-device-sdk");

// config
var device = aws.device({
  keyPath: "./certs/db6e1ec51d-private.pem.key",
  certPath: "./certs/db6e1ec51d-certificate.pem.crt",
  caPath: "./certs/Amazon_Root_CA_1.pem",
  host: "a2vyhwdox6nya4-ats.iot.ap-south-1.amazonaws.com"
});

// Connect
device.on("connect", function() {
  console.log("Connected");
});
// Error
device.on("error", function(error) {
  console.log("Error: ", error);
});

device.subscribe("my/topic");

// device.publish("my/topic", JSON.stringify({message:'hello'}));

device.publish("my/topic", JSON.stringify({
  row: '1',
  pos: '2'
}));


device.on('message', function(topic, payload) {
  console.log(topic, ':', payload.toString());
});
