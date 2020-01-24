var About = require('./models/contacts');
  module.exports = function(expobj){
    expobj.post('/api/abouts',function(req,res){
      console.log('first: '+req.body.first_name+'\nlast name: '+req.body.last_name+'\nContact Number: '+req.body.phone);
        let newContact = new About({
          first_name: req.body.first_name,
          last_name: req.body.last_name,
          phone: req.body.phone
        });
        newContact.save(function(err,contacts){
          if(err){
            res.json({msg:'Failed to add contact'});
          }
          else{
            res.json({msg:'contact added successfully'});
          }
        });
    });
    expobj.get('/api/abouts1',function(req,res){
      About.find((error,data)=>{
        if(error){
          res.send(error);
        }
        res.json(data);
        console.log(data);
      });
    });
  };
