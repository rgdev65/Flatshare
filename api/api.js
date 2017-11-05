const calSum= (data) => {
  let rgSum=0, rsSum=0, name =data.name.toLowerCase();;

  if (name==='rahul' && name!=='rohit') {
    rgSum = +rgSum +  +data.price;
    return rgSum;
  }

  else if (name==='rohit' && name!=='rahul') {
      rsSum= rsSum + data.price;
      return rsSum;
  }  
  else {
    return false;
  }
};

module.exports={
  calSum // ES6 object literal short-hand syntax
};
