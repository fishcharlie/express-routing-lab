var express = require('express');
var router = express.Router();

var myJSON = [{"id":1,"name":"Chewing Gum","color":"Red"},{"id":2,"name":"Pez","color":"Green"},{"id":3,"name":"Marshmallow","color":"Pink"},{"id":4,"name":"Candy Stick","color":"Blue"}];


router.get('/', function(req, res) {
  res.send(myJSON);
});

router.get('/:id', function(req, res) {
  var myID = req.params.id;

  myJSON.forEach(function(currentValue,index,arr){
    if (currentValue.id==myID) {
      res.send(currentValue);
    }
  });

  res.send("No matching ID");
});

router.post('/', function(req, res) {

  myJSON.push(req.body);

  res.send(req.body);
});

router.put('/:id', function(req, res) {
  var myID = req.params.id;


  myJSON.forEach(function(currentValue,index,arr){
    if (currentValue.id==myID) {
      console.log(req.body.name);
      console.log(req.body.color);

      myJSON[index].name = req.body.name;
      myJSON[index].color = req.body.color;
      res.send("Success");
    }
  });

  res.send("No matching ID");
});



router.delete('/:id', function(req, res) {
  var myID = req.params.id;


  myJSON.forEach(function(currentValue,index,arr){
    if (currentValue.id==myID) {
      myJSON.splice(index,1);
      res.json({"message":"deleted"});
    }
  });
  res.send("No matching ID");

});



module.exports = router;
