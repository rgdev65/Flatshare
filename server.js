const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('./db');
const mongooseCachebox=require('mongoose-cachebox');
const {Todo, initialTotal} = require('./models');
const {retrieveUser} = require('./helpers');
const morgan = require('morgan');
const config = require('./config');

const port = process.env.PORT || 3000;

const api = require('./api/api.js');
const app = express();

// mongoose.connect('mongodb://test:test@ds149874.mlab.com:49874/itemdb');
const options = {
  cache: true, // start caching
  ttl: 30 // 30 seconds
};

// adding mongoose cachebox
mongooseCachebox(mongoose, options);

const urlencodedParser = bodyParser.urlencoded({ extended: false });
app.set('view engine','ejs');
app.use('/assets', express.static('assets'));

// redirecting to the landing page
app.get('/',(req,res)=>{
  res.redirect(301,'landing');
});

app.get('/landing',(req,res) => {
  setTimeout(() => {// Why?
    Todo.find({}, (err, data) => { 
      if (err) {
        throw err;
      }
      initialTotal.find({}, (err, tot) => {
        if (err) {
          throw err;
        }
        res.render('landing.ejs',{todos:data,totals:tot});
      });
    });
  },3000);
});


app.post('/landing',urlencodedParser,function(req,res){
    let oldSum;
    let oldData;
    let newData
    let dataObj = req.body;
  
    (new Todo(dataObj)).save((err,data)=>{
      if (err) {
        throw err;
      }
      // console.log('todo');
      res.json(data);
    });
    let sum = api.calSum(req.body);
    

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
        // console.log(newData.total);
        initialTotal.findOneAndUpdate(oldData, newData, {upsert:true}, function(err, doc){
        if (err) throw err;
        console.log('Saved');
        });
    },2500);
});

// should be at the bottom
app.get('*',(req,res)=>{
  res.render('404');
});

app.listen(port,()=>{
  console.log(`We are listening to port ${port}`);
});
