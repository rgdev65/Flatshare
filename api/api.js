var calSum= (data) => {
  var rgSum=0;
  var rsSum=0;
  var name =data.name.toLowerCase();;

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
  calSum:calSum
};
