const calSum= (data) => {
  let rgSum=0, rsSum=0, name =data.name.toLowerCase();;

  if (name==='rahul' && name!=='rohit') {
    return rgSum =+ data.price;
  }
  else if (name==='rohit' && name!=='rahul') {
    return rsSum =+ data.price;
  }  
  else {
    return false;
  }
};

module.exports={
  calSum // ES6 object literal short-hand syntax
};
