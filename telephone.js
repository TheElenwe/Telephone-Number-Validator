function telephoneCheck(str) {
  
   
    if (str.length ===10 || str.length ===12 || str.length === 13 || str==="1"){
        
        return true;
    }
  
   else if(str ==="-" || str ==="(" || str === ")"){
       return true;
   }
   
    
  }
  
  console.log(telephoneCheck("155555555555"));
