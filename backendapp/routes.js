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
    expobj.get('/api/abouts',function(req,res){
      About.find((error,data)=>{
        if(error){
          res.send(error);
        }
        res.json(data);
      });
    });
    expobj.put('/api/abouts/:id',function(req,res){
      console.log('Updated Data First Name: '+req.body.first_name+'\nlast name: '+req.body.last_name+'\nContact Number: '+req.body.phone);
      About.update({_id: req.body._id},{$set:{first_name:req.body.first_name,last_name:req.body.last_name,phone:req.body.phone}},function(err,update){
        if(err){
          res.json(err);
        }
        else{
          res.json(update);
        }
      });
    });
      expobj.get('/api/abouts/:id',function(req,res){
        About.find({_id:req.params.id},function(error,updata){
          if(error){
            res.send(error);
          }
          res.json(updata);
        });
      });

      expobj.delete('/api/abouts/:id',function(req,res){

        About.deleteOne({_id:req.params.id},function(error,updata){
          if(error){
            res.send(error);
          }
          res.json(updata);
        });
      });

  };
