  const express = require('express');
  var bodyParser = require('body-parser');
  var mongoose = require('mongoose');

    const app = express();
  const port = process.env.PORT || 3000;
  const api = require('./api/api.js');
  var varSum;

  mongoose.connect('mongodb://test:test@ds149874.mlab.com:49874/itemdb');
  var options = {
    cache: true, // start caching
    ttl: 30 // 30 seconds
  };

  // adding mongoose cachebox
  mongooseCachebox(mongoose, options);

  var itemSchema = new mongoose.Schema({
    name:String,
    item:String,
    price:Number,
    total:Number,
  });

  //creating schema for total

  var totalSchema = new mongoose.Schema(
    {
    id:Number,
    total:Number,
    sectotal:Number,
  }
  );
  var Todo = mongoose.model('Todo',itemSchema);

  //creating model for total variable

  var initalTotal = mongoose.model('Total',totalSchema);

  var urlencodedParser = bodyParser.urlencoded({ extended: false });
  app.set('view engine','ejs');
  app.use('/assets', express.static('assets'));

  app.get('/',(req,res)=>{

    res.redirect(301,'landing');
  });

  app.get('/landing',(req,res)=>{
    setTimeout(()=>{Todo.find({},(err,data)=>{
      if (err) {
        throw err;
      }
      else{
        initalTotal.find({},(err,tot)=>{
        res.render('landing.ejs',{todos:data,totals:tot});

        });
    }
    });
  },3000);
  });

  app.get('*',(req,res)=>{

    res.render('404');
  });
  app.post('/landing',urlencodedParser,function(req,res){
      var oldSum;
      var oldData;
      var newData
      var dataObj= req.body;
      var sum = api.calSum(req.body);
      function retrieveUser(callback) {
          initalTotal.find({},(err,data)=>{
         if(err) callback(null,err);
            else callback(null,data[0]);
       });
     };

    retrieveUser(function(err, user) {
    if (err) {
      console.log(err);
    }
    // console.log(user);
    // console.log('retrieved user is '+user+'\n');
    oldSum = user;
    console.log('Now the old Sum is' + oldSum);
    // console.log(oldSum.total);
  });
      setTimeout(()=>{
          console.log(dataObj);
        var name =dataObj.name.toLowerCase();;
          if (name==='rahul') {
            oldData={
              id:1,
              total:oldSum.total,
              sectotal:oldSum.sectotal,
            }
            newData={
              id:1,
              total:oldSum.total+Number(sum),
              sectotal:oldSum.sectotal,
            }
          }
            else if(name==='rohit'){
              oldData={
                id:1,
                total:oldSum.total,
                sectotal:oldSum.sectotal,
              }
              newData={
                id:1,
                total:oldSum.total,
                sectotal:oldSum.sectotal+Number(sum),
              }
          }
          console.log(newData.total);
          initalTotal.findOneAndUpdate(oldData, newData, {upsert:true}, function(err, doc){
          if (err) throw err;
          console.log('Saved');
          });
      },2500);

      var newTodo = Todo(dataObj).save((err,data)=>{
        if (err) {
          throw err;
        }
        // console.log('todo');
        res.json(data);
      });


  });


  app.listen(port,()=>{

    console.log(`We are listening to port ${port}`);
  });
