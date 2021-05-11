function myvalidation(){  
var surname =document.validate.surname.value;  
var firstname=document.validate.firstname.value;  
  
if (surname==null || firstname==""){  
  alert("Name can't be blank");  
  return false;  
}else if(password.length<6){  
  alert("Password must be at least 6 characters long.");  
  return false;  
  }  
}  
