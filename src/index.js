module.exports = function check(str, bracketsConfig) {
  // your solution
    var length = str.length;
    for(var i = 0; i < bracketsConfig.length; i++ ){
      str = str.replace(bracketsConfig[i][0] + bracketsConfig[i][1], "")
    }
    if(length == str.length){
      return false;
    }

    if(str.length == 0){
      return true;
    }
    else{
      return check(str, bracketsConfig);
    }
}
