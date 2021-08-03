function telephoneCheck(str,meme) {
  
  
    
     if(str.length ===4 ){
        return true;
    }
   else if(str.length <1){
       return false
   }
  else if(str ===1){
      return true
  }
   else {
       return false;
   }
    
  }
  
  console.log(telephoneCheck("1222"));
